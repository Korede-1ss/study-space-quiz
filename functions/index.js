const crypto = require("node:crypto");
const admin = require("firebase-admin");
const { beforeUserSignedIn } = require("firebase-functions/v2/identity");
const { HttpsError, onCall } = require("firebase-functions/v2/https");

admin.initializeApp();

const db = admin.firestore();
const pageSizeLimit = 100;

function getProviderId(event) {
  const credentialProvider = event.credential?.providerId;
  if (credentialProvider) return credentialProvider;
  const match = event.eventType?.match(/:([^:]+)$/);
  return match?.[1] || "";
}

function parseDate(value, fieldName, inclusiveEnd = false) {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new HttpsError("invalid-argument", `${fieldName} must be a date in YYYY-MM-DD format.`);
  }
  const date = new Date(`${value}T00:00:00.000Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new HttpsError("invalid-argument", `${fieldName} is not a valid date.`);
  }
  if (inclusiveEnd) date.setUTCDate(date.getUTCDate() + 1);
  return admin.firestore.Timestamp.fromDate(date);
}

exports.recordSuccessfulSignIn = beforeUserSignedIn(
  { region: "us-central1", timeoutSeconds: 7 },
  async (event) => {
    const user = event.data;
    if (!user?.uid || !user.email || user.customClaims?.admin === true) return;

    if (typeof event.eventId !== "string" || !event.eventId) {
      throw new Error("Firebase did not provide an ID for the authentication event.");
    }
    const provider = getProviderId(event);
    if (!provider) {
      throw new Error("Firebase did not provide the sign-in provider for the authentication event.");
    }
    const eventDate = new Date(event.timestamp);
    if (!Number.isFinite(eventDate.getTime())) {
      throw new Error("Firebase did not provide a valid timestamp for the authentication event.");
    }

    const signedInAt = admin.firestore.Timestamp.fromDate(eventDate);
    const activityId = crypto.createHash("sha256").update(event.eventId).digest("hex");
    const activityRef = db.collection("loginActivity").doc(activityId);
    const summaryRef = db.collection("studentLoginSummary").doc(user.uid);

    await db.runTransaction(async (transaction) => {
      const existingEvent = await transaction.get(activityRef);
      if (existingEvent.exists) return;
      const existingSummary = await transaction.get(summaryRef);

      const record = {
        uid: user.uid,
        email: user.email,
        emailLower: user.email.toLowerCase(),
        provider,
        signedInAt
      };
      transaction.create(activityRef, {
        ...record,
        authEventId: event.eventId
      });
      const previousLoginAt = existingSummary.data()?.lastLoginAt;
      if (!previousLoginAt || previousLoginAt.toMillis() <= signedInAt.toMillis()) {
        transaction.set(summaryRef, {
          uid: user.uid,
          email: user.email,
          emailLower: user.email.toLowerCase(),
          lastProvider: provider,
          lastLoginAt: signedInAt,
          lastEventId: activityId
        });
      }
    });
  }
);

exports.searchLoginActivity = onCall(
  { region: "us-central1" },
  async (request) => {
    if (request.auth?.token.admin !== true) {
      throw new HttpsError("permission-denied", "Administrator access is required.");
    }

    const input = request.data || {};
    const emailPrefix = typeof input.emailSearch === "string" ? input.emailSearch.trim().toLowerCase() : "";
    if (emailPrefix.length > 254) {
      throw new HttpsError("invalid-argument", "Email search must be 254 characters or fewer.");
    }
    const startAt = parseDate(input.startDate, "Start date");
    const endBefore = parseDate(input.endDate, "End date", true);
    if (startAt && endBefore && startAt.toMillis() >= endBefore.toMillis()) {
      throw new HttpsError("invalid-argument", "The end date must be on or after the start date.");
    }

    const requestedPageSize = Number(input.pageSize);
    const pageSize = Number.isInteger(requestedPageSize)
      ? Math.min(Math.max(requestedPageSize, 1), pageSizeLimit)
      : 50;

    let query = db.collection("loginActivity");
    if (emailPrefix) {
      query = query
        .where("emailLower", ">=", emailPrefix)
        .where("emailLower", "<=", `${emailPrefix}\uf8ff`)
        .orderBy("emailLower")
        .orderBy("signedInAt", "desc");
    } else {
      query = query.orderBy("signedInAt", "desc");
    }
    if (startAt) query = query.where("signedInAt", ">=", startAt);
    if (endBefore) query = query.where("signedInAt", "<", endBefore);

    if (input.pageToken) {
      if (typeof input.pageToken !== "string" || input.pageToken.length > 1500) {
        throw new HttpsError("invalid-argument", "The page cursor is invalid.");
      }
      const cursor = await db.collection("loginActivity").doc(input.pageToken).get();
      if (!cursor.exists) {
        throw new HttpsError("invalid-argument", "The page cursor has expired. Refresh the activity list.");
      }
      query = query.startAfter(cursor);
    }

    const snapshot = await query.limit(pageSize + 1).get();
    const hasMore = snapshot.docs.length > pageSize;
    const records = snapshot.docs.slice(0, pageSize);
    const uniqueUids = [...new Set(records.map((record) => record.get("uid")).filter(Boolean))];
    const summarySnapshots = uniqueUids.length
      ? await db.getAll(...uniqueUids.map((uid) => db.collection("studentLoginSummary").doc(uid)))
      : [];
    const summaries = new Map(summarySnapshots.map((summary) => [summary.id, summary.data()]));

    return {
      records: records.map((record) => {
        const data = record.data();
        const lastLogin = summaries.get(data.uid);
        return {
          email: data.email,
          uid: data.uid,
          provider: data.provider,
          signedInAt: data.signedInAt.toDate().toISOString(),
          lastLoginAt: lastLogin?.lastLoginAt?.toDate().toISOString() || data.signedInAt.toDate().toISOString(),
          lastProvider: lastLogin?.lastProvider || data.provider
        };
      }),
      nextPageToken: hasMore ? records[records.length - 1].id : null
    };
  }
);

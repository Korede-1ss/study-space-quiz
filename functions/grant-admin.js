const admin = require("firebase-admin");

function readArguments(args) {
  const values = new Map();
  let revoke = false;
  for (let index = 0; index < args.length; index += 1) {
    const key = args[index];
    if (key === "--revoke") {
      revoke = true;
      continue;
    }
    if (!["--uid", "--email"].includes(key) || !args[index + 1]) {
      throw new Error("Usage: npm run grant-admin -- --uid FIREBASE_UID --email VERIFIED_EMAIL [--revoke]");
    }
    values.set(key, args[index + 1]);
    index += 1;
  }
  const uid = values.get("--uid");
  const email = values.get("--email");
  if (!uid || !email || values.size !== 2) {
    throw new Error("Usage: npm run grant-admin -- --uid FIREBASE_UID --email VERIFIED_EMAIL [--revoke]");
  }
  return { uid, email, revoke };
}

async function main() {
  const { uid, email, revoke } = readArguments(process.argv.slice(2));
  admin.initializeApp({ credential: admin.credential.applicationDefault() });

  const user = await admin.auth().getUser(uid);
  if (user.email?.toLowerCase() !== email.toLowerCase()) {
    throw new Error("The UID and email do not match the Firebase user. No role was changed.");
  }
  const claims = { ...user.customClaims };
  if (revoke) {
    delete claims.admin;
  } else {
    if (!user.emailVerified) {
      throw new Error("Verify this Firebase account's email before granting administrator access.");
    }
    claims.admin = true;
  }
  await admin.auth().setCustomUserClaims(uid, claims);
  console.log(`Administrator access ${revoke ? "revoked from" : "granted to"} ${user.email} (${user.uid}). Sign out and back in to refresh the role.`);
}

main().catch((error) => {
  console.error(`Could not grant administrator access: ${error.message}`);
  process.exitCode = 1;
});

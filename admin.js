const adminLogin = document.querySelector("#admin-login");
const adminDenied = document.querySelector("#admin-denied");
const adminDashboard = document.querySelector("#admin-dashboard");
const loginMessage = document.querySelector("#admin-login-message");
const activityMessage = document.querySelector("#activity-message");
const activityRows = document.querySelector("#activity-rows");
const activityFilters = document.querySelector("#activity-filters");
const pageTokens = [null];
let currentPage = 0;
let auth = null;
let searchActivity = null;
let authCheckRunning = false;

function setMessage(element, message, type = "") {
  element.textContent = message;
  element.className = `admin-message${type ? ` ${type}` : ""}`;
}

function authErrorMessage(error) {
  const messages = {
    "auth/invalid-email": "Enter a valid email address.",
    "auth/invalid-credential": "That email and password combination was not recognized.",
    "auth/invalid-login-credentials": "That email and password combination was not recognized.",
    "auth/user-not-found": "That email and password combination was not recognized.",
    "auth/wrong-password": "That email and password combination was not recognized.",
    "auth/too-many-requests": "Too many attempts. Wait a while and try again.",
    "auth/popup-closed-by-user": "The Google sign-in window was closed before sign-in finished.",
    "auth/popup-blocked": "The Google sign-in popup was blocked. Allow popups for this website and try again.",
    "auth/unauthorized-domain": "Add korede-1ss.github.io under Firebase Authentication → Settings → Authorized domains.",
    "auth/operation-not-allowed": "Enable this provider in Firebase Authentication sign-in settings.",
    "functions/permission-denied": "Your account does not have administrator access.",
    "functions/not-found": "The secure admin service has not been deployed to Firebase yet."
  };
  return messages[error?.code] || error?.message || "The request failed. Please try again.";
}

function showLogin(message = "") {
  adminLogin.classList.remove("hidden");
  adminDenied.classList.add("hidden");
  adminDashboard.classList.add("hidden");
  if (message) setMessage(loginMessage, message, "error");
}

function showDenied(message) {
  adminLogin.classList.add("hidden");
  adminDashboard.classList.add("hidden");
  adminDenied.classList.remove("hidden");
  document.querySelector("#admin-denied-copy").textContent = message;
}

function formatDate(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "Date unavailable";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function appendCell(row, text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  row.append(cell);
}

function renderRecords(records) {
  activityRows.replaceChildren();
  if (!records.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.className = "empty-row";
    cell.textContent = "No login records found for these filters.";
    row.append(cell);
    activityRows.append(row);
    return;
  }

  records.forEach((record) => {
    const row = document.createElement("tr");
    appendCell(row, record.email || "Email unavailable");
    appendCell(row, record.uid || "UID unavailable");
    appendCell(row, formatDate(record.signedInAt));
    appendCell(row, record.provider === "google.com" ? "Google" : record.provider === "password" ? "Email/Password" : record.provider);
    appendCell(row, `${formatDate(record.lastLoginAt)} (${record.lastProvider === "google.com" ? "Google" : record.lastProvider === "password" ? "Email/Password" : record.lastProvider})`);
    activityRows.append(row);
  });
}

async function loadActivity(pageIndex = currentPage) {
  if (!searchActivity) {
    setMessage(activityMessage, "The secure activity service is not available.", "error");
    return;
  }

  currentPage = pageIndex;
  const data = {
    emailSearch: document.querySelector("#activity-email").value.trim(),
    startDate: document.querySelector("#activity-start-date").value,
    endDate: document.querySelector("#activity-end-date").value,
    pageSize: 50,
    pageToken: pageTokens[currentPage]
  };
  document.querySelector("#activity-search").disabled = true;
  document.querySelector("#activity-previous").disabled = true;
  document.querySelector("#activity-next").disabled = true;
  setMessage(activityMessage, "Loading private login activity…");

  try {
    const result = await searchActivity(data);
    const response = result.data;
    renderRecords(response.records || []);
    if (response.nextPageToken) {
      pageTokens[currentPage + 1] = response.nextPageToken;
    } else {
      pageTokens.length = currentPage + 1;
    }
    document.querySelector("#activity-page-label").textContent = `Page ${currentPage + 1}`;
    document.querySelector("#activity-previous").disabled = currentPage === 0;
    document.querySelector("#activity-next").disabled = !response.nextPageToken;
    setMessage(activityMessage, `${response.records.length} login event${response.records.length === 1 ? "" : "s"} on this page.`, "success");
  } catch (error) {
    renderRecords([]);
    setMessage(activityMessage, authErrorMessage(error), "error");
  } finally {
    document.querySelector("#activity-search").disabled = false;
  }
}

async function verifyAdmin(user) {
  if (authCheckRunning) return;
  authCheckRunning = true;
  try {
    const token = await user.getIdTokenResult(true);
    if (token.claims.admin !== true) {
      showDenied(`Signed in as ${user.email || user.uid}, but this account has not been granted the administrator role.`);
      return;
    }
    adminLogin.classList.add("hidden");
    adminDenied.classList.add("hidden");
    adminDashboard.classList.remove("hidden");
    document.querySelector("#admin-account-email").textContent = `Administrator: ${user.email || user.uid}`;
    await loadActivity(0);
  } catch (error) {
    showDenied(`Could not verify administrator access: ${authErrorMessage(error)}`);
  } finally {
    authCheckRunning = false;
  }
}

async function initialiseAdmin() {
  const config = window.STUDYSPACE_FIREBASE;
  if (!config?.apiKey || !window.firebase?.initializeApp || !window.firebase?.functions) {
    showLogin("Firebase could not be initialized. Check the Firebase web config and reload the page.");
    return;
  }

  try {
    const app = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(config);
    auth = app.auth();
    await auth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
    searchActivity = app.functions("us-central1").httpsCallable("searchLoginActivity");
    auth.onAuthStateChanged((user) => {
      if (user) {
        verifyAdmin(user);
      } else {
        authCheckRunning = false;
        showLogin();
      }
    }, (error) => showLogin(`Could not check sign-in: ${authErrorMessage(error)}`));
    auth.getRedirectResult().catch((error) => setMessage(loginMessage, authErrorMessage(error), "error"));
  } catch (error) {
    showLogin(`Could not initialize the secure admin sign-in: ${authErrorMessage(error)}`);
  }
}

document.querySelector("#admin-login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!auth) {
    setMessage(loginMessage, "Firebase Authentication is not ready. Reload the page and try again.", "error");
    return;
  }
  const button = document.querySelector("#admin-email-submit");
  button.disabled = true;
  setMessage(loginMessage, "Signing in…");
  try {
    await auth.signInWithEmailAndPassword(
      document.querySelector("#admin-email").value.trim(),
      document.querySelector("#admin-password").value
    );
  } catch (error) {
    setMessage(loginMessage, authErrorMessage(error), "error");
  } finally {
    button.disabled = false;
    document.querySelector("#admin-password").value = "";
  }
});

document.querySelector("#admin-google-submit").addEventListener("click", async () => {
  if (!auth) {
    setMessage(loginMessage, "Firebase Authentication is not ready. Reload the page and try again.", "error");
    return;
  }
  const provider = new window.firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    if (error.code === "auth/popup-blocked" || error.code === "auth/operation-not-supported-in-this-environment") {
      try {
        await auth.signInWithRedirect(provider);
        return;
      } catch (redirectError) {
        setMessage(loginMessage, authErrorMessage(redirectError), "error");
      }
    } else {
      setMessage(loginMessage, authErrorMessage(error), "error");
    }
  }
});

document.querySelector("#activity-filters").addEventListener("submit", async (event) => {
  event.preventDefault();
  pageTokens.length = 1;
  await loadActivity(0);
});

document.querySelector("#activity-clear").addEventListener("click", async () => {
  activityFilters.reset();
  pageTokens.length = 1;
  await loadActivity(0);
});

document.querySelector("#activity-previous").addEventListener("click", () => {
  if (currentPage > 0) loadActivity(currentPage - 1);
});

document.querySelector("#activity-next").addEventListener("click", () => {
  if (pageTokens[currentPage + 1]) loadActivity(currentPage + 1);
});

document.querySelector("#admin-signout").addEventListener("click", async () => {
  if (!auth) return;
  try {
    await auth.signOut();
  } catch (error) {
    setMessage(activityMessage, `Could not sign out: ${authErrorMessage(error)}`, "error");
  }
});

document.querySelector("#admin-denied-signout").addEventListener("click", async () => {
  if (!auth) return;
  try {
    await auth.signOut();
  } catch (error) {
    showDenied(`Could not sign out: ${authErrorMessage(error)}`);
  }
});

initialiseAdmin();

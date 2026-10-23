# Firebase administrator dashboard setup

Study Space is hosted on GitHub Pages, which can serve the student site and the separate `admin.html` page but cannot safely assign administrator roles or write trustworthy login records. Those operations run in Firebase Cloud Functions using the Admin SDK. No Admin SDK key belongs in this repository.

## Firebase services to enable

1. In Firebase Console, open project `studyspace-2aa7d`.
2. Create a Cloud Firestore database if one does not already exist. Choose a location close to your students; a database's location cannot be changed later.
3. Upgrade Firebase Authentication to **Identity Platform**. The login-record hook is a blocking sign-in function, which Firebase only runs for Identity Platform projects.
4. Enable billing for Cloud Functions deployment if Firebase prompts for the Blaze plan. Cloud Functions and Identity Platform may incur charges; review Google's current pricing and set a budget alert before enabling billing. Do not deploy the functions until you are comfortable with the billing terms.
5. In Authentication → Sign-in method, keep Email/Password and Google enabled. In Authentication → Settings → Authorized domains, make sure `korede-1ss.github.io` is listed.

## Deploy the secure backend

Install Node.js 20 and the Firebase CLI on your computer, open PowerShell in this project folder, then run:

```powershell
npm install -g firebase-tools
firebase login
firebase use studyspace-2aa7d
npm install --prefix functions
firebase deploy --only functions,firestore:rules,firestore:indexes
```

The first deployment can ask you to enable required Google Cloud APIs. Approve only if you have reviewed the project's billing settings. The Firestore rules deny all direct client access to login records; the administrator dashboard reads them through a callable function that checks a Firebase custom claim.

## Grant the administrator role to your account

1. Register your own account through the existing Study Space page and verify its email. You can use Email/Password or Google.
2. In Firebase Console → Authentication → Users, copy the exact account's **UID** and email address.
3. Install the Google Cloud CLI and sign in with the Google account that has permission to administer this Firebase project:

```powershell
gcloud auth application-default login
gcloud config set project studyspace-2aa7d
npm --prefix functions run grant-admin -- --uid YOUR_FIREBASE_UID --email YOUR_VERIFIED_EMAIL
```

The script checks that the UID and verified email match an existing Firebase user before adding the `admin: true` custom claim. Only someone with privileged Google Cloud credentials can run it successfully. Never commit a service-account key, private key, or Admin SDK credentials to GitHub.

After the role is granted, sign out and back in to refresh your Firebase token, then open:

`https://korede-1ss.github.io/study-space-quiz/admin.html`

The admin page accepts Email/Password or Google sign-in, but it only shows records after Firebase confirms the server-assigned admin claim. A student's normal account cannot grant itself that claim.

To remove the role later, use the same command with `--revoke`:

```powershell
npm --prefix functions run grant-admin -- --uid YOUR_FIREBASE_UID --email YOUR_VERIFIED_EMAIL --revoke
```

## Login activity and privacy

The Identity Platform `beforeUserSignedIn` function records the verified Firebase authentication event, UID, email, provider, and event time in Firestore. It skips accounts with the administrator claim. Students cannot directly read or write either activity collection; the dashboard fetches paged results through the admin-checked callable function. Email search matches the beginning of the address; date filters use UTC calendar dates, and displayed timestamps use the browser's local timezone.

The student quiz and progress remain on the existing site and in the browser's local storage. Login activity is separate and is not shown to student accounts.

## Publish the site

The GitHub Pages workflow deploys the existing quiz, `admin.html`, its styles and script, and the Firebase web config. Push the changes to `main` and wait for the Pages workflow to succeed. Cloud Functions and Firestore rules are separate from GitHub Pages and must be deployed with the Firebase CLI command above.

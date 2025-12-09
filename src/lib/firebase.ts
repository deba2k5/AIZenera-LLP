import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQipy6mr-LnwWkVmOzRX2ggo8MlNhuQTg",
  authDomain: "aizenera-e909b.firebaseapp.com",
  projectId: "aizenera-e909b",
  storageBucket: "aizenera-e909b.firebasestorage.app",
  messagingSenderId: "743375221124",
  appId: "1:743375221124:web:e2824588a319fc9a022dd1",
  measurementId: "G-T5N8GCYNQW",
};

let app: FirebaseApp;
let analytics: Analytics | undefined;
let auth: Auth;
let db: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (err) {
    // Analytics not available in all environments; ignore failures.
    console.warn("Analytics init skipped", err);
  }
}

auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn("Auth persistence setup failed", err);
});

db = getFirestore(app);

export { app, analytics, auth, db };

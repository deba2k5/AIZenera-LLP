import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence, signInAnonymously, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIZZ5cFLgrYG7byA2lYMDTZFEAmV39FUc",
  authDomain: "portfolio-8eb82.firebaseapp.com",
  projectId: "portfolio-8eb82",
  storageBucket: "portfolio-8eb82.firebasestorage.app",
  messagingSenderId: "222015202664",
  appId: "1:222015202664:web:c8d0dc81bc81bb211f22dd",
  measurementId: "G-EEBJSX791Q"
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

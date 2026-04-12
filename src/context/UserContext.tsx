import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

type User = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  college?: string;
  course?: string;
  year?: string;
  bio?: string;
  avatarDataUrl?: string | null;
};

type Ctx = {
  user: User | null;
  loading: boolean;
  updateUser: (partial: Partial<User>) => Promise<void>;
  resetUser: () => Promise<void>;
};
const UserContext = createContext<Ctx | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      setLoading(true);
      if (!fbUser) {
        try {
          await signInAnonymously(auth);
        } catch (err) {
          console.error("Auth failed", err);
          setLoading(false);
        }
        return;
      }

      setUid(fbUser.uid);
      try {
        const snap = await getDoc(doc(db, "profiles", fbUser.uid));
        if (snap.exists()) {
          setUser(snap.data() as User);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.warn("Failed to load profile (check Firestore rules)", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  const value = useMemo<Ctx>(() => ({
    user,
    loading,
    updateUser: async (partial) => {
      setUser((prev) => ({ ...(prev ?? {}), ...partial }));
      if (uid) {
        try {
          await setDoc(doc(db, "profiles", uid), partial, { merge: true });
        } catch (err) {
          console.error("Failed to persist profile", err);
          throw err; // Propagate to UI for toast handling
        }
      }
    },
    resetUser: async () => {
      setUser(null);
      if (uid) {
        try {
          await setDoc(doc(db, "profiles", uid), {}, { merge: false });
        } catch (err) {
          console.error("Failed to reset profile", err);
        }
      }
    },
  }), [user, uid, loading]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};

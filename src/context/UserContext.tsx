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
  updateUser: (partial: Partial<User>) => void;
  resetUser: () => void;
};
const UserContext = createContext<Ctx | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (!fbUser) {
        await signInAnonymously(auth);
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
        console.warn("Failed to load profile", err);
      }
    });

    return () => unsub();
  }, []);

  const value = useMemo<Ctx>(() => ({
    user,
    updateUser: (partial) => {
      setUser((prev) => {
        const next = { ...(prev ?? {}), ...partial };
        if (uid) {
          setDoc(doc(db, "profiles", uid), next, { merge: true }).catch((err) => {
            console.warn("Failed to persist profile", err);
          });
        }
        return next;
      });
    },
    resetUser: () => {
      setUser(null);
      if (uid) {
        setDoc(doc(db, "profiles", uid), {}, { merge: false }).catch(() => {
          /* ignore */
        });
      }
    },
  }), [user, uid]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};

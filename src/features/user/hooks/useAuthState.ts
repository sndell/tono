import { onAuthStateChanged, onIdTokenChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../../lib/firebase";

const useAuthState = (): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      setUser(JSON.parse(JSON.stringify(user)));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return user;
};

export default useAuthState;

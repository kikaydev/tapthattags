import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        //create parallel user in firestore
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUser(data);
        } else {
          const data = {
            userId: uid,
            tagIds: [],
            firstName: "",
            lastName: "",
            phoneNumber: "",
          };
          await setDoc(doc(db, "users", uid), data);
          setUser(data);
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
};

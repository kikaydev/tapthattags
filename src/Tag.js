import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Unpaired from "./pages/Unpaired";
import PairTag from "./pages/PairTag";
import LoggedInInfo from "./pages/LoggedInInfo";
import LoggedOutInfo from "./pages/LoggedOutInfo";
import Profile from "./pages/Profile";
import Loading from "./pages/Loading";
import NotYourTag from "./pages/NotYourTag";

export const Tag = ({ user }) => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState();
  const [onProfilePage, setOnProfilePage] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) setCurrentId(id);
  }, [id]);

  const pairTag = async () => {
    await setDoc(doc(db, "users", user.userId), {
      firstName: user.firstName ? user.firstName : "",
      lastName: user.lastName ? user.lastName : "",
      phoneNumber: user.phoneNumber ? user.phoneNumber : "",
      email: user.email ? user.email : "",
      tagIds: [...user.tagIds, id],
      userId: user.userId,
    });
    await setDoc(doc(db, "tags", id), {
      id,
      userId: user.userId,
    });
    setData({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      tagIds: [...user.tagIds, id],
      userId: user.userId,
    });
    alert("Paired!");
    window.location.reload();
  };

  const unpair = async () => {
    if (
      window.confirm(
        "Are you sure you want to unpair? This will delete your info from this tag."
      )
    ) {
      await setDoc(doc(db, "users", user.userId), {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        tagIds: user.tagIds.filter((item) => item !== id),
        userId: user.userId,
      });
      await setDoc(doc(db, "tags", id), {
        id,
        userId: null,
      });
      setData();
      alert("Your tag has been unregistered!");
      setOnProfilePage(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    const searchForTag = async () => {
      if (id) {
        const docRef = doc(db, "tags", id);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (!data.userId) {
          return setLoading(false);
        }
        const docRef2 = doc(db, "users", data.userId);
        const docSnap2 = await getDoc(docRef2);
        const d = docSnap2.data();
        setData(d);
        setLoading(false);
      }
    };
    searchForTag();
  }, [id]);

  //RENDER PAGES

  if (loading) return <Loading />;
  else if (onProfilePage)
    return (
      <Profile
        unpair={unpair}
        setOnProfilePage={setOnProfilePage}
        user={user}
      />
    );
  else if (data && !user) return <LoggedOutInfo data={data} />;
  else if (data && !user.tagIds.find((item) => item == currentId)) {
    return <NotYourTag data={data} />;
  } else if (data) {
    return (
      <LoggedInInfo
        setOnProfilePage={setOnProfilePage}
        data={data}
        unpair={unpair}
        user={user}
      />
    );
  } else if (user && !user.tagIds.find((el) => el === id)) {
    return <PairTag pairTag={pairTag} />;
  } else return <Unpaired />;
};

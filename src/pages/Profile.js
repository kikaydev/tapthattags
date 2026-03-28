import { useEffect, useState } from "react";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { OutlinedButton, SmallButton, Title } from "../styled";
import { auth } from "../firebase";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 25px;
    outline: none;
    border: 3px solid #dfcbb7;
    padding: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    input {
      margin: 0;
      margin-bottom: 25px;
    }
    p {
      margin: 0;
      margin-bottom: 5px;
    }
  }
`;

const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 5px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
const SignOut = styled(SmallButton)`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const UnpairButton = styled(OutlinedButton)`
  position: absolute;
  left: 120px;
  bottom: 17px;
`;

const Profile = ({ user, setOnProfilePage, unpair }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setFirst(user.firstName);
      setLast(user.lastName);
      setNumber(user.phoneNumber);
      setEmail(user.email ? user.email : "");
    }
  }, [user]);

  const saveDetails = async () => {
    const docRef = doc(db, "users", user.userId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    await setDoc(doc(db, "users", user.userId), {
      userId: data.userId,
      tagIds: data.tagIds,
      firstName: first,
      lastName: last,
      phoneNumber: number,
      email: email,
    });
    alert("saved");
    window.location.reload();
  };

  useEffect(() => {
    if (!user) setOnProfilePage(false);
  }, [user]);

  if (user)
    return (
      <>
        <Cont>
          <Title>Edit</Title>
          <form>
            <Inner>
              <p>First Name:</p>
              <input
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              />
            </Inner>
            <Inner>
              <p> Last Name:</p>
              <input
                type="text"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </Inner>
            <Inner>
              <p>Phone #:</p>
              <input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Inner>
            <Inner>
              <p>Email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Inner>
          </form>
          <BtnCont>
            <OutlinedButton onClick={() => setOnProfilePage(false)}>
              Back
            </OutlinedButton>

            <SmallButton onClick={() => saveDetails()}>Save</SmallButton>
          </BtnCont>
        </Cont>
        <SignOut onClick={() => auth.signOut()}>Logout</SignOut>
        <UnpairButton onClick={() => unpair()}>Unpair</UnpairButton>
      </>
    );

  if (!user) {
    return <div>Please Login</div>;
  }
};

export default Profile;

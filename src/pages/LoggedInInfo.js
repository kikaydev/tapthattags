import styled from "styled-components";
import { Title, SmallButton, OutlinedButton, Button } from "../styled";
import { auth } from "../firebase";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Group2 = styled.div`
  text-align: center;
  p {
    font-size: 18px;
    text-decoration: underline;
    text-decoration-color: #dfcbb7;
    text-decoration-thickness: 3px;
  }
`;

const LoggedInInfo = ({ data, unpair, user, setOnProfilePage }) => {
  return (
    <>
      <Cont>
        <Title>My Info</Title>
        <Group2>
          <p>{data.firstName + " " + data.lastName}</p>
          <p>{data.phoneNumber}</p>
          <p>{data.email}</p>
        </Group2>
        <Button onClick={() => setOnProfilePage(true)}>Edit Info</Button>
        {data &&
          user &&
          (user.firstName == "" ||
            user.lastName == "" ||
            user.phoneNumber == "" ||
            user.email == "") && (
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              Looks like you're missing some info on your profile. Press "Edit
              Info" to finish your profile!
            </p>
          )}
        <SignOut onClick={() => auth.signOut()}>Logout</SignOut>
        <UnpairButton onClick={() => unpair()}>Unpair</UnpairButton>
      </Cont>
    </>
  );
};

export default LoggedInInfo;

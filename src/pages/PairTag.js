import { auth } from "../firebase";
import styled from "styled-components";
import { Header, Title, Subheader, Button, SmallButton } from "../styled";

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

const PairTag = ({ pairTag }) => {
  return (
    <>
      <Cont>
        <Title>Pair Your Tag</Title>
        <Header>You’re logged in!</Header>
        <Subheader>Pair your account with this tag to add your info</Subheader>
        <Button onClick={() => pairTag()}>Pair</Button>
      </Cont>
      <SignOut onClick={() => auth.signOut()}>Logout</SignOut>
    </>
  );
};

export default PairTag;

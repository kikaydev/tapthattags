import { Button, Header, Subheader, Title } from "../styled";
import { signInWithGoogle } from "../signInWithGoogle";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Unpaired = () => {
  return (
    <Cont>
      <Title>Setup Your Tag</Title>
      <Header>This tag is currently unregistered!</Header>
      <Subheader>
        Please login or sign up to add your information to your tag
      </Subheader>
      <Button onClick={() => signInWithGoogle()}>Login or Sign Up</Button>
    </Cont>
  );
};

export default Unpaired;

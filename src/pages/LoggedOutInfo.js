import styled from "styled-components";
import { Header, SmallButton, Title } from "../styled";
import { signInWithGoogle } from "../signInWithGoogle";

const Group = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Login = styled(SmallButton)``;

const Subtext = styled.p`
  margin-bottom: 7px;
  font-size: 14px;
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

const LoggedOutInfo = ({ data }) => {
  return (
    <>
      <Title>Hi!</Title>
      <Header>Looks like you found my luggage. Please contact:</Header>
      <Group2>
        <p>{data.firstName + " " + data.lastName}</p>
        <a href={`tel:${data.phoneNumber}`}>
          <p>Phone #: {data.phoneNumber}</p>
        </a>
        <a href={`mailto:${data.email}`}>
          <p>Email: {data.email}</p>
        </a>
      </Group2>
      <Group>
        <Subtext>Is this your tag?</Subtext>
        <Login onClick={() => signInWithGoogle()}>Login To Edit</Login>
      </Group>
    </>
  );
};

export default LoggedOutInfo;

import styled from "styled-components";
import { Header, SmallButton, Title } from "../styled";
import { auth } from "../firebase";

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

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotYourTag = ({ data }) => {
  return (
    <Cont>
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
        <p style={{ textDecoration: "none", fontSize: "14px" }}>
          This is not your tag! If you are trying to edit this tag's info,
          please logout and login to the account paired with this tag.
        </p>
      </Group2>
      <Group>
        <Login onClick={() => auth.signOut()}>Logout</Login>
      </Group>
    </Cont>
  );
};

export default NotYourTag;

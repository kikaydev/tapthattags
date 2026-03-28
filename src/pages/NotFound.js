import styled from "styled-components";
import { Header } from "../styled";
import Image from "../tagit-logo.png";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;

const Img = styled.img`
  margin-top: 20px;
  width: 80px;
`;

const NotFound = () => {
  return (
    <Cont>
      <Header>404 Page Not Found. Scan a tag to see info</Header>
      <Img src={Image} />
    </Cont>
  );
};

export default NotFound;

import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Spinner = styled(PuffLoader)`
  position: absolute !important;
  left: 0;
  right: 0;
  margin: auto;
  top: 30%;
`;

const Loading = () => {
  return (
    <Cont>
      <Spinner color="#36312d" size={150} />
    </Cont>
  );
};

export default Loading;

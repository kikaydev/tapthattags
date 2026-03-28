import { Routes, Route, Link } from "react-router-dom";
import { Tag } from "./Tag";
import { useUser } from "./useUser";
import styled from "styled-components";
import Image from "./tagit-logo.png";
import NotFound from "./pages/NotFound";

const Logo = styled.img`
  width: 60px;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

function App() {
  const user = useUser();

  return (
    <div>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/tag/:id" element={<Tag user={user} />} />
      </Routes>
      <Logo src={Image} />
    </div>
  );
}

export default App;

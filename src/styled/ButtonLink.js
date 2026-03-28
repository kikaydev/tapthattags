import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  background: #dfcbb7;
  outline: none;
  border: none;
  border-radius: 25px;
  padding: 8px 25px;
  font-size: 25px;

  :hover {
    cursor: pointer;
  }
`;

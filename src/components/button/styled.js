import styled from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  transition: all 0.5s;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  z-index: 999;
`;

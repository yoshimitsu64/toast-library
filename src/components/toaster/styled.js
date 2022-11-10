import styled from "styled-components";

export const StyledToaster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  ${({ position }) => position.vertical};
  ${({ position }) => position.horizontal};
`;

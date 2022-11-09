import styled from "styled-components";

export const StyledNotification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 250px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  color: ${({ theme }) => theme.color};
  animation: animate 1s cubic-bezier(0, 1, 1, 0);
  transition: all 1s;
  -webkit-transition: transform 2s ease-in-out;
  transition: width 2s, height 2s, transform 2s;
`;

export const StyledCross = styled.div`
  align-self: flex-start;
`;

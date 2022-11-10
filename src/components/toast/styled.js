import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const StyledNotification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 10px;
  min-width: 200px;
  min-height: 50px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color};
  position: relative;
  margin-top: ${({ space }) => space.space?.marginTop[0]}px;
  animation: 0.7s ${fadeIn};
  & > :first-child {
    margin-right: ${({ space }) => space.space?.marginRight[5]}px;
  }
  &.close {
    animation: 0.5s ${fadeOut};
  }
`;

export const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ space }) => space.fontSizes.fontSize[2]}px;
  & > * {
    margin-right: ${({ space }) => space.space?.marginRight[0]}px;
  }
`;

export const StyledCross = styled.div`
  align-self: flex-start;
  cursor: pointer;
`;

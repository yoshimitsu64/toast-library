import styled, { keyframes } from "styled-components";

const leftRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const rightLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const upDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const downUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const downUpHide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const leftRightHide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const rightLeftHide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const upDownHide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const asd = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
`;

export const StyledNotification = styled.div`
  animation: ${asd} 1s linear infinite;
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
  &[data-animation="left-right"] {
    animation: 0.7s ${leftRight};
  }
  &[data-animation="right-left"] {
    animation: 0.7s ${rightLeft};
  }
  &[data-animation="up-down"] {
    animation: 0.7s ${upDown};
  }
  &[data-animation="down-up"] {
    animation: 0.7s ${downUp};
  }
  & > :first-child {
    margin-right: ${({ space }) => space.space?.marginRight[5]}px;
  }
  &.close {
    &[data-animation="left-right"] {
      animation: 0.7s ${leftRightHide};
    }
    &[data-animation="right-left"] {
      animation: 0.7s ${rightLeftHide};
    }
    &[data-animation="up-down"] {
      animation: 0.7s ${upDownHide};
    }
    &[data-animation="down-up"] {
      animation: 0.7s ${downUpHide};
    }
    transition: all 2s;
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

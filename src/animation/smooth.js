import { keyframes } from 'styled-components';

export const leftRight = keyframes`
  from {
    transform: translateX(-110vw);
  }
  to {
    transform: translateX(0);
  }
`;

export const rightLeft = keyframes`
  0%{
    transform: translateX(100vw);
  }
  100%{
    transform: translateX(0);
  }
`;

export const upDown = keyframes`
  from {
    transform: translateY(-100vh);
  }
  to {
    transform: translateY(0);
  }
`;

export const downUp = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
`;

export const leftRightHide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-110vw);
  }
`;

export const rightLeftHide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(110vw);
  }
`;

export const upDownHide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100vh);
  }
`;

export const downUpHide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(120vh);
  }
`;

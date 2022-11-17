import { keyframes } from 'styled-components';

export const leftRight = keyframes`
  0%{
    transform: translateX(-100vw);
  }
  20%{
    transform: translateX(10%)
  }50%{
    transform: translateX(-10%)
  }100%{
    transform: translateX(0%)
  }
`;

export const rightLeft = keyframes`
  0%{
    transform: translateX(110vw);
  }
  20%{
    transform: translateX(-10%);
  }
  50%{
    transform: translateX(10%);
  }
  100%{
    transform: translateX(0);

  }
`;

export const upDown = keyframes`
  0%{
    transform: translateY(-100vh);
  }
  20%{
    transform: translateY(10%);
  }
  50%{
    transform: translateY(-10%);
  }
  100%{
    transform: translateY(0);

  }
`;

export const downUp = keyframes`
  0%{
    transform: translateY(100vh);
  }
  20%{
    transform: translateY(-10%);
  }
  50%{
    transform: translateY(10%);
  }
  100%{
    transform: translateY(0);

  }
`;

export const leftRightHide = keyframes`
  0%{
    transform: translateX(0);
  }
  60%{
    transform: translateX(20%);
  }
  100%{
    transform: translateX(-100vw);
  }
`;

export const rightLeftHide = keyframes`
  0%{
    transform: translateX(0);
  }
  60%{
    transform: translateX(-20%);
  }
  100%{
    transform: translateX(110vw);
  }
`;

export const upDownHide = keyframes`
  0%{
    transform: translateY(0);
  }
  60%{
    transform: translateY(20%);
  }
  100%{
    transform: translateY(-110vh);
  }
`;

export const downUpHide = keyframes`
  0%{
    transform: translateY(0);
  }
  60%{
    transform: translateY(-20%);
  }
  100%{
    transform: translateY(110vh);
  }
`;


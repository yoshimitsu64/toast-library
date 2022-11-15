import styled from 'styled-components';

import * as smooth from '@animation/smooth';
import * as bounce from '@animation/bounce';

export const StyledNotification = styled.div`
  position: relative;
  pointer-events: all;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  width: 300px;
  min-height: 50px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 10px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color};
  position: relative;
  margin-top: ${({ space }) => space.space?.marginTop[0]}px;
  &[data-animation='left-right-smooth'] {
    animation: 0.7s ${smooth.leftRight};
  }
  &[data-animation='right-left-smooth'] {
    animation: 0.7s ${smooth.rightLeft};
  }
  &[data-animation='up-down-smooth'] {
    animation: 0.7s ${smooth.upDown};
  }
  &[data-animation='down-up-smooth'] {
    animation: 0.7s ${smooth.downUp};
  }
  &[data-animation='left-right-bounce'] {
    animation: 0.7s ${bounce.leftRight};
  }
  &[data-animation='right-left-bounce'] {
    animation: 0.7s ${bounce.rightLeft};
  }
  &[data-animation='up-down-bounce'] {
    animation: 0.7s ${bounce.upDown};
  }
  &[data-animation='down-up-bounce'] {
    animation: 0.7s ${bounce.downUp};
  }
  &.close {
    &[data-animation='left-right-smooth'] {
      animation: 0.7s ${smooth.leftRightHide};
    }
    &[data-animation='right-left-smooth'] {
      animation: 0.7s ${smooth.rightLeftHide};
    }
    &[data-animation='up-down-smooth'] {
      animation: 0.7s ${smooth.upDownHide};
    }
    &[data-animation='down-up-smooth'] {
      animation: 0.7s ${smooth.downUpHide};
    }
    &[data-animation='left-right-bounce'] {
      animation: 0.7s ${bounce.leftRightHide};
    }
    &[data-animation='right-left-bounce'] {
      animation: 0.7s ${bounce.rightLeftHide};
    }
    &[data-animation='up-down-bounce'] {
      animation: 0.7s ${bounce.upDownHide};
    }
    &[data-animation='down-up-bounce'] {
      animation: 0.7s ${bounce.downUpHide};
    }
  }
  & > :first-child {
    margin-right: ${({ space }) => space.space?.marginRight[5]}px;
  }
  &::after {
    content: '';
    display: block;
    height: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: 'white';
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

import styled from 'styled-components';

import * as smooth from '@animation/smooth';
import * as bounce from '@animation/bounce';

export const StyledToast = styled.div`
  position: relative;
  font-weight: 700;
  pointer-events: all;
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  align-items: center;
  background-color: ${({ theme }) => theme.toastBackgroundColor};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  width: ${({ theme }) => theme.sizes.width[1]}px;
  min-height: ${({ theme }) => theme.sizes.minHeight[0]}px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow[0]};
  padding: ${({ theme }) => theme.space.padding[0]}px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color};
  margin-top: ${({ theme }) => theme.space?.marginTop[0]}px;
  ${({ theme }) => theme.horizontalMargin};
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
      animation-fill-mode: forwards;
    }
    &[data-animation='right-left-smooth'] {
      animation: 0.7s ${smooth.rightLeftHide};
      animation-fill-mode: forwards;
    }
    &[data-animation='up-down-smooth'] {
      animation: 0.7s ${smooth.upDownHide};
      animation-fill-mode: forwards;
    }
    &[data-animation='down-up-smooth'] {
      animation: 0.7s ${smooth.downUpHide};
      animation-fill-mode: forwards;
    }
    &[data-animation='left-right-bounce'] {
      animation: 0.7s ${bounce.leftRightHide};
      animation-fill-mode: forwards;
    }
    &[data-animation='right-left-bounce'] {
      animation: 0.7s ${bounce.rightLeftHide};
      animation-fill-mode: forwards;
    }
    &[data-animation='up-down-bounce'] {
      animation: 0.7s ${bounce.upDownHide};
      animation-fill-mode: forwards;
    }
    &[data-animation='down-up-bounce'] {
      animation: 0.7s ${bounce.downUpHide};
      animation-fill-mode: forwards;
    }
  }
  & > :first-child {
    margin-right: ${({ theme }) => theme.space?.marginRight[5]}px;
  }
  &::before {
    content: attr(data-topic);
    position: absolute;
    top: 4px;
  }
`;

export const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.marginTop[0]}px;
  font-size: ${({ theme }) => theme.fontSizes.fontSize[2]}px;
  & > * {
    margin-right: ${({ theme }) => theme.space?.marginRight[0]}px;
  }
`;

export const StyledCross = styled.div`
  align-self: flex-start;
  cursor: pointer;
`;

import styled from 'styled-components';

import * as smooth from '@animation/smooth';
import * as bounce from '@animation/bounce';

export const StyledToast = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@200&display=swap');
  font-family: 'Anek Latin', sans-serif;
  position: relative;
  font-weight: 700;
  pointer-events: all;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ space }) => space.borders.borderRadius[0]}px;
  width: ${({ space }) => space.sizes.width[1]}px;
  min-height: ${({ space }) => space.sizes.minHeight[0]}px;
  box-shadow: ${({ space }) => space.shadows.boxShadow[0]};
  padding: ${({ space }) => space.space.padding[0]}px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color};
  margin-top: ${({ space }) => space.space?.marginTop[0]}px;
  ${({ horizontalMargin }) => horizontalMargin};
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
  &::before {
    content: attr(data-topic);
    position: absolute;
    top: 4px;
  }
`;

export const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ space }) => space.space.marginTop[0]}px;
  font-size: ${({ space }) => space.fontSizes.fontSize[2]}px;
  & > * {
    margin-right: ${({ space }) => space.space?.marginRight[0]}px;
  }
`;

export const StyledCross = styled.div`
  align-self: flex-start;
  cursor: pointer;
`;

import { css } from 'styled-components';

import * as smooth from '@animation/smooth';
import * as bounce from '@animation/bounce';

export function setAnimation(position, animation) {
  if (position === 'bottom-left' || position === 'top-left') {
    if (animation === 'bounce') {
      return {
        open: css`
          animation: ${bounce.leftRight} 0.7s;
        `,
        close: css`
          animation: ${bounce.leftRightHide} 0.7s;
        `,
      };
    } else {
      return {
        open: css`
          animation: ${smooth.leftRight} 0.7s;
        `,
        close: css`
          animation: ${smooth.leftRightHide} 0.7s;
        `,
      };
    }
  } else if (position === 'bottom-right' || position === 'top-right') {
    if (animation === 'bounce') {
      return {
        open: css`
          animation: ${bounce.rightLeft} 0.7s;
        `,
        close: css`
          animation: ${bounce.rightLeftHide} 0.7s;
        `,
      };
    } else {
      return {
        open: css`
          animation: ${smooth.rightLeft} 0.7s;
        `,
        close: css`
          animation: ${smooth.rightLeftHide} 0.7s;
        `,
      };
    }
  } else if (position === 'bottom-center') {
    if (animation === 'bounce') {
      return {
        open: css`
          animation: ${bounce.downUp} 0.7s;
        `,
        close: css`
          animation: ${bounce.downUpHide} 0.7s;
        `,
      };
    } else {
      return {
        open: css`
          animation: ${smooth.downUp} 0.7s;
        `,
        close: css`
          animation: ${smooth.downUpHide} 0.7s;
        `,
      };
    }
  } else if (position === 'top-center') {
    if (animation === 'bounce') {
      return {
        open: css`
          animation: ${bounce.upDown} 0.7s;
        `,
        close: css`
          animation: ${bounce.upDownHide} 0.7s;
        `,
      };
    } else {
      return {
        open: css`
          animation: ${smooth.upDown} 0.7s;
        `,
        close: css`
          animation: ${smooth.upDownHide} 0.7s;
        `,
      };
    }
  }
}

export function setAnimation(position, animation) {
  switch (position) {
    case 'bottom-left':
      if (animation === 'bounce') {
        return 'left-right-bounce';
      } else {
        return 'left-right-smooth';
      }
    case 'bottom-center':
      if (animation === 'bounce') {
        return 'down-up-bounce';
      } else {
        return 'down-up-smooth';
      }
    case 'bottom-right':
      if (animation === 'bounce') {
        return 'right-left-bounce';
      } else {
        return 'right-left-smooth';
      }
    case 'top-left':
      if (animation === 'bounce') {
        return 'left-right-bounce';
      } else {
        return 'left-right-smooth';
      }
    case 'top-center':
      if (animation === 'bounce') {
        return 'up-down-bounce';
      } else {
        return 'up-down-smooth';
      }
    case 'top-right':
      if (animation === 'bounce') {
        return 'right-left-bounce';
      } else {
        return 'right-left-smooth';
      }
    default:
      break;
  }
}

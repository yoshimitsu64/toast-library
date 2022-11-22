export function setPosition(position) {
  switch (position) {
    case 'bottom-left':
      return {
        bottom: '0',
        left: '0',
      };
    case 'bottom-center':
      return {
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case 'bottom-right':
      return {
        bottom: '0',
        right: '0',
      };
    case 'top-left':
      return {
        top: '0',
        left: '0',
      };
    case 'top-center':
      return {
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case 'top-right':
      return {
        top: '0',
        right: '0',
      };
    default:
      return;
  }
}

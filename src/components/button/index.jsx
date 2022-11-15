import PropTypes from 'prop-types';

import { toast } from '@utils/toastService';
import { StyledButton } from './styled';

function Button({ position, duration, animation, variant, message, backgroundColor }) {
  const options = {
    position: position,
    duration: duration,
    animation: animation,
    variant: variant,
    message: message,
    backgroundColor: backgroundColor,
  };

  const handleClick = () => {
    switch (variant) {
      case 'success':
        toast.success(message, { ...options });
        break;
      case 'error':
        toast.error(message, { ...options });
        break;
      case 'warning':
        toast.warning(message, { ...options });
        break;
      case 'info':
        toast.info(message, { ...options });
        break;
      default:
        toast.info('No such option', { ...options });
        break;
    }
  };

  return <StyledButton onClick={handleClick}>Generate toast</StyledButton>;
}

Button.propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
  duration: PropTypes.string,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string,
};

Button.defaultProps = {
  message: 'Toast example',
  position: 'bottom-left',
  animation: 'smooth',
  duration: 3,
};

export default Button;

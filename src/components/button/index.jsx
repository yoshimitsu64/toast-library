import PropTypes from 'prop-types';

import { toast } from '@utils/toastService';
import { StyledButton } from './styled';

function Button({
  position,
  duration,
  animation,
  variant,
  message,
  backgroundColor,
  topic,
  horizontalMargin,
  verticalMargin,
}) {
  const options = {
    position,
    duration,
    animation,
    variant,
    message,
    backgroundColor,
    topic,
    horizontalMargin,
    verticalMargin,
  };

  const handleClick = () => {
    toast.createToast('success', 'Success toast', options);
  };

  return (
    <StyledButton data-test="toast-gen" onClick={handleClick}>
      Generate toast
    </StyledButton>
  );
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
  duration: PropTypes.number,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string,
  topic: PropTypes.string,
  horizontalMargin: PropTypes.number,
  verticalMargin: PropTypes.number,
};

Button.defaultProps = {
  topic: 'Toast topic',
  message: 'Toast example',
  position: 'bottom-left',
  animation: 'smooth',
  duration: '3',
};

export default Button;

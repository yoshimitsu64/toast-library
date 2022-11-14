import PropTypes from 'prop-types';

import { toast } from '@utils/toastService';
import { StyledButton } from './styled';

function Button({ variant, message }) {
  const handleClick = () => {
    switch (variant) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      case 'info':
        toast.info(message);
        break;
      default:
        toast.info(message);
        break;
    }
  };

  return <StyledButton onClick={handleClick}>Generate toast</StyledButton>;
}

Button.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
};

export default Button;

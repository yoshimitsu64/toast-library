import { memo, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../constants/theme';
import { toast } from '../../utils/toastService';
import { StyledCross, StyledNotification, StyledToastContent } from './styled';
import { setAnimation } from '../../helpers';

import PropTypes from 'prop-types';

function Toast({ message, variant, id, position, duration, animation, backgroundColor }) {
  const [closed, setClosed] = useState(false);

  const notificationVariant = theme.notifications[variant];
  const animationType = setAnimation(position, animation);
  const defaultBackGroundColor = theme.notifications[variant].backgroundColor;

  const handleClose = () => {
    setClosed(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setClosed(true);
    }, 500000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (closed) {
      setTimeout(() => {
        toast.removeToast(id);
      }, 650);
    }
  }, [closed, id]);

  return (
    <ThemeProvider theme={notificationVariant}>
      <StyledNotification
        onAnimationEnd={() => closed && toast.removeToast(id)}
        backgroundColor={defaultBackGroundColor}
        className={closed && 'close'}
        data-animation={animationType}
        position={position}
        space={theme}
      >
        <StyledToastContent space={theme}>
          {notificationVariant.icon}
          {message}
        </StyledToastContent>
        <StyledCross onClick={handleClose}>{theme.notifications?.closeIcon}</StyledCross>
      </StyledNotification>
    </ThemeProvider>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  id: PropTypes.string,
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
};

Toast.defaultProps = {
  message: 'Toast example',
};

export default memo(Toast);

import { memo, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '@constants/theme';
import { toast } from '@utils/toastService';
import { setAnimation } from '@helpers/animation';
import { StyledCross, StyledNotification, StyledToastContent } from './styled';

function Toast({
  message,
  variant,
  id,
  position,
  duration,
  animation,
  backgroundColor,
  topic,
  horizontalMargin,
  verticalMargin,
}) {
  const [closed, setClosed] = useState(false);

  const notificationVariant = theme.notifications[variant];
  const animationType = setAnimation(position, animation);
  const defaultBackGroundColor = !backgroundColor
    ? theme.notifications[variant].backgroundColor
    : backgroundColor;

  const handleClose = () => {
    setClosed(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setClosed(true);
    }, duration * 1000);

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
        className={closed && 'close'}
        data-animation={animationType}
        data-topic={topic}
        onAnimationEnd={() => closed && toast.removeToast(id)}
        backgroundColor={defaultBackGroundColor}
        horizontalMargin={horizontalMargin}
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
  horizontalMargin: PropTypes.object,
  verticalMargin: PropTypes.object,
  duration: PropTypes.string,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string,
};

Toast.defaultProps = {
  message: 'Toast example',
  topic: 'Toast topic',
  horizontalMargin: 0,
  verticalMargin: 0,
};

export default memo(Toast);

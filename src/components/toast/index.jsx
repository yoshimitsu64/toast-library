import { memo, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from '@constants/theme';
import { toast } from '@utils/toastService';
import { setAnimation } from '@helpers/setAnimation';
import { toasts } from '@constants/toasts';
import { StyledCross, StyledToast, StyledToastContent } from './styled';

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
}) {
  const [closed, setClosed] = useState(false);

  const toastBackgroundColor = !backgroundColor ? toasts[variant].backgroundColor : backgroundColor;

  const toastStyles = {
    ...theme,
    ...toasts['defaults'],
    ...toasts[variant],
    horizontalMargin,
    toastBackgroundColor,
  };

  const animationType = setAnimation(position, animation);

  const handleClose = () => {
    setClosed(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosed(true);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = (id) => () => closed && toast.removeToast(id);

  return (
    <ThemeProvider theme={toastStyles}>
      <StyledToast
        className={closed && 'close'}
        data-test="toast"
        data-animation={animation}
        data-topic={topic}
        animationType={animationType}
        onAnimationEnd={handleAnimationEnd(id)}
      >
        <StyledToastContent space={theme}>
          {toastStyles.icon}
          {message}
        </StyledToastContent>
        <StyledCross data-test="close" onClick={handleClose}>
          {toastStyles?.closeIcon}
        </StyledCross>
      </StyledToast>
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
  duration: PropTypes.number,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string,
  topic: PropTypes.string,
};

Toast.defaultProps = {
  duration: 3,
  animation: 'smooth',
  topic: 'Toast topic',
  horizontalMargin: 0,
  verticalMargin: 0,
};

export default memo(Toast);

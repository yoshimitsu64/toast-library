import { memo, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import PropTypes from "prop-types";

import { theme } from "../../constants/theme";
import { toast } from "../../utils/toastService";
import { StyledCross, StyledNotification, StyledToastContent } from "./styled";
import { setAnimation } from "../../helpers";

function Toast({
  message,
  variant,
  id,
  position,
  duration,
  animation = "right-left",
  backgroundColor = theme.notifications[variant].backgroundColor,
}) {
  const [closed, setClosed] = useState(false);

  const notificationVariant = theme.notifications[variant];
  const animationType = setAnimation(position, animation);

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
        onAnimationEnd={() => closed && toast.removeToast(id)}
        backgroundColor={backgroundColor}
        className={closed && "close"}
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

export default memo(Toast);

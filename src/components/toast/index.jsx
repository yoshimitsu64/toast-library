import { memo, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import PropTypes from "prop-types";

import { theme } from "../../constants/theme";
import { toast } from "../../utils/toastService";
import { StyledCross, StyledNotification, StyledToastContent } from "./styled";

function Toast({ message, variant, id, position, duration, animation }) {
  const [closed, setClosed] = useState(false);

  const notificationVariant = theme.notifications[variant];

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
      }, 470);
    }
  }, [closed, id]);

  return (
    <ThemeProvider theme={notificationVariant}>
      <StyledNotification
        onAnimationEnd={() => closed && toast.removeToast(id)}
        className={closed && "close"}
        data-animation={animation}
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

const propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(["success", "error", "warning", "info"]),
  id: PropTypes.string,
};

export default memo(Toast);

import { ThemeProvider } from "styled-components";

import { theme } from "../../constants/theme";
import { StyledCross, StyledNotification, StyledToastContent } from "./styled";

function Toast({ message, variant, position }) {
  const notificationVariant = theme.notifications[variant];

  return (
    <ThemeProvider theme={notificationVariant}>
      <StyledNotification position={position} space={theme}>
        <StyledToastContent space={theme}>
          {notificationVariant.icon}
          {message}
        </StyledToastContent>
        <StyledCross>{theme.notifications?.closeIcon}</StyledCross>
      </StyledNotification>
    </ThemeProvider>
  );
}

export default Toast;

import { ThemeProvider } from "styled-components";

import { StyledCross, StyledNotification } from "./styled";
import { theme } from "../../constants/theme";

function Toast({ message, variant }) {
  const notificationVariant = theme.notifications[variant];

  return (
    <ThemeProvider theme={notificationVariant}>
      <StyledNotification>
        {message}
        <StyledCross>X</StyledCross>
      </StyledNotification>
    </ThemeProvider>
  );
}

export default Toast;

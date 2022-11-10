import { memo, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../constants/theme";
import { toast } from "../../utils/toastService";
import { StyledCross, StyledNotification, StyledToastContent } from "./styled";

function Toast({ message, variant, id, position }) {
  const [closed, setClosed] = useState(false);

  const notificationVariant = theme.notifications[variant];

  const handleClose = (e) => {
    e.stopPropagation();
    setClosed(true);
  };

  return (
    <ThemeProvider theme={notificationVariant}>
      <StyledNotification
        position={position}
        onAnimationEnd={() => closed && toast.removeToast(id)}
        className={closed && "close"}
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

import { useEffect } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { StyledCross, StyledNotification } from "./styled";
import { theme } from "../constants/theme";
import { ThemeProvider } from "styled-components";

function Notification({ label, backgroundColor = "red", variant }) {
  const modalRoot = document.getElementById("modal");
  let elem = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(elem);
    return () => {
      modalRoot.removeChild(elem);
    };
  }, []);

  const notificationVariant = theme.notifications[variant];

  return ReactDOM.createPortal(
    <ThemeProvider theme={notificationVariant}>
      <StyledNotification>
        {label}
        <StyledCross>X</StyledCross>
      </StyledNotification>
    </ThemeProvider>,
    elem,
  );
}

export default Notification;

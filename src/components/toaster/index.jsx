import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

import Toast from "../toast";

import { toast } from "../../utils/toastService";
import { getPosition } from "../../helpers";
import { StyledToaster } from "./styled";

function Toaster({ position = "bottom-left", duration, animation }) {
  const [state, setState] = useState([]);

  const positionProp = getPosition(position);
  const elem = document.getElementById("modal");

  toast.bindSetToasts(setState);

  return ReactDOM.createPortal(
    <StyledToaster position={positionProp}>
      {state?.map((item) => (
        <Toast
          key={item.id}
          id={item.id}
          variant={item.variant}
          message={item.message}
          position={positionProp}
          animation={animation}
          duration={duration}
        />
      ))}
    </StyledToaster>,
    elem,
  );
}
const propTypes = {
  position: PropTypes.oneOf([
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]),
  animation: PropTypes.oneOf(["left-right", "right-left", "up-down", "down-up"]),
};

export default Toaster;

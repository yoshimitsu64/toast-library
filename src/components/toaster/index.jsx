import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Toast from "../toast";

import { toast } from "../../utils/toastService";
import { getPosition } from "../../helpers";
import { StyledToaster } from "./styled";

function Toaster({ position = "bottom-left" }) {
  const [state, setState] = useState([]);

  toast.bindSetToasts(setState);
  const positionProp = getPosition(position);
  const elem = document.getElementById("modal");
  console.log(state);
  useEffect(() => {
    const timer = setInterval(() => {
      if (state?.length > 0) {
        toast.removeToast(state[state?.length - 1].id);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [state]);

  return ReactDOM.createPortal(
    <StyledToaster position={positionProp}>
      {state?.map((item) => (
        <Toast
          key={item.id}
          id={item.id}
          variant={item.variant}
          message={item.message}
          position={positionProp}
        />
      ))}
    </StyledToaster>,
    elem,
  );
}

export default Toaster;

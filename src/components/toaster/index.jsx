import ReactDOM from "react-dom";
import { useState } from "react";

import Toast from "../toast";

import { toast } from "../../utils/toastService";

import { getPosition } from "../../helpers";

import { usePortal } from "../../hooks/usePortal";

import { StyledToaster } from "./styled";

function Toaster({ position = "bottom-left" }) {
  const [state, setState] = useState();

  const elem = usePortal("modal");
  toast.bindSetToasts(setState);
  const positionProp = getPosition(position);

  return ReactDOM.createPortal(
    <StyledToaster className="Toaster" position={positionProp}>
      {state?.map((item) => {
        return <Toast {...item} key={item.id} position={positionProp} />;
      })}
    </StyledToaster>,
    elem,
  );
}

export default Toaster;

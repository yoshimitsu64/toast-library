import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import Toast from "../toast";

import { StyledToaster } from "./styled";
import { toast } from "../../utils/toastService";

function Toaster() {
  const modalRoot = document.getElementById("modal");
  let elem = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(elem);
    return () => {
      modalRoot.removeChild(elem);
    };
  });

  const [state, setState] = useState();
  toast.setSetToasts(setState);

  return ReactDOM.createPortal(
    <StyledToaster className="Toaster">
      {state?.map((item) => {
        return <Toast {...item} key={item.id} />;
      })}
    </StyledToaster>,
    elem,
  );
}

export default Toaster;

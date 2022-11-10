import { useEffect } from "react";

export function usePortal(modalName) {
  const modalRoot = document.getElementById(modalName);
  let elem = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(elem);
    return () => {
      modalRoot.removeChild(elem);
    };
  });
  return elem;
}

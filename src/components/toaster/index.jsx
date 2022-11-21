import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import ToastSlots from '@components/slots/index.jsx';
import ErrorBoundary from '@containers/errorBoundary/index.jsx';
import { positions } from '@constants/positions';
import { usePortal } from '@hooks/usePortal.jsx';
import { StyledToaster } from './styled';

function Toaster() {
  const [toasts, setToasts] = useState([]);

  const element = usePortal();

  useEffect(() => {
    window.setToasts = (options) => setToasts(options);
  }, []);

  const slots = positions
    .map((position) => {
      return [...toasts].filter((toast) => {
        if (toast.position === position) {
          return true;
        }
      });
    })
    .filter((slot) => slot?.length > 0);

  return ReactDOM.createPortal(
    <ErrorBoundary>
      <StyledToaster>
        {toasts?.length > 0 &&
          slots.map((slotsList) => {
            return <ToastSlots slotsList={slotsList} key={slotsList[0].position} />;
          })}
      </StyledToaster>
    </ErrorBoundary>,
    element,
  );
}

export default memo(Toaster);

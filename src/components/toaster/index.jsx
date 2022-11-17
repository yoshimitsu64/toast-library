import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { toast } from '@utils/toastService';
import ToastSlots from '@components/slots/index.jsx';
import { positions } from '@constants/options';
import ErrorBoundary from '@containers/errorBoundary/index.jsx';
import { StyledToaster } from './styled';
import { usePortal } from '@hooks/usePortal.jsx';

function Toaster() {
  const [toasts, setToasts] = useState([]);

  const element = usePortal();

  useEffect(() => {
    toast.bindSetToasts(setToasts);
  }, []);

  const slots = positions.map((position) => {
    return [...toasts].filter((toast) => {
      if (toast.position === position) {
        return true;
      }
    });
  });

  return ReactDOM.createPortal(
    <ErrorBoundary>
      <StyledToaster>
        {slots.map((slotsList) => {
          if (slotsList?.length > 0) {
            return <ToastSlots slotsList={slotsList} key={slotsList[0].position} />;
          }
        })}
      </StyledToaster>
    </ErrorBoundary>,
    element,
  );
}

export default memo(Toaster);

import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { toast } from '@utils/toastService';
import ToastSlots from '@components/slots';
import { positions } from '@constants/positions';
import ErrorBoundary from '@containers/errorBoundary';
import { StyledToaster } from './styled';

function Toaster() {
  const [toasts, setToasts] = useState([]);

  const elem = document.getElementById('modal');

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
        {slots.map((slotsList, index) => {
          if (slotsList?.length > 0) {
            return <ToastSlots slotsList={slotsList} key={slotsList[0].position} />;
          }
        })}
      </StyledToaster>
    </ErrorBoundary>,
    elem,
  );
}

export default memo(Toaster);

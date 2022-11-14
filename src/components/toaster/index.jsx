import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import { toast } from '@utils/toastService';
import ToastSlots from '@components/slots';
import { positions } from '@constants/positions';
import { StyledToaster } from './styled';

function Toaster({ position, duration, animation, backgroundColor }) {
  const [toasts, setToasts] = useState([]);

  const obj = {
    position: position,
    duration: duration,
    animation: animation,
    backgroundColor: backgroundColor,
    ...toasts[toasts.length - 1],
  };

  const elem = document.getElementById('modal');

  useEffect(() => {
    toast.bindSetToasts(setToasts);
    toast.setOptions(obj);
  }, []);

  const slots = positions.map((position) => {
    return [...toasts].filter((toast) => {
      if (toast.position === position) {
        return true;
      }
    });
  });

  return ReactDOM.createPortal(
    <StyledToaster>
      {slots.map((slotsList) => {
        if (slotsList?.length > 0) {
          return <ToastSlots slotsList={slotsList} key={slotsList[0].position} />;
        }
      })}
    </StyledToaster>,
    elem,
  );
}

Toaster.propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
  duration: PropTypes.string,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string,
};

Toaster.defaultProps = {
  position: 'bottom-left',
  duration: 3,
  animation: 'smooth',
};

export default memo(Toaster);

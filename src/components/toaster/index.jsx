import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import Toast from '../toast';

import { toast } from '../../utils/toastService';
import { getPosition } from '../../helpers';
import { StyledToaster } from './styled';
import ToastSlots from '../slots';

function Toaster({ position, duration, animation, backgroundColor }) {
  const [state, setState] = useState([]);

  const obj = {
    position: position,
    duration: duration,
    animation: animation,
    backgroundColor: backgroundColor,
    ...state[state.length - 1],
  };

  const positionProp = getPosition(position);
  const elem = document.getElementById('modal');

  useEffect(() => {
    toast.bindSetToasts(setState);
    toast.setOptions(obj);
  }, []);

  const POSITIONS = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  const positions = POSITIONS.map((position) => {
    return [...state].filter((toast) => {
      if (toast.position === position) {
        return true;
      }
    });
  });

  return ReactDOM.createPortal(
    <StyledToaster>
      {positions.map((toastList) => {
        if (toastList?.length > 0) {
          return <ToastSlots toastList={toastList} />;
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

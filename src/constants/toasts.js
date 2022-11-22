import { Check2Circle, Bug, ExclamationCircle, InfoCircle, XLg } from 'react-bootstrap-icons';

export const toasts = {
  defaults: {
    duration: '3',
    horizontalMargin: 0,
    verticalMargin: 0,
    animation: 'smooth',
    position: 'bottom-left',
    closeIcon: <XLg size={20} />,
  },
  success: {
    variant: 'success',
    message: 'Success toast',
    topic: 'Success',
    backgroundColor: '#06D6A0',
    color: '#FFFFFF',
    icon: <Check2Circle size={30} />,
  },
  error: {
    variant: 'success',
    message: 'Success toast',
    topic: 'Success',
    backgroundColor: '#E63946',
    color: '#FFFFFF',
    icon: <Bug size={30} />,
  },
  warning: {
    variant: 'warning',
    message: 'Warning toast',
    topic: 'Warning',
    backgroundColor: '#FFBD00',
    color: '#000000',
    icon: <ExclamationCircle size={30} />,
  },
  info: {
    variant: 'success',
    message: 'Success toast',
    topic: 'Success',
    backgroundColor: '#7209B7',
    color: '#FFFFFF',
    icon: <InfoCircle size={30} />,
  },
};

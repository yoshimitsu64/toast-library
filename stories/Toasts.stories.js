import Toast from '@components/toast';

export default {
  title: 'Toasts',
  component: ToastTemplate,
  parameters: {
    layout: 'centered',
  },
};

const ToastTemplate = (args) => (
  <>
    <Toast {...args} />
  </>
);

export const SuccessToast = ToastTemplate.bind({});
SuccessToast.args = {
  variant: 'success',
  message: 'Success toast example',
  topic: 'Success toast',
};

export const ErrorToast = ToastTemplate.bind({});
ErrorToast.args = {
  variant: 'error',
  message: 'Error toast example',
  topic: 'Error toast',
};

export const WarningToast = ToastTemplate.bind({});
WarningToast.args = {
  variant: 'warning',
  message: 'Warning toast example',
  topic: 'Warning toast',
};

export const InfoToast = ToastTemplate.bind({});
InfoToast.args = {
  variant: 'info',
  message: 'Info toast example',
  topic: 'Info toast',
};

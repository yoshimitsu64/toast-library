import Button from '@components/button';
import Toaster from '@components/toaster';

export default {
  title: 'Toasts page',
  component: Toasts,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      type: 'string',
      description: 'Chose toast type',
      defaultValue: 'success',
      options: ['success', 'error', 'warning', 'info'],
      control: {
        type: 'radio',
      },
    },
    position: {
      type: 'string',
      description: 'Chose toast position',
      defaultValue: 'bottom-left',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      control: {
        type: 'radio',
      },
    },
    animation: {
      type: 'string',
      description: 'Chose toast animation',
      defaultValue: 'smooth',
      options: ['smooth', 'bounce'],
      control: {
        type: 'radio',
      },
    },
    backgroundColor: {
      type: 'string',
      defaultValue: '',
      description: 'Chose toast background color',
      control: {
        type: 'color',
      },
    },
    duration: {
      type: 'number',
      description: 'Chose toast duration',
      defaultValue: '3',
      control: {
        type: 'number',
      },
    },
    message: {
      type: 'string',
      description: 'Write toast message',
      defaultValue: 'Toast example',
      control: {
        type: 'text',
      },
    },
    topic: {
      type: 'string',
      description: 'Write toast topic',
      defaultValue: 'Toast topic',
      control: {
        type: 'text',
      },
    },
    horizontalMargin: {
      type: 'number',
      description: 'Write horizontal margin',
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
    verticalMargin: {
      type: 'number',
      description: 'Write vertical margin',
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
  },
};

export const Toasts = (args) => (
  <>
    <Toaster />
    <Button {...args} />
  </>
);

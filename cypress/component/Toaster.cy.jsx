import Toaster from '@components/toaster';
import { toast } from '@utils/toastService';

describe('Test toast service', () => {
  beforeEach(() => {
    cy.mount(<Toaster />);
  });

  it('should add toast', () => {
    const toastOptions = {
      duration: 10,
      backgroundColor: 'purple',
      position: 'bottom-left',
      topic: 'Success toast',
      horizontalMargin: '100px',
    };
    toast.createToast('success', 'This is success toast', { ...toastOptions });
    expect(toast.toasts.length > 0);
  });

  it('should add another toast', () => {
    const toastOptions = {
      duration: 6,
      backgroundColor: 'red',
      position: 'bottomright',
      topic: 'Error toast',
      horizontalMargin: '10px',
    };
    toast.createToast('error', 'This is error toast', { ...toastOptions });
    expect(toast.toasts.length > 1);
  });

  it('should block toast if already exists 3', () => {
    const toastOptions = {
      duration: 6,
      backgroundColor: 'red',
      position: 'bottomright',
      topic: 'Error toast',
      horizontalMargin: '10px',
    };
    toast.createToast('error', 'This is error toast', { ...toastOptions });
    toast.createToast('error', 'This is error toast', { ...toastOptions });
    toast.createToast('error', 'This is error toast', { ...toastOptions });
    toast.createToast('error', 'This is error toast', { ...toastOptions });
    expect(toast.toasts.length === 3);
  });

  it('Should delete two toasts', () => {
    const toasts = toast.toasts;
    toast.removeToast(toasts[toasts?.length - 1].id);
    toast.removeToast(toasts[toasts?.length - 1].id);
    expect(toasts.length < toast.toasts);
  });
});

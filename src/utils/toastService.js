import uuid from 'react-uuid';

import { setMargin } from '@helpers/toast';

export class ToastService {
  constructor() {
    if (ToastService.instance) {
      return ToastService.instance;
    }
    this.toasts = [];
    ToastService.instance = this;
  }

  generateOptions(variant, message, options) {
    return {
      variant: variant,
      message: message,
      id: uuid(),
      ...options,
      ...setMargin(options?.position, options?.horizontalMargin, options?.verticalMargin),
    };
  }

  createToast(variant = 'info', message = 'Toast', options) {
    if (this.toasts.length < 3) {
      const toastOptions = this.generateOptions(variant, message, options);
      this.toasts.push(toastOptions);
      this.getAllToasts();
    }
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((item) => item.id !== id);
    window?.setToasts && window?.setToasts([...this.toasts]);
  }

  getAllToasts() {
    window.setToasts([...this.toasts]);
  }
}

export const toast = new ToastService();

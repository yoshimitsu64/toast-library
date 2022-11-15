import uuid from 'react-uuid';
import { getMargin } from '../helpers/toast';

export class ToastService {
  constructor() {
    if (ToastService.instance) {
      return ToastService.instance;
    }
    this.setToasts = null;
    this.toasts = [];
    this.options = null;
    ToastService.instance = this;
  }

  addToast(toast) {
    if (this.toasts.length < 3) {
      const mergedOptions = { ...this.options, ...toast };
      const margin = getMargin(
        mergedOptions.position,
        mergedOptions?.horizontalMargin,
        mergedOptions?.verticalMargin,
      );
      const toastOptions = { ...mergedOptions, ...margin };
      this.setToasts([...this.toasts, toastOptions]);
      this.toasts.push(toastOptions);
    }
  }

  bindSetToasts(setToasts) {
    this.setToasts = setToasts;
  }

  success(message, options) {
    this.addToast({ message: message, variant: 'success', id: uuid(), ...options });
  }

  error(message, options) {
    this.addToast({ message: message, variant: 'error', id: uuid(), ...options });
  }

  warning(message, options) {
    this.addToast({ message: message, variant: 'warning', id: uuid(), ...options });
  }

  info(message, options) {
    this.addToast({ message: message, variant: 'info', id: uuid(), ...options });
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((item) => item.id !== id);
    this.setToasts([...this.toasts]);
  }

  setOptions(options) {
    this.options = options;
  }
}

export const toast = new ToastService();

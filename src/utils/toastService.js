import uuid from 'react-uuid';

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
      this.setToasts([...this.toasts, mergedOptions]);
      this.toasts.push(mergedOptions);
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

  getAllToasts() {
    return this.toasts;
  }
}

export const toast = new ToastService();

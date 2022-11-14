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
      const asd = { ...this.options, ...toast };
      console.log(asd);
      this.setToasts([...this.toasts, asd]);
      this.toasts.push(asd);
    }
  }

  bindSetToasts(setToasts) {
    this.setToasts = setToasts;
  }

  success(message, options) {
    this.addToast({ message: message, variant: 'success', id: uuid(), ...options });
  }

  error(message) {
    this.addToast({ message: message, variant: 'error', id: uuid() });
  }

  warning(message) {
    this.addToast({ message: message, variant: 'warning', id: uuid() });
  }

  info(message) {
    this.addToast({ message: message, variant: 'info', id: uuid() });
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

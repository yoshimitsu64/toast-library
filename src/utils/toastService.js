import uuid from "react-uuid";

export class ToastService {
  constructor() {
    if (ToastService.instance) {
      return ToastService.instance;
    }
    this.setToasts = null;
    this.toasts = [];
    ToastService.instance = this;
    this.timeout = null;
  }

  addToast(toast) {
    if (this.toasts.length < 3) {
      this.setToasts([...this.toasts, toast]);
      this.toasts.push(toast);
    }
  }

  bindSetToasts(setToasts) {
    this.setToasts = setToasts;
  }

  success(message) {
    this.addToast({ message: message, variant: "success", id: uuid() });
  }

  error(message) {
    this.addToast({ message: message, variant: "error", id: uuid() });
  }

  warning(message) {
    this.addToast({ message: message, variant: "warning", id: uuid() });
  }

  info(message) {
    this.addToast({ message: message, variant: "info", id: uuid() });
  }

  removeToast(id) {
    this.toasts = this.toasts.filter((item) => item.id !== id);
    this.setToasts([...this.toasts]);
  }

  getAllToasts() {
    return this.toasts;
  }
}

export const toast = new ToastService();

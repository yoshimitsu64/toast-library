import uuid from "react-uuid";

export class ToastService {
  constructor() {
    if (ToastService.instance) {
      return ToastService.instance;
    }
    this.setToasts = null;
    this.toasts = [];
    ToastService.instance = this;
  }

  addToast(toast) {
    if (this.toasts.length < 3) {
      this.toasts.push(toast);
      this.setToasts([...this.toasts]);
      this.removeToastAfterTimeout();
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

  removeToastAfterTimeout() {
    setTimeout(() => {
      this.toasts.pop();
      this.setToasts([...this.toasts]);
    }, 3000);
  }
}

export const toast = new ToastService();

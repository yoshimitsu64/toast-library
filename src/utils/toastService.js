import Notification from "../components/Notification";

class ToastService {
  constructor() {
    if (ToastService.exists) {
      return ToastService.instance;
    }
    ToastService.instance = this;
    ToastService.exists = true;
    this.toast = [];
  }

  addToast = (toast) => {
    if (this.toasts.length < 3) {
      this.toasts.push(toast);
    }
  };

  generateToast(...options) {
    console.log(options)
    return <Notification {...options} />;
  }

  getAllToasts = () => {
    return this.toasts;
  };
}

export const toast = new ToastService();

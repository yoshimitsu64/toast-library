import uuid from 'react-uuid';
import { animation, durations, positions } from '../constants/positions';

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

  getDefaultOptions(options) {
    const defOptions = {
      position: 'bottom-left',
      message: 'Write your message',
      duration: 5,
      animation: 'smooth',
      verticalMargin: 0,
      horizontalMargin: 0,
      topic: 'Toast example',
      variant: 'info',
      id: 1,
    };
    Object.keys(defOptions).forEach((key) => {
      if (key === 'position' && positions.includes(options[key])) {
        defOptions[key] = options[key];
      } else if (
        (key === 'duration' || key === 'verticalMargin' || key === 'horizontalMargin') &&
        durations.test(options[key]) === true
      ) {
        defOptions[key] = options[key];
        return;
      } else if (key === 'animation' && animation.includes(options[key])) {
        defOptions[key] = options[key];
      } else {
        if (options[key]?.length > 0) {
          defOptions[key] = options[key];
        }
      }
    });

    return defOptions;
  }

  addToast(toast) {
    if (this.toasts.length < 3) {
      const mergedOptions = { ...this.getDefaultOptions(toast) };
      const margin = getMargin(
        mergedOptions.position,
        mergedOptions?.horizontalMargin,
        mergedOptions?.verticalMargin,
      );
      const toastOptions = { ...mergedOptions, ...margin };
      this.setToasts && this.setToasts([...this.toasts, toastOptions]);
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
    this.setToasts && this.setToasts([...this.toasts]);
  }

  getLastToast() {
    return this.toasts[this.toasts?.length - 1];
  }

  getAllToasts() {
    return this.toasts;
  }
}
export const toast = new ToastService();

// toastService.js
let toastFunction = null;

export const setToastFunction = (fn) => {
  toastFunction = fn;
};

export const showGlobalToast = (message, type = "info", duration = 3000) => {
  if (toastFunction) {
    toastFunction(message, type, duration);
  } else {
    console.warn("Toast function not initialized yet");
  }
};

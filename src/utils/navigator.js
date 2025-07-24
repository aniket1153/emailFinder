// utils/navigateService.js
let navigateFn = null;

export const setNavigator = (navigator) => {
  navigateFn = navigator;
};

export const navigate = (...args) => {
  if (navigateFn) {
    navigateFn(...args);
  } else {
    console.warn("Navigator not set yet.");
  }
};

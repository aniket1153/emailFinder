import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  isPaymentProcessing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequested(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.user = {
        ...action.payload.user,
        subscription: action.payload.user.subscription,
      };
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutRequested(state) {
      state.loading = true;
      state.error = null;
    },

    logoutSuccess(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    logoutFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateUser(state, action) {
      if (!state.user) {
        state.user = {};
      }
      state.user = { ...state.user, ...action.payload };
    },
    updatePaymentState(state, action) {
      state.isPaymentProcessing = action.payload;
    },
  },
});

export const {
  loginRequested,
  loginSuccess,
  loginFailure,
  logoutRequested,
  logoutSuccess,
  logoutFailure,
  updateUser,
  updatePaymentState,
} = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  total: 0,
  page: 1,
  limit: 10,
  filters: {},
  loading: false,
  error: null,
};

const emailAccountSlice = createSlice({
  name: "emailaccount",
  initialState,
  reducers: {
    fetchEmailAccountsRequested(state, action) {
      state.loading = true;
      state.error = null;
      if (action.payload) {
        state.page = action.payload.page || state.page;
        state.limit = action.payload.limit || state.limit;
        state.filters = action.payload.filters || state.filters;
      }
    },
    fetchEmailAccountsSuccess(state, action) {
      state.accounts = action.payload.data;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.loading = false;
      state.error = null;
    },
    fetchEmailAccountsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setEmailAccountFilters(state, action) {
      state.filters = action.payload;
    },
  },
});

export const {
  fetchEmailAccountsRequested,
  fetchEmailAccountsSuccess,
  fetchEmailAccountsFailure,
  setEmailAccountFilters,
} = emailAccountSlice.actions;
export default emailAccountSlice.reducer;

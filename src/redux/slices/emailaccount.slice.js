import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  total: 0,
  page: 1,
  limit: 10,
  filters: {},
  loading: false,
  error: null,
  totalPages: 1,
};

const emailAccountSlice = createSlice({
  name: "emailaccount",
  initialState,
  reducers: {
    fetchEmailAccountsRequested(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchEmailAccountsSuccess(state, action) {
      state.accounts = action.payload.data;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.totalPages = action.payload.totalPages;
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
    updatePagination(state, action) {
      const { page, limit } = action.payload;
      state.page = page || state.page;
      state.limit = limit || state.limit;
    },
  },
});

export const {
  fetchEmailAccountsRequested,
  fetchEmailAccountsSuccess,
  fetchEmailAccountsFailure,
  setEmailAccountFilters,
  updatePagination,
} = emailAccountSlice.actions;
export default emailAccountSlice.reducer;

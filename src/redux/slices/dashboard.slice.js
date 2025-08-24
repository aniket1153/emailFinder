import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchDashboardCardsRequested(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardCardsSuccess(state, action) {
      state.cards = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDashboardCardsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDashboardCardsRequested,
  fetchDashboardCardsSuccess,
  fetchDashboardCardsFailure,
} = dashBoardSlice.actions;
export default dashBoardSlice.reducer;

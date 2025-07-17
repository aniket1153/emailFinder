import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: [],
  loading: false,
  error: null,
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    fetchPlansRequested(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPlansSuccess(state, action) {
      state.plans = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPlansFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPlansRequested, fetchPlansSuccess, fetchPlansFailure } =
  plansSlice.actions;
export default plansSlice.reducer;

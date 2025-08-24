import { takeLatest, call, put } from "redux-saga/effects";
import { getDashboardCards } from "../../services/api.services";
import {
  fetchDashboardCardsFailure,
  fetchDashboardCardsRequested,
  fetchDashboardCardsSuccess,
} from "../slices/dashboard.slice";

function* handleFetchDashboardCards() {
  try {
    const data = yield call(getDashboardCards);
    yield put(fetchDashboardCardsSuccess(data));
  } catch (error) {
    yield put(
      fetchDashboardCardsFailure(
        error.response?.data?.message || "Failed to fetch dashboard cards"
      )
    );
  }
}

export default function* dashboardSaga() {
  yield takeLatest(
    fetchDashboardCardsRequested.type,
    handleFetchDashboardCards
  );
}

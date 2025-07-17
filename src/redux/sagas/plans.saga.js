import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchPlansRequested,
  fetchPlansSuccess,
  fetchPlansFailure,
} from "../slices/plans.slice";
import { getPlans } from "../../services/api.services";

function* handleFetchPlans() {
  try {
    const data = yield call(getPlans);
    yield put(fetchPlansSuccess(data));
  } catch (error) {
    yield put(
      fetchPlansFailure(
        error.response?.data?.message || "Failed to fetch plans"
      )
    );
  }
}

export default function* plansSaga() {
  yield takeLatest(fetchPlansRequested.type, handleFetchPlans);
}

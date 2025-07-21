import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchEmailAccountsRequested,
  fetchEmailAccountsSuccess,
  fetchEmailAccountsFailure,
} from "../slices/emailaccount.slice";
import { getEmailAccounts } from "../../services/api.services";

function* handleFetchEmailAccounts(action) {
  try {
    const params = action.payload || {};
    const response = yield call(getEmailAccounts, params);
    yield put(fetchEmailAccountsSuccess(response));
  } catch (error) {
    yield put(
      fetchEmailAccountsFailure(
        error.response?.data?.message || "Failed to fetch email accounts"
      )
    );
  }
}

export default function* emailAccountSaga() {
  yield takeLatest(fetchEmailAccountsRequested.type, handleFetchEmailAccounts);
}

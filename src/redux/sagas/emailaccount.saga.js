import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchEmailAccountsRequested,
  fetchEmailAccountsSuccess,
  fetchEmailAccountsFailure,
  clearSelectedAccounts,
} from "../slices/emailaccount.slice";
import { getEmailAccounts } from "../../services/api.services";

import store from "../store";

function* handleFetchEmailAccounts(action) {
  try {
    // Get page, limit, filters from redux state

    const state = store.getState();
    const { page, limit, filters } = state.emailAccounts;
    console.log("Fetching email accounts with params:", filters);
    const params = {
      page,
      limit,
      filters,
    };
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

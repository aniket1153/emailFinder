import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchEmailAccountsRequested,
  fetchEmailAccountsSuccess,
  fetchEmailAccountsFailure,
  clearSelectedAccounts,
} from "../slices/emailaccount.slice";
import { getEmailAccounts } from "../../services/api.services";

import store from "../store";
import { showGlobalToast } from "../../utils/toastService";

function* handleFetchEmailAccounts(action) {
  try {
    // Get page, limit, filters from redux state

    const state = store.getState();
    const { page, limit, filters, sort, order } = state.emailAccounts;

    const params = {
      page,
      limit,
      sort,
      order,
    };
    console.log("Fetching email accounts with params:", params);
    if (Object.keys(filters).length === 0) {
      showGlobalToast("You must provide a domain name", "error");
      return; // Stop the saga if no filters are provided
    }
    const response = yield call(getEmailAccounts, {
      ...params,
      ...filters,
    });
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

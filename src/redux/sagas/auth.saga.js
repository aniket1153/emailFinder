import { takeLatest, call, put } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  loginRequested,
  logoutRequested,
} from "../slices/auth.slice";
import {
  login as loginService,
  logout as logoutService,
} from "../../services/api.services";

function* handleLogin(action) {
  try {
    const data = yield call(
      loginService,
      action.payload.email,
      action.payload.password
    );
    yield put(loginSuccess({ user: data.user, token: data.token }));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}

function* handleLogout() {
  try {
    yield call(logoutService);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.response?.data?.message || "Logout failed"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequested.type, handleLogin);
  yield takeLatest(logoutRequested.type, handleLogout);
}

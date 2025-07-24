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
  createAccount,
  login as loginService,
  logout as logoutService,
} from "../../services/api.services";
import { showGlobalToast } from "../../utils/toastService";
import { navigate } from "../../utils/navigator";

function* handleLogin(action) {
  try {
    const data = yield call(
      action.payload.isLogin ? loginService : createAccount,
      action.payload.email,
      action.payload.password
    );
    yield put(loginSuccess({ user: data.user, token: data.token }));
    showGlobalToast(data.message, "success");

    navigate("/");
  } catch (error) {
    showGlobalToast(error.response?.data?.message, "error");
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}

function* handleLogout() {
  try {
    const response = yield call(logoutService);
    yield put(logoutSuccess());
    navigate("/auth?mode=login");
    showGlobalToast(response?.message, "success");
  } catch (error) {
    yield put(logoutFailure(error.response?.data?.message || "Logout failed"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequested.type, handleLogin);
  yield takeLatest(logoutRequested.type, handleLogout);
}

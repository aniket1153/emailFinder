import { useDispatch } from "react-redux";
import {
  loginRequested,
  logoutRequested,
  loginSuccess,
  loginFailure,
} from "../redux/slices/auth.slice";
import { createAccount, sendOTP, verifyOTP } from "../services/api.services";
import { showGlobalToast } from "../utils/toastService";
import { navigate } from "../utils/navigator";
import { otpverify, rootPath } from "../App";

export default function useAuth() {
  const dispatch = useDispatch();

  const signIn = (email, password) => {
    dispatch(loginRequested({ email, password, isLogin: true }));
  };

  const signUp = (email, password) => {
    dispatch(loginRequested({ email, password, isLogin: false }));
  };

  const requestOTP = async (body) => {
    try {
      const response = await sendOTP(body);
      showGlobalToast(response?.message, "success");
      navigate(`${otpverify}?email=${body.email}`);
    } catch (error) {
      console.log(error);
      showGlobalToast(error?.response?.data?.message, "error");
    }
  };

  const verifyOTPs = async (body) => {
    try {
      const response = await verifyOTP(body);
      dispatch(loginSuccess({ user: response.user, token: response.token }));
      showGlobalToast(response.message, "success");

      navigate(rootPath);
    } catch (error) {
      console.log(error);
      showGlobalToast(error?.response?.data?.message, "error");
    }
  };

  const signOut = () => {
    dispatch(logoutRequested());
  };

  return {
    signIn,
    requestOTP,
    verifyOTPs,
    signUp,
    signOut,
  };
}

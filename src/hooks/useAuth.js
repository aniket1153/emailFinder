import { useDispatch } from "react-redux";
import {
  loginRequested,
  logoutRequested,
  loginSuccess,
  loginFailure,
} from "../redux/slices/auth.slice";
import { createAccount } from "../services/api.services";

export default function useAuth() {
  const dispatch = useDispatch();

  const signIn = (email, password) => {
    dispatch(loginRequested({ email, password, isLogin: true }));
  };

  const signUp = (email, password) => {
    dispatch(loginRequested({ email, password, isLogin: false }));
  };

  const signOut = () => {
    dispatch(logoutRequested());
  };

  return {
    signIn,
    signUp,
    signOut,
  };
}

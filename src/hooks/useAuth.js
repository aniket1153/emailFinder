import { useDispatch, useSelector } from "react-redux";
import {
  loginRequested,
  logoutRequested,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from "../redux/slices/auth.slice";
import { createAccount } from "../services/api.services";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = (email, password) => {
    dispatch(loginRequested({ email, password }));
  };

  const signUp = async (userData) => {
    dispatch(loginRequested());
    try {
      const data = await createAccount(userData);
      dispatch(loginSuccess({ user: data.user, token: data.token }));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || "Signup failed"));
    }
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

import axios from "axios";
import { BASE_API_URL } from "./api.constants";
import store from "../redux/store";
import { showGlobalToast } from "../utils/toastService";
import { loginPath } from "../App";

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
   
    const accessToken = store.getState().auth.accessToken;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Token expiry handler
    if (error.response && error.response.status === 401) {
      // Optionally clear token and redirect to login

      window.location.assign(loginPath);
      showGlobalToast("Session expired. Please log in again.", "error");
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default apiClient;

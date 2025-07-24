import axios from "axios";
import { BASE_API_URL } from "./api.constants";
import store from "../redux/store";
import { logoutRequested } from "../redux/slices/auth.slice";
import { showGlobalToast } from "../utils/toastService";

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_API_URL, // Change to your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Attach token from Redux

    const accessToken = store.getState().auth.accessToken; // Add real token logic here

    console.log(accessToken, "getting accesstoken");
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

      window.location.assign("/auth?mode=login");
      showGlobalToast("Session expired. Please log in again.", "error");
    }
    return Promise.reject(error);
  }
);

export default apiClient;

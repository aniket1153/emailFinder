import apiClient from "./api.client";
import { BASE_API_URL } from "./api.constants";
import { APIENDPOINTS } from "./api.endpoints";

// Auth Services
export const login = async (email, password) => {
  const response = await apiClient.post(APIENDPOINTS.signIn, {
    email,
    password,
  });
  return response.data;
};

export const createAccount = async (userData) => {
  const response = await apiClient.post(APIENDPOINTS.signUp, userData);
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post(APIENDPOINTS.logOut);
  return response.data;
};

// Plans Service
export const getPlans = async () => {
  const response = await apiClient.get(APIENDPOINTS.getPlans);
  return response.data;
};

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

export const createAccount = async (email, password) => {
  const response = await apiClient.post(APIENDPOINTS.signUp, {
    email,
    password,
  });
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

export const subscribePlan = async (body) => {
  const response = await apiClient.post(APIENDPOINTS.subscribePlan, body);
  return response.data;
};

// Email Accounts Service
export const getEmailAccounts = async ({
  page = 1,
  limit = 10,
  filters = {},
} = {}) => {
  // Build query params for pagination and filters
  const params = { page, limit, ...filters };
  const response = await apiClient.get(APIENDPOINTS.getEmailAccounts, {
    params,
  });
  return response.data;
};

// Paypal Service
export const createPaypalOrder = async (body) => {
  const response = await apiClient.post(APIENDPOINTS.createPaypalOrder, body);
  return response.data;
};

export const capturePaypalOrder = async (token) => {
  const response = await apiClient.post(
    `${APIENDPOINTS.capturePaypalOrder}/${token}`
  );
  return response.data;
};

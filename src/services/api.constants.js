// Environment-based API URLs
const ENV = "development"; // 'staging' , 'production'

const API_URLS = {
  development: "http://localhost:5000/emailFinder/api",
  staging: "https://staging.example.com/api",
  production: "https://api.example.com",
};

export const BASE_API_URL = API_URLS[ENV] || API_URLS.development;

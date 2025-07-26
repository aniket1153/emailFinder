// Environment-based API URLs
const ENV = "dev"; // 'staging' , 'production'

const API_URLS = {
  dev: "http://localhost:5000/emailFinder/api",
  staging: "https://email-finder-server.onrender.com/emailFinder/api",
  production: "https://api.example.com",
};

export const BASE_API_URL = API_URLS[ENV] || API_URLS.dev;

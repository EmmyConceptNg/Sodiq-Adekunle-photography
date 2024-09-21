import axios from "axios";
import { store } from "../redux/Store"; 
import { clearUser } from "../redux/UserReducer";


let baseURL = "";

if (window.location.origin.includes("localhost")) {
  baseURL = "http://localhost:8080";
} else {
  baseURL = "https://sodiq-adekunle-photography.onrender.com";
}

const instance = axios.create({
  baseURL,
});

export const getImageUrl = (imagePath) => {
  return `${baseURL}/${imagePath}`;
};

// Add request interceptor to include access token in headers
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle token refresh and redirection
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          // Make the request to refresh token
          const response = await instance.post("/api/auth/refresh-token", {
            refreshToken,
          });
          const { accessToken } = response.data;

          // Store the new token and retry the original request
          localStorage.setItem("accessToken", accessToken);
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return instance(originalRequest);
        } catch (refreshError) {
          console.log("Refresh token expired. Please login again.");
          // Dispatch clearUser action and redirect to login
          store.dispatch(clearUser());
          window.location.href = "/login";
        }
      } else {
        console.log("No refresh token available. Please login.");
        // Dispatch clearUser action and redirect to login
        store.dispatch(clearUser());
        window.location.href = "/login";
      }
    }

    // If the error is a 401 and it's after retrying, redirect to login
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized. Redirecting to login.");
      // Dispatch clearUser action and redirect to login
      store.dispatch(clearUser());
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default instance;

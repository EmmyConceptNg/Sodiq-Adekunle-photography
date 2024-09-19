import axios from "axios";
import { useSelector } from "react-redux";
import { notify } from "../utils/Index";

let baseURL = "";

if (window.location.origin.includes("localhost")) {
  baseURL = "http://localhost:8080";
} else {
  baseURL = "https://prince-server-kck2.onrender.com";
}

const instance = axios.create({
  baseURL,
});

// Helper to get image URL
export const getImageUrl = (imagePath) => {
  return `${baseURL}/images/${imagePath}`;
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

// Add response interceptor to handle token refresh
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 (Unauthorized) and the request hasn't been retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const refreshToken = localStorage.getItem("refreshToken");
      const refreshToken = useSelector(state => state.token.refresh)


      if (refreshToken) {
        try {
          // Refresh the access token using the refresh token
          const response = await instance.post("/api/auth/refresh-token", {
            refreshToken,
          });

          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          // Retry the original request with the new access token
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          console.log("Refresh token expired. Please login again.");
          // Handle logout here if needed
          notify('Please Login in', "error")
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

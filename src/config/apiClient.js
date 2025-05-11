import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import queryClient from "./queryClient";
import { navigate } from "../lib/navigation";

const options = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

const TokenRefreshClient = axios.create(options);

TokenRefreshClient.interceptors.response.use(
  (response) => response.data,
);
const apiClient = axios.create(options);

apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const { config, response } = error;
    const { status, data } = response || { };

    // try to refresh the access token
    if (status === 401 && data.errorCode === "InvalidAccessToken") {
      try {
        await TokenRefreshClient.get("/auth/refresh");
        return TokenRefreshClient(config);
      } catch (error) {
        console.error(error);
        queryClient.clear();
        navigate("/login", {
          state: {
            redirectUrl: window.location.pathname,
          },
        });
      }
    }
    return Promise.reject({
      status,
      message: data.message || "An error occurred",
      ...data,
    });
  }
);

export default apiClient;

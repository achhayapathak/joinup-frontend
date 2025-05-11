import apiClient from "../config/apiClient";

export const login = async (data) => apiClient.post("/auth/login", data);
export const register = async (data) => apiClient.post("/auth/register", data);
export const verifyEmail = async (code) => apiClient.get(`/auth/email/verify/${code}`);
export const sendPasswordResetEmail = async (email) => apiClient.post("/auth/password/forgot", { email });
export const resetPassword = async ({verificationCode, password}) => apiClient.post("/auth/password/reset", { verificationCode, password });

export const getUser = async () => apiClient.get("/user");
// src/api/authApi.js
import api from "./axios";

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  return api.get("/users/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

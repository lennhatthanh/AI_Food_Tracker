import api from ".";

export const googleLogin = async (token) => {
    return api.post("/auth/google-login", { token});
};

export const refreshToken = async () => {
  return await api.post("/auth/refresh-token");
};

export const logOut = async () => {
  return await api.post("/auth/logout");
};


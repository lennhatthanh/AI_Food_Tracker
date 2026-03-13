import api from ".";

export const googleLogin = async (idToken) => {
    return api.post("/auth/google-login", { token: idToken });
};

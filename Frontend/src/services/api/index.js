import axios from "axios";
import { refreshToken } from "./auth";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const parseUserInfo = JSON.parse(localStorage.getItem("user"));
    const token = parseUserInfo.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await refreshToken();
                const parseUserInfo = JSON.parse(localStorage.getItem("user"));
                const token = res.data.data.accessToken;
                localStorage.setItem("user", JSON.stringify({ ...parseUserInfo, accessToken: token }));
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem("user");
                window.location.href = "/";
                console.error(refreshError);
                toast.error(refreshError.response.data.message);
            }
        }
    },
);

export default api
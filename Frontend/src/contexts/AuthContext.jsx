import { googleLogin } from "@/services/api/auth";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const navigate = useNavigate();
    const loginGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const idToken = await result.user.getIdToken();
            const res = await googleLogin(idToken);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            setUser(res.data.data);
            toast.success("User logged in successfully");
        } catch (error) {
            console.log(error);

            toast.error(error?.response?.data?.message || "Login failed. Please try again.");
        }
    };
    return <AuthContext.Provider value={{ loginGoogle }}>{children}</AuthContext.Provider>;
}

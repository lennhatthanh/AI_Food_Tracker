import { auth, googleProvider } from "firebase";
import { signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export default function AuthContext({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const navigate = useNavigate();
    const loginGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const idToken = await result.user.getIdToken();
            
        } catch (error) {
            toast.error(error?.response?.data?.message || "Login failed. Please try again.");
        }
    };
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

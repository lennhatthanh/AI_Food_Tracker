import { UtensilsCrossed } from "lucide-react";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "@/contexts/AuthContext";
export default function LoginPage() {
    const { loginGoogle } = useContext(AuthContext);
    const handleGoogleLogin = async () => {
        try {
            await loginGoogle();
        } catch (error) {
            console.error(error);
        } finally {
        }
    };
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
            <div className="max-w-96 w-full rounded-lg shadow-xl">
                <div className="bg-primary/50 rounded-tr-lg rounded-tl-lg py-12">
                    <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <UtensilsCrossed className="text-primary text-center" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center p-5">
                    <h2 className="font-bold text-xl">AI Food Tracker</h2>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-2xl">Track calories using AI</h1>
                        <p className="max-w-64 text-sm text-gray-400 text-center">
                            The simplest way to log your meals and stay on top of your nutrition goals.
                        </p>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-5 py-2 bg-primary rounded-lg w-full my-3 font-bold"
                        onClick={handleGoogleLogin}
                    >
                        Continue with Google
                    </motion.button>
                    <div className="flex items-center w-full gap-3">
                        <div className="w-full border-t-1 border-gray-200"></div>
                        <div className="text-gray-300 text-[12px] flex-1 whitespace-nowrap">SECURE LOGIN</div>
                        <div className="w-full border-t-1 border-gray-200"></div>
                    </div>
                    <p className="text-[12px] font-medium text-gray-400 outline-0">Privacy Policy • Terms of Service</p>
                </div>
            </div>
            <p className="text-gray-400 font-bold">
                New to AI Food Tracker? <span className="text-primary"> Get started for free</span>
            </p>
        </div>
    );
}

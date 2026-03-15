import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export default function PublicLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
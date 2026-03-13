import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function MotionProvider({ children }) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {children(location)}
            </motion.div>
        </AnimatePresence>
    );
}

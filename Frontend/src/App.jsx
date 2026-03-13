import { BrowserRouter, Routes, Route } from "react-router-dom";
import MotionProvider from "./contexts/MotionProviders";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";

function App() {
    return (
        <BrowserRouter>
            <MotionProvider>
                {(location) => (
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<DashBoard />} />
                    </Routes>
                )}
            </MotionProvider>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";
import MotionProvider from "./contexts/MotionProviders";

function App() {
    return (
        <BrowserRouter>
            <MotionProvider>
                <Routes>
                    <Route path="landing-page" element={<LandingPage />} />
                    <Route path="dashboard" element={<DashBoard />} />
                </Routes>
            </MotionProvider>
        </BrowserRouter>
    );
}

export default App;

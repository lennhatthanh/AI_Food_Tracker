import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import AuthProvider from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Setting from "./pages/SettingPage";
import UploadMeal from "./pages/UploadMeal";
import PublicLayout from "./components/PublicLayout";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>

            <Route element={<Layout />}>
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="upload" element={<UploadMeal />} />
                <Route path="setting" element={<Setting />} />
            </Route>
        </Routes>
    );
}
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
            <Toaster />
        </BrowserRouter>
    );
}

export default App;

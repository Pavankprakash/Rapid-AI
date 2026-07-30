import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./components/common/ProtectedRoute";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";
import Titles from "./pages/Titles";
import Resume from "./pages/Resume";
import History from "./pages/History";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Community from "./pages/Community";

function App() {

    return (
        <Routes>

            {/* Public Website */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            {/* Authentication */}
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />

            {/* Protected Dashboard */}
            <Route
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/article" element={<Article />} />

                <Route path="/titles" element={<Titles />} />

                <Route path="/resume" element={<Resume />} />

                <Route path="/history" element={<History />} />

                <Route path="/community" element={<Community />} />

                <Route path="/about" element={<About />} />

                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;
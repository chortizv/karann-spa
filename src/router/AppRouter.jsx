import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/auth/LoginPage";

import Dashboard from "../pages/dashboard/Dashboard";
import Trabajadores from "../pages/trabajador/Trabajadores";
import Obras from "../pages/obra/Obras";
import Planificacion from "../pages/planificacion/Planificacion";

export default function AppRouter() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />

                    {/* Rutas protegidas */}
                    <Route path="/app" element={<ProtectedRoute />}>
                        <Route element={<MainLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="trabajadores" element={<Trabajadores />} />
                            <Route path="obras" element={<Obras />} />
                            <Route path="planificacion" element={<Planificacion />} />
                        </Route>
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
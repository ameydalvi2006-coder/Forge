import { Routes, Route } from "react-router";
import ProtectedRoute from "../components/common/ProtectedRoute";
import PublicRoute from "../components/common/PublicRoute";

// Pages
import Landing from "../pages/landing/Landing";
import AuthPage from "../pages/auth/AuthPage";
import Dashboard from "../pages/dashboard/Dashboard";
import GiveProject from "../pages/dashboard/routes/GiveProject";
import Freelancer from "../pages/dashboard/routes/Freelancer";

// Layout
import DashboardLayout from "../components/layout/DashboardLayout";

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<Landing />} />

      {/* AUTH (block if already logged in) */}
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />

      {/* PROTECTED */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="give-project" element={<GiveProject />} />
        <Route path="freelancer" element={<Freelancer />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

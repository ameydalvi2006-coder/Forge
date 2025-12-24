import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "../../app/hooks";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAppSelector((s) => s.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (location.pathname === "/dashboard") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

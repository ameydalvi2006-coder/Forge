import { Navigate } from "react-router";
import { useAppSelector } from "../../app/hooks";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;

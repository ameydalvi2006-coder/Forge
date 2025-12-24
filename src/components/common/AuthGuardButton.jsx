import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";

const AuthGuardButton = ({ to, className, children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/auth");
    } else {
      navigate(to);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default AuthGuardButton;

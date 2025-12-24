import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const { user, isAuthenticated } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* 🔥 LOGO (IMAGE BASED – SAME AS YOU ASKED) */}
        <div className="flex items-center gap-3">
          <img
            src="/forge1.png"
            alt="Forge Logo"
            className="w-27 h-23 object-contain"
          />
        </div>

        {!isAuthenticated ? (
          <div className="flex gap-4">
            <button
              className="bg-purple-500 shadow-lg shadow-purple-700/50 px-4 py-1 rounded"
              onClick={() => navigate("/auth")}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-purple-300 text-sm">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-purple-600 px-4 py-1 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

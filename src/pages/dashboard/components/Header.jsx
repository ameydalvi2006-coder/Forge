import React from "react";
import { Search, Mail, Bell, Plus, Upload } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { logout } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-purple-800/30 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
  <img
    src="/forge1.png"
    alt="Forge Logo"
    className="w-20 h-20 object-contain"
  />
</div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search task"
              className="bg-gray-800/50 border border-purple-800/30 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500 w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800/50 rounded-lg transition">
            <Mail className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800/50 rounded-lg transition">
            <Bell className="w-5 h-5" />
          </button>

          {/* 🔥 ONLY THIS PART CHANGED */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-semibold">
                {user?.email}
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-purple-400 hover:underline"
              >
                Logout
              </button>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition">
          <Plus className="w-5 h-5" />
          Add Project
        </button>
        <button className="bg-gray-800/50 border border-purple-800/30 px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition">
          <Upload className="w-5 h-5" />
          Import Data
        </button>
      </div>
    </header>
  );
}

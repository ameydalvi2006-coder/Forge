import { Outlet } from "react-router";
import Header from "../../pages/dashboard/components/Header";
import Sidebar from "../../pages/dashboard/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

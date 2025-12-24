import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Outlet />
    </div>
  );
};

export default PublicLayout;

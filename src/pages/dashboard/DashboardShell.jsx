import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const DashboardShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-950 to-gray-900 text-white">

      <div className="flex">
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardShell;

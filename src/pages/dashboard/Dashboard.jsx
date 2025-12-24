import StatsCards from "./components/StatsCards";
import ProjectAnalytics from "./components/ProjectAnalytics";
import ProjectList from "./components/ProjectList";
import ProjectProgress from "./components/ProjectProgress";
import TeamCollaboration from "./components/TeamCollaboration";
import Reminders from "./components/Reminders";
import TimeTracker from "./components/TimeTracker";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">Plan, prioritize and execute your tasks with ease.</p>
          </div>

          <StatsCards />

          <div className="grid grid-cols-3 gap-4">
            <ProjectAnalytics />
            <Reminders/>
            <ProjectList />
            <TeamCollaboration />
            <ProjectProgress />
            <TimeTracker />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

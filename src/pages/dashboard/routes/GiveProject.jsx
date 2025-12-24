import StatsCards from "../components/StatsCards";
import ProjectAnalytics from "../components/ProjectAnalytics";
import ProjectProgress from "../components/ProjectProgress";
import Reminders from "../components/Reminders";
import ProjectList from "../components/ProjectList";
import TeamCollaboration from "../components/TeamCollaboration";
import TimeTracker from "../components/TimeTracker";

const GiveProject = () => {
  return (
    <div className="p-8 flex-1">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Give a Project</h1>
        <p className="text-gray-400">
          Create projects, monitor progress and manage deadlines.
        </p>
      </div>

      {/* Stats */}
      <StatsCards />

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-4">
     <ProjectAnalytics />
                 <ProjectList />
                 <TeamCollaboration />
      </div>
    </div>
  );
};

export default GiveProject;

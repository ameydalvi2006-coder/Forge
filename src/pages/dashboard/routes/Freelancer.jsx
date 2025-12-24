import DashboardShell from "../DashboardShell";
import { Plus } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Build React Admin Dashboard",
    desc: "Create a modern admin dashboard using React and Tailwind.",
    budget: "₹8,000",
    status: "To Start",
  },
  {
    id: 2,
    title: "Landing Page UI",
    desc: "Design a responsive landing page with animations.",
    budget: "₹5,000",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Fix Redux Authentication",
    desc: "Debug and optimize Redux authentication flow.",
    budget: "₹3,000",
    status: "Done",
  },
];

const Freelancer = () => {
  const handleJoin = (task) => {
    const joined = JSON.parse(localStorage.getItem("joinedTasks")) || [];
    const exists = joined.find((t) => t.id === task.id);
    if (exists) return alert("Already joined this task");

    localStorage.setItem(
      "joinedTasks",
      JSON.stringify([...joined, task])
    );

    alert(`Joined project: ${task.title}`);
  };

  const columns = ["To Start", "In Progress", "Done"];

  return (
    <DashboardShell>
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Freelancer Projects</h1>
        <p className="text-gray-400">
          Join projects and start working instantly
        </p>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div
            key={col}
            className="bg-gray-900/40 border border-purple-500/30 rounded-xl p-4"
          >
            <h3 className="font-semibold mb-4 text-purple-300">
              {col}
            </h3>

            <div className="space-y-4">
              {tasks
                .filter((t) => t.status === col)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition"
                  >
                    <h4 className="font-semibold mb-1">
                      {task.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      {task.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">
                        {task.budget}
                      </span>

                      {col !== "Done" && (
                        <button
                          onClick={() => handleJoin(task)}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
                        >
                          <Plus className="w-4 h-4" />
                          Join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
};

export default Freelancer;

import React from 'react';

export default function ProjectList() {
  const projects = [
    { name: 'Onboarding Flow', icon: '📱', color: 'from-blue-500 to-blue-600', progress: 85 },
    { name: 'Build Dashboard', icon: '🎨', color: 'from-purple-500 to-purple-600', progress: 65 },
    { name: 'Optimize Page Load', icon: '⚡', color: 'from-yellow-500 to-orange-500', progress: 45 },
    { name: 'Cross-Browser Testing', icon: '🔧', color: 'from-pink-500 to-pink-600', progress: 30 }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base">Projects</h3>
        <button className="text-xs bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded-lg border border-purple-500/50 font-semibold transition-all">
          + New
        </button>
      </div>
      <div className="space-y-2">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-700/30 border border-purple-500/20 p-3 hover:border-purple-500/40 rounded-lg transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-8 h-8 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center text-sm shadow-lg`}>
                {project.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs truncate">{project.name}</div>
                <div className="text-xs text-gray-400">Dec 2025</div>
              </div>
              <div className="text-xs font-bold text-purple-400">{project.progress}%</div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${project.color} rounded-full transition-all duration-500`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
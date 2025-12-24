import React from 'react';
import { Plus } from 'lucide-react';

export default function TeamCollaboration() {
  const members = [
    { name: 'Alexandra Deff', project: 'Github Project Repository', status: 'Completed', color: 'bg-green-500', initials: 'AD', avatarColor: 'from-green-400 to-emerald-500' },
    { name: 'Edwin Advinco', project: 'Google Authentication System', status: 'In Progress', color: 'bg-yellow-500', initials: 'EA', avatarColor: 'from-yellow-400 to-orange-500' },
    { name: 'Isaac Okunolantuboh', project: 'Search and Filter', status: 'Pending', color: 'bg-red-500', initials: 'IO', avatarColor: 'from-red-400 to-pink-500' },
    { name: 'Elvira Orhiole', project: 'Responsive Layout', status: 'In Progress', color: 'bg-yellow-500', initials: 'EO', avatarColor: 'from-blue-400 to-purple-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base">Team Collaboration</h3>
        <button className="text-xs bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded-lg border border-purple-500/50 font-semibold transition-all flex items-center gap-1">
          <Plus className="w-3 h-3" />
          Add
        </button>
      </div>
      <div className="space-y-2">
        {members.map((member, i) => (
          <div key={i} className="flex items-center gap-3 p-2 bg-gray-700/30 border border-purple-500/20 hover:border-purple-500/40 rounded-lg transition-all">
            <div className={`w-9 h-9 bg-gradient-to-br ${member.avatarColor} rounded-full flex items-center justify-center font-bold text-xs shadow-lg`}>
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-xs truncate">{member.name}</div>
              <div className="text-xs text-gray-400 truncate">{member.project}</div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${member.color} bg-opacity-20 whitespace-nowrap`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
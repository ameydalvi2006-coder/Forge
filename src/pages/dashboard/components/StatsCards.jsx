import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-xl p-5 shadow-2xl shadow-purple-500/20 border border-purple-400/20">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium uppercase tracking-wide opacity-90">Total Projects</span>
          <div className="bg-white/20 p-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
        <div className="text-3xl font-bold mb-2 tracking-tight">24</div>
        <div className="text-xs font-medium flex items-center gap-1">
          <span className="text-green-300">↑ +4</span>
          <span className="opacity-90">last month</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-5 shadow-xl hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-300">Ended Projects</span>
          <div className="bg-purple-500/20 p-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
        </div>
        <div className="text-3xl font-bold mb-2 tracking-tight">10</div>
        <div className="text-xs font-medium flex items-center gap-1 text-gray-400">
          <span className="text-green-400">↑ +2</span>
          <span>last month</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-5 shadow-xl hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-300">Running Projects</span>
          <div className="bg-blue-500/20 p-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4 text-blue-400" />
          </div>
        </div>
        <div className="text-3xl font-bold mb-2 tracking-tight">12</div>
        <div className="text-xs font-medium flex items-center gap-1 text-gray-400">
          <span className="text-green-400">↑ +2</span>
          <span>last month</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-5 shadow-xl hover:border-purple-500/50 transition-all">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-300">Pending Projects</span>
          <div className="bg-orange-500/20 p-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4 text-orange-400" />
          </div>
        </div>
        <div className="text-3xl font-bold mb-2 tracking-tight">2</div>
        <div className="text-xs font-medium text-gray-400">
          <span>On Process</span>
        </div>
      </div>
    </div>
  );
}
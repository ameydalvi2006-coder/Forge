import React from 'react';

export default function ProjectProgress() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-4 shadow-xl">
      <h3 className="font-bold text-base mb-4">Project Progress</h3>
      <div className="flex items-center justify-center h-32 relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-gray-700" />
          <circle 
            cx="64" 
            cy="64" 
            r="56" 
            stroke="url(#gradient)" 
            strokeWidth="12" 
            fill="none" 
            strokeDasharray="352" 
            strokeDashoffset="207" 
            strokeLinecap="round"
            className="drop-shadow-lg"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">41%</div>
            <div className="text-xs text-gray-400 font-semibold mt-1">Done</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-purple-500/20">
        <div className="text-center bg-gray-700/30 rounded-lg p-2 border border-purple-500/20">
          <div className="flex items-center justify-center mb-1">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>
          <div className="text-xs font-semibold text-gray-400">Completed</div>
          <div className="text-base font-bold mt-0.5">10</div>
        </div>
        <div className="text-center bg-gray-700/30 rounded-lg p-2 border border-yellow-500/20">
          <div className="flex items-center justify-center mb-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
          </div>
          <div className="text-xs font-semibold text-gray-400">Progress</div>
          <div className="text-base font-bold mt-0.5">12</div>
        </div>
        <div className="text-center bg-gray-700/30 rounded-lg p-2 border border-gray-500/20">
          <div className="flex items-center justify-center mb-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full shadow-lg shadow-gray-500/50"></div>
          </div>
          <div className="text-xs font-semibold text-gray-400">Pending</div>
          <div className="text-base font-bold mt-0.5">2</div>
        </div>
      </div>
    </div>
  );
}
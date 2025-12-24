import React from 'react';

export default function ProjectAnalytics() {
  const data = [
    { height: 40, label: '5', value: 12 },
    { height: 75, label: '7', value: 22 },
    { height: 55, label: '9', value: 16 },
    { height: 95, label: '11', value: 28 },
    { height: 60, label: '13', value: 18 },
    { height: 85, label: '15', value: 25 },
    { height: 50, label: '17', value: 15 }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base">Project Analytics</h3>
        <select className="bg-gray-700/50 border border-purple-500/30 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-purple-500">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="flex items-end justify-between gap-2 h-32 px-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
            <div className="w-full flex items-end justify-center relative" style={{ height: '100px' }}>
              <div className="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 px-2 py-1 rounded text-xs font-bold">
                {item.value}
              </div>
              <div
                className={`w-full max-w-[24px] rounded-t-lg shadow-lg transition-all hover:scale-105 ${
                  i % 2 === 0 
                    ? 'bg-gradient-to-t from-purple-600 via-purple-500 to-pink-500' 
                    : 'bg-gradient-to-t from-purple-700 via-purple-600 to-purple-500'
                }`}
                style={{ height: `${item.height}%` }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
          <span className="text-gray-400">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-500"></div>
          <span className="text-gray-400">Completed</span>
        </div>
      </div>
    </div>
  );
}
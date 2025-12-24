import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900/30 backdrop-blur-sm border-r border-purple-800/30 min-h-screen p-6">
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 mb-4">MENU</h3>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium">
            <TrendingUp className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 rounded-lg transition">
            <Clock className="w-5 h-5" />
            <span>Tasks</span>
            <span className="ml-auto bg-purple-600 text-xs px-2 py-1 rounded">02</span>
          </a>
        </nav>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-400 mb-4">GENERAL</h3>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 rounded-lg transition text-gray-400">
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 rounded-lg transition text-gray-400">
            Help
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 rounded-lg transition text-gray-400">
            Logout
          </a>
        </nav>
      </div>

      <div className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-purple-800/30">
        <h4 className="font-bold text-lg mb-2">Download our Mobile App</h4>
        <p className="text-sm text-gray-400 mb-4">Get it on your mobile phone</p>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition">
          Download
        </button>
      </div>
    </aside>
  );
}
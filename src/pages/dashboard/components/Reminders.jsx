import React from 'react';
import { Clock, Play } from 'lucide-react';

export default function Reminders() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 rounded-xl p-4 shadow-xl">
      <h3 className="font-bold text-base mb-4">Reminders</h3>
      <div className="space-y-3">
        <div className="bg-gray-700/30 border border-purple-500/20 rounded-lg p-3 hover:border-purple-500/40 transition-all">
          <div className="flex items-start gap-2 mb-3">
            <div className="bg-purple-500/20 p-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm mb-1">Meeting with Arc Company</h4>
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <span className="font-semibold text-purple-400">Friday</span>
                <span>•</span>
                <span>09:00 PM</span>
                <span className="ml-auto bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded text-xs font-medium">
                  In 2h
                </span>
              </p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-2 rounded-lg text-xs font-semibold transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2">
            <Play className="w-3 h-3" />
            Start Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
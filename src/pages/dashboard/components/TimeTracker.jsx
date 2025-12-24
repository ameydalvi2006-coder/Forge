import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function TimeTracker() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 border-2 border-purple-500/30 rounded-xl p-4 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute rounded-full border-2 border-purple-400 animate-pulse" style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.2}s`
          }}></div>
        ))}
      </div>
      <h3 className="font-bold text-base mb-3 relative z-10">Time Tracker</h3>
      <div className="relative z-10">
        <div className="bg-gray-800/50 border border-purple-500/30 rounded-xl p-4 mb-3">
          <div className="text-4xl font-bold text-center font-mono tracking-wider bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {formatTime(time)}
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-purple-500/30 hover:scale-105"
>
{isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
</button>
<button
onClick={() => { setIsRunning(false); setTime(0); }}
className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-red-500/30 hover:scale-105"
>
<div className="w-3 h-3 bg-white rounded-sm"></div>
</button>
</div>
</div>
</div>
);
}
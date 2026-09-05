import React, { useEffect, useState } from 'react';

interface ProgressData {
  [key: string]: number; // category -> completed count
}

const ProgressTracker: React.FC = () => {
  const [progress, setProgress] = useState<ProgressData>({});
  const categories = [
    'Python Coding Challenges',
    'Statistics & Probability',
    'ML Questions',
    'SQL Queries',
    'System Design for ML',
    'Behavioral Questions STAR'
  ];
  const totalItems = {
    'Python Coding Challenges': 10,
    'Statistics & Probability': 20, // formulas + hypothesis testing (approx)
    'ML Questions': 20,
    'SQL Queries': 15,
    'System Design for ML': 10, // assumed
    'Behavioral Questions STAR': 10 // assumed
  };

  useEffect(() => {
    const saved = localStorage.getItem('ds-interview-prep-progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse progress from localStorage', e);
        setProgress({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ds-interview-prep-progress', JSON.stringify(progress));
  }, [progress]);

  const incrementProgress = (category: string) => {
    setProgress(prev => ({
      ...prev,
      [category]: Math.min((prev[category] || 0) + 1, totalItems[category] || 0)
    }));
  };

  const getProgressPercent = (category: string): number => {
    const completed = progress[category] || 0;
    const total = totalItems[category] || 1;
    return Math.min((completed / total) * 100, 100);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white/90 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m2 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
        Your Progress
      </h2>
      <div className="space-y-3">
        {categories.map(category => (
          <div key={category} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="text-white/80">{category}</span>
              <span className="text-white/70">
                {progress[category] || 0}/{totalItems[category]}
              </span>
            </div>
            <div className="w-full bg-gray-800/50 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 transition-all duration-500 ease-out`}
                style={{ width: `${getProgressPercent(category)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-4">
        <button
          onClick={() => {
            if (window.confirm('Reset all progress?')) {
              setProgress({});
            }
          }}
          className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-lg transition-colors duration-300 text-sm font-medium hover:text-white/90 backdrop-blur-sm border border-purple-600/30"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
};

export default ProgressTracker;
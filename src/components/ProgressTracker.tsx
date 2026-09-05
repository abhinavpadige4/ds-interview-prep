import React, { useState, useEffect } from 'react';

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
    'Statistics & Probability': 20, // assuming formulas + hypothesis testing items
    'ML Questions': 20,
    'SQL Queries': 15,
    'System Design for ML': 10, // assuming 10 system design concepts
    'Behavioral Questions STAR': 10 // assuming 10 STAR scenarios
  };

  useEffect(() => {
    const saved = localStorage.getItem('ds-interview-prep-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
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
    const total = totalItems[category] || 0;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white mb-2">Your Progress</h2>
      <div className="space-y-3">
        {categories.map(category => (
          <div key={category} className="flex flex-col space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">{category}</span>
              <span className="text-a855f7 font-medium">
                {progress[category] || 0}/{totalItems[category]}
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
              <div
                className={`bg-gradient-to-r from-a855f7 to-9333ea h-full transition-all duration-500 ease-out`}
                style={{ width: `${getProgressPercent(category)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{getProgressPercent(category)}% Complete</span>
              <span className="cursor-pointer text-a855f7 hover:underline" onClick={() => incrementProgress(category)}>
                Mark as Done
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
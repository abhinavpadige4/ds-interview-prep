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
    'System Design for ML': 10, // assuming 10 key concepts
    'Behavioral Questions STAR': 10 // assuming 10 common behavioral questions
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

  const decrementProgress = (category: string) => {
    setProgress(prev => ({
      ...prev,
      [category]: Math.max((prev[category] || 0) - 1, 0)
    }));
  };

  const getProgressPercentage = (category: string): number => {
    const completed = progress[category] || 0;
    const total = totalItems[category] || 1;
    return Math.min((completed / total) * 100, 100);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white mb-2">Your Progress</h2>
      <div className="space-y-3">
        {categories.map(category => (
          <div key={category} className="flex items-center space-x-3">
            <span className="w-20 text-sm font-medium text-gray-300 flex-shrink-0">
              {category}
            </span>
            <div className="flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden">
              <div
                className={`bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-full transition-all duration-500 ease-out`}
                style={{ width: `${getProgressPercentage(category)}%` }}
              ></div>
            </div>
            <span className="w-12 text-sm text-right text-gray-400 flex-shrink-0">
              {Math.round(getProgressPercentage(category))}%
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decrementProgress(category)}
                disabled={(progress[category] || 0) <= 0}
                className="p-1 rounded hover:bg-purple-600/20 transition-colors text-purple-400 hover:text-white"
                aria-label={`Decrement progress for ${category}`}
              >
                −
              </button>
              <button
                onClick={() => incrementProgress(category)}
                disabled={(progress[category] || 0) >= (totalItems[category] || 0)}
                className="p-1 rounded hover:bg-purple-600/20 transition-colors text-purple-400 hover:text-white"
                aria-label={`Increment progress for ${category}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500 mt-3">
        Data saved locally in your browser
      </div>
    </div>
  );
};

export default ProgressTracker;
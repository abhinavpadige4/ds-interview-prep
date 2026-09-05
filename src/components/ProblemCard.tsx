import React, { useState } from 'react';

interface ProblemCardProps {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  onSolve: () => void;
  isSolved: boolean;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ 
  id, 
  title, 
  difficulty, 
  category, 
  onSolve, 
  isSolved 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const difficultyColors: Record<'Easy' | 'Medium' | 'Hard', string> = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444',
  };

  return (
    <div
      className={`group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-${difficultyColors[difficulty]}/20 text-${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
        <span className="text-xs text-white/50">{category}</span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center justify-between mt-auto pt-4">
        <button
          onClick={onSolve}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10 text-white/90`}
          disabled={isSolved}
        >
          {isSolved ? (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Solved
            </span>
          ) : (
            <span>Solve Problem</span>
          )}
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-white/60">Progress</span>
          <div className="w-10 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${isSolved ? 'w-full' : 'w-0'}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
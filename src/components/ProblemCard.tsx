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
      className={`group relative flex flex-col h-full bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave(() => setIsHovered(false))
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span 
          className={`px-3 py-1 text-xs font-medium rounded-full bg-[${difficultyColors[difficulty]}] bg-opacity-20 text-[${difficultyColors[difficulty]}]`}
        >
          {difficulty}
        </span>
      </div>
      
      <p className="text-sm text-gray-400 flex-1 mb-4">{category}</p>
      
      <div className="mt-auto pt-4">
        <button
          onClick={onSolve}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.3)] text-[${isSolved ? '#10b981' : 'white']} font-medium rounded-lg transition-all duration-200 ${isSolved ? 'cursor-not-allowed opacity-70' : ''}`}
          disabled={isSolved}
        >
          {isSolved ? 'Solved ✓' : 'View Solution'}
          {!isSolved && (
            <svg 
              className="w-4 h-4 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              transform={isHovered ? 'rotate(180)' : 'rotate(0)'}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
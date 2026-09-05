import React from 'react';

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
  const difficultyColors: Record<'Easy' | 'Medium' | 'Hard', string> = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444'
  };

  return (
    <div 
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span 
          className={`px-3 py-1 text-xs font-medium rounded-full bg-${difficulty[difficulty.toLowerCase() as keyof typeof difficulty]}-100 text-${difficulty[difficulty.toLowerCase() as keyof typeof difficulty]}`}
        >
          {difficulty}
        </span>
      </div>
      
      <p className="text-gray-400 mb-4">{category}</p>
      
      <div className="flex items-center justify-between">
        <button
          onClick={onSolve}
          className="flex-1 px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-600/30 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSolved}
        >
          {isSolved ? 'Solved' : 'Solve'}
        </button>
        
        {!isSolved && (
          <button
            onClick={() => alert('Solution modal would open here')}
            className="ml-3 px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-600/30 hover:text-white transition-all duration-300"
          >
            View Solution
          </button>
        )}
      </div>
    </div>
  );
};

export default ProblemCard;
import React, { useState } from 'react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  problemStatement: string;
  solution: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const SolutionModal: React.FC<SolutionModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  problemStatement, 
  solution, 
  explanation, 
  difficulty 
}) => {
  if (!isOpen) return null;

  const difficultyColors: Record<'Easy' | 'Medium' | 'Hard', string> = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444',
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <div className="flex items-center gap-3">
              <span 
                className={`px-3 py-1 text-xs font-medium rounded-full bg-[${difficultyColors[difficulty]}] bg-opacity-20 text-[${difficultyColors[difficulty]}]`}
              >
                {difficulty}
              </span>
              <span className="text-sm text-gray-400">• Data Science Interview</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-[rgba(255,255,255,0.1)]">
            <div className="flex space-x-0">
              <button
                onClick={() => { /* Tab switching logic would go here */ }}
                className="flex-1 px-4 py-3 text-left text-gray-400 hover:text-white border-b-2 border-transparent hover:border-[rgba(168,85,247,0.5)] transition-all duration-200"
              >
                Problem Statement
              </button>
              <button
                onClick={() => { /* Tab switching logic would go here */ }}
                className="flex-1 px-4 py-3 text-left text-gray-400 hover:text-white border-b-2 border-transparent hover:border-[rgba(168,85,247,0.5)] transition-all duration-200"
              >
                Solution
              </button>
              <button
                onClick={() => { /* Tab switching logic would go here */ }}
                className="flex-1 px-4 py-3 text-left text-gray-400 hover:text-white border-b-2 border-transparent hover:border-[rgba(168,85,247,0.5)] transition-all duration-200"
              >
                Explanation
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-3">Problem Statement</h3>
              <p className="whitespace-pre-wrap">{problemStatement}</p>
            </div>
            
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
              <pre className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 overflow-x-auto">
                <code className="text-sm font-mono text-gray-200">{solution}</code>
              </pre>
            </div>
            
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-3">Explanation</h3>
              <p className="whitespace-pre-wrap">{explanation}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.1)]">
            <button
              onClick={onClose}
              className="w-full flex items-center justify-center px-4 py-3 bg-[rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.3)] text-white font-medium rounded-lg transition-all duration-200"
            >
              Close
              <svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
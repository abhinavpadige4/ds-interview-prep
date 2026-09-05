import React, { useState } from 'react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  problemId: number;
  title: string;
  problemStatement: string;
  solutionCode: string;
  explanation: string;
}

const SolutionModal: React.FC<SolutionModalProps> = ({ 
  isOpen, 
  onClose, 
  problemId, 
  title, 
  problemStatement, 
  solutionCode, 
  explanation 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl w-full max-w-2xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200"
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold text-purple-400 mb-4">{title}</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Problem Statement</h3>
          <p className="text-gray-300 leading-relaxed">{problemStatement}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-200">{solutionCode}</code>
          </pre>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Explanation</h3>
          <p className="text-gray-300 leading-relaxed">{explanation}</p>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SolutionModal;
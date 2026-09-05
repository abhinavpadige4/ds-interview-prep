import React, { useState } from 'react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  problemTitle: string;
  problemDescription: string;
  solutionCode: string;
  explanation: string;
}

const SolutionModal: React.FC<SolutionModalProps> = ({ 
  isOpen, 
  onClose, 
  problemTitle, 
  problemDescription, 
  solutionCode, 
  explanation 
}) => {
  const [tab, setTab] = useState<'description' | 'solution' | 'explanation'>('description');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl transform scale-95 opacity-0 animate-[fadeInUp_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full">
          <div className="mb-6 pb-4 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">{problemTitle}</h2>
            <p className="text-white/70 text-sm">{problemDescription}</p>
          </div>

          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setTab('description')}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${tab === 'description' ? 'bg-white/20 text-white' : 'bg-transparent text-white/60 hover:bg-white/10'}`}
            >
              Description
            </button>
            <button
              onClick={() => setTab('solution')}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${tab === 'solution' ? 'bg-white/20 text-white' : 'bg-transparent text-white/60 hover:bg-white/10'}`}
            >
              Solution
            </button>
            <button
              onClick={() => setTab('explanation')}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${tab === 'explanation' ? 'bg-white/20 text-white' : 'bg-transparent text-white/60 hover:bg-white/10'}`}
            >
              Explanation
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {tab === 'description' && (
              <div className="text-white/80 leading-relaxed">
                <p>{problemDescription}</p>
              </div>
            )}
            {tab === 'solution' && (
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Solution Code</h3>
                <pre className="bg-white/10 rounded-lg p-4 overflow-x-auto">
                  <code className="text-white/90 text-sm font-mono break-whitespace">{solutionCode}</code>
                </pre>
              </div>
            )}
            {tab === 'explanation' && (
              <div className="text-white/80 leading-relaxed">
                <h3 className="text-lg font-semibold text-white mb-3">Explanation</h3>
                <p>{explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
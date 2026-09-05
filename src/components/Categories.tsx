```typescript
import { useState } from 'react';
import { Category, Question } from '../data/questions';

interface CategoriesProps {
  categories: { id: Category; label: string }[];
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  questions: Question[];
  toggleComplete: (id: string) => void;
  isCompleted: (id: string) => boolean;
  getProgress: (category: string) => number;
}

export default function Categories({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  questions,
  toggleComplete,
  isCompleted,
  getProgress,
}: CategoriesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">
          {categories.find(c => c.id === activeCategory)?.label}
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Progress:</span>
          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${getProgress(activeCategory)}%` }}
            />
          </div>
          <span>{getProgress(activeCategory)}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((q, idx) => (
          <div
            key={q.id}
            className={`glass-card p-6 cursor-pointer animate-fade-in ${expandedId === q.id ? 'border-primary/50' : ''}`}
            style={{ animationDelay: `${idx * 50}ms` }}
            onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-medium text-white">{q.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleComplete(q.id);
                }}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCompleted(q.id) 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-gray-500 hover:border-primary'
                }`}
              >
                {isCompleted(q.id) && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-4">{q.content}</p>
            
            {expandedId === q.id && q.solution && (
              <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                <h4 className="text-primary font-medium mb-2">Solution:</h4>
                <pre className="bg-black/30 p-3 rounded-lg text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap">
                  {q.solution}
                </pre>
              </div>
            )}
            
            <div className="mt-3 text-xs text-gray-500 flex justify-between">
              <span>Click to {expandedId === q.id ? 'collapse' : 'expand'}</span>
              {isCompleted(q.id) && <span className="text-primary">✓ Completed</span>}
            </div>
          </div>
        ))}
      </div>

      {questions.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No questions found matching your search.
        </div>
      )}
    </div>
  );
}

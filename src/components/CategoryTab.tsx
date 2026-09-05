import React, { useState } from 'react';

interface CategoryTabProps {
  category: string;
  items: Array<{
    id: string | number;
    title: string;
    description?: string;
    completed?: boolean;
  }>;
  onItemToggle?: (id: string | number) => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ category, items, onItemToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <h2 className="text-xl font-bold text-white">{category}</h2>
        <span className="text-sm text-gray-400">{filteredItems.length} / {items.length} items</span>
      </div>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search questions, topics, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0z" />
        </svg>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No items match your search. Try a different term.
        </div>
      )}

      <div className="space-y-3">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-0.5`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={item.completed || false}
                  onChange={() => onItemToggle?.(item.id)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white truncate">{item.title}</h3>
                {item.description && (
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
import React, { useState } from 'react';

interface CategoryItem {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
}

interface CategoryTabProps {
  categoryName: string;
  items: CategoryItem[];
  onItemComplete: (itemId: string) => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ categoryName, items, onItemComplete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'pending'>('all');

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedItems = filteredItems.filter(item => {
    if (activeTab === 'completed') return item.completed === true;
    if (activeTab === 'pending') return item.completed !== true;
    return true;
  });

  const handleToggleComplete = (id: string) => {
    onItemComplete(id);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 px-4 py-3 bg-gray-800/50 border border-purple-600/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
        />
        <div className="flex sm:gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'all'
              ? 'bg-purple-600/30 text-white/90 hover:bg-purple-600/40'
              : 'bg-gray-800/50 text-white/60 hover:bg-gray-800/60 hover:text-white/80'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'completed'
              ? 'bg-purple-600/30 text-white/90 hover:bg-purple-600/40'
              : 'bg-gray-800/50 text-white/60 hover:bg-gray-800/60 hover:text-white/80'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'pending'
              ? 'bg-purple-600/30 text-white/90 hover:bg-purple-600/40'
              : 'bg-gray-800/50 text-white/60 hover:bg-gray-800/60 hover:text-white/80'
            }`}
          >
            Pending
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {displayedItems.length === 0 ? (
          <p className="text-center text-white/50 py-8">
            No items match your search.
          </p>
        ) : (
          displayedItems.map(item => (
            <div
              key={item.id}
              className="flex items-start gap-4 bg-gray-800/50 border border-purple-600/30 rounded-lg p-4 hover:bg-gray-800/60 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 mt-1 flex h-5 w-5 items-center justify-center">
                <input
                  type="checkbox"
                  checked={item.completed === true}
                  onChange={() => handleToggleComplete(item.id)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className={`font-semibold text-white/90 line-clamp-1 ${item.completed === true ? 'text-purple-400' : ''}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-white/60 text-sm line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {displayedItems.length > 0 && (
        <div className="text-xs text-white/50 mt-2">
          Showing {displayedItems.length} of {filteredItems.length} items
        </div>
      )}
    </div>
  );
};

export default CategoryTab;
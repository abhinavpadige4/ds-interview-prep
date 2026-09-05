import React, { useState } from 'react';

interface CategoryItem {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
}

const CategoryTab: React.FC<{ 
  category: string; 
  items: CategoryItem[]; 
  onItemComplete: (itemId: number) => void 
}> = ({ category, items, onItemComplete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-a855f7 to-9333ea rounded-lg flex items-center justify-center text-white font-bold">
          {category.charAt(0)}
        </div>
        <h2 className="text-xl font-semibold text-white">{category}</h2>
      </div>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 15a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No items match your search</p>
      ) : (
        <div className="space-y-4">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-a855f7/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white flex items-center space-x-2">
                    {item.id}. {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  )}
                </div>
                <button
                  onClick={() => onItemComplete(item.id)}
                  className={`ml-4 px-3 py-1.5 text-sm font-medium rounded transition-all duration-200 
                    ${item.completed ? 
                      'bg-a855f7/20 text-a855f7 hover:bg-a855f7/30' : 
                      'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  disabled={item.completed}
                >
                  {item.completed ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryTab;
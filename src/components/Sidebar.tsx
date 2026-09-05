import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionClick: (section: string) => void;
  sections: Array<{ id: string; name: string; icon: string }>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeSection, onSectionClick, sections }) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full w-64 bg-gray-900/80 backdrop-blur-sm border-r border-gray-800/50 
                  transition-transform duration-300 ease-in-out z-50 
                  ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-gray-800/50">
        <button
          onClick={onToggle}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gradient hover:underline cursor-pointer" onClick={() => onSectionClick('home')}>
          DS Interview Prep
        </h1>
      </div>

      <nav className="mt-6 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`flex items-center px-4 py-3 text-left text-gray-300 hover:bg-gray-800/50 hover:text-white 
                      transition-all duration-200 rounded-lg font-medium 
                      ${activeSection === section.id ? 'bg-gradient-to-r from-purple-600/20 to-purple-600/10 text-white border-l-4 border-purple-600' : ''}`}
          >
            <span className="mr-3 h-5 w-5 flex-shrink-0">
              {/* Simple icon placeholder - in real app would use proper icons */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {section.name.charAt(0).toUpperCase()}
              </div>
            </span>
            <span>{section.name}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-800/50">
        <div className="flex items-center px-4 py-3 text-sm text-gray-400">
          <div className="h-3 w-3 bg-green-400 rounded-full mr-2"></div>
          <span>Online</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

// FILE: src/components/SearchFilter.tsx
import React, { useState } from 'react';

interface SearchFilterProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceMs?: number;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ 
  placeholder = "Search questions, topics...", 
  onSearch, 
  debounceMs = 300 
}) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Handle input change with debounce
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);

    return () => {
      clearTimeout(handler);
    };
  }, [query, debounceMs]);

  // Trigger search when debounced query changes
  React.useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Trigger immediate search on Enter
      setDebouncedQuery(query);
      onSearch(query);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg 
                  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  focus:border-purple-500 transition-all duration-200 backdrop-blur-sm"
        aria-label="Search interview questions"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0z" />
        </svg>
      </div>
      {query.length > 0 && (
        <button
          onClick={() => {
            setQuery('');
            setDebouncedQuery('');
            onSearch('');
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchFilter;
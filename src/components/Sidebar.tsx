import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionSelect: (section: string) => void;
  sections: Array<{ id: string; name: string; icon: React.ComponentType<{ className?: string }> }>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeSection, onSectionSelect, sections }) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full w-16 bg-gray-900/80 backdrop-blur-sm border-r border-gray-800/50 
                  transition-all duration-300 ease-in-out z-50 ${isOpen ? 'w-64' : ''}`}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <button
          onClick={onToggle}
          className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg className="h-6 w-6 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isOpen && (
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            DS Prep
          </h1>
        )}
      </div>

      {isOpen && (
        <nav className="mt-8 space-y-2 px-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`flex items-center space-x-3 p-3 rounded-lg text-left font-medium 
                        transition-all duration-200 ${activeSection === section.id 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-4 border-purple-500 text-white'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}
            >
              <section.icon className="h-5 w-5 flex-shrink-0" />
              <span>{section.name}</span>
            </button>
          ))}
        </nav>
      )}

      <div className="mt-auto bottom-4">
        {isOpen && (
          <div className="px-4">
            <p className="text-xs text-gray-500">Made with ❤️</p>
            <div className="flex items-center space-x-3 mt-2">
              <a href="https://github.com/ds-interview-prep" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-800/50 transition-colors">
                <svg className="h-5 w-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.295-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.23-.84 1.08-1.91 1.235-3.22.414-.84.655-1.81.655-2.92 0-2.08-.76-3.74-2.034-4.76z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-800/50 transition-colors">
                <svg className="h-5 w-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.617H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.545v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.227 24 24 23.226 24 22.271V1.729C24 .774 23.227 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
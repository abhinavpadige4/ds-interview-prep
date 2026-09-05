import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionSelect: (section: string) => void;
  sections: Array<{ id: string; name: string; icon: string }>;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onToggle, 
  activeSection, 
  onSectionSelect, 
  sections 
}) => {
  return (
    <aside 
      className={`fixed left-0 top-0 h-full w-64 bg-gray-900/80 backdrop-blur-sm border-r border-gray-800/50 
                  transition-transform duration-300 ease-in-out 
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                  z-50`}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-gray-800/50">
        <button 
          onClick={onToggle}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-white">DS Prep</h2>
      </div>
      
      <nav className="mt-6 space-y-1">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionSelect(section.id)}
            className={`flex items-center px-4 py-3 text-left text-gray-300 hover:bg-gray-800/50 
                      transition-colors duration-200 rounded-lg 
                      ${activeSection === section.id 
                        ? 'bg-gradient-to-r from-purple-600/20 to-purple-500/10 border-l-4 border-purple-500 text-white' 
                        : ''}`}
          >
            <span className="mr-3 h-5 w-5 flex-shrink-0">
              {/* Simple icon placeholder - in real app would use proper icons */}
              <div 
                className={`bg-purple-500/20 rounded-full flex items-center justify-center 
                          ${activeSection === section.id ? 'bg-purple-500' : ''}`}
              >
                {section.name.charAt(0).toUpperCase()}
              </div>
            </span>
            <span className="text-sm font-medium">{section.name}</span>
          </button>
        ))}
      </nav>
      
      <div className="mt-auto px-4 pb-4">
        <p className="text-xs text-gray-500">Made with ❤️ using React & Tailwind</p>
      </div>
    </aside>
  );
};

export default Sidebar;
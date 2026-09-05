import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/70 text-sm">
            GitHub: <a href="https://github.com/ds-interview-prep" className="text-a855f7 hover:underline">ds-interview-prep</a>
            {' | '}
            LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-a855f7 hover:underline">Your Profile</a>
          </p>
          <p className="mt-2 text-white/60 text-xs">
            Made with <span className="text-red-500">❤️</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
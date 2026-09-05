import React from 'react';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ComponentType<{ className?: string }>;
  progress?: number; // percentage 0-100
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, progress }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-a855f7 mr-3" />
        <h3 className="text-white text-lg font-medium">{title}</h3>
      </div>
      <div className="text-3xl font-bold text-white">{value}</div>
      {progress !== undefined && (
        <div className="mt-4 h-2.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-a855f7 to-9333ea transition-all duration-500 w-${progress}%`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
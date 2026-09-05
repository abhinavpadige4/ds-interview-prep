```tsx
import React, { useState, useEffect, useCallback } from 'react';

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  total: number;
  color?: string;
  delay?: number;
}

interface ProgressData {
  [key: string]: boolean;
}

const STORAGE_KEY = 'ds-interview-progress';

const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
  }, []);

  const markComplete = useCallback((id: string) => {
    setProgress((prev) => {
      const updated = { ...prev, [id]: true };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save progress to localStorage', e);
      }
      return updated;
    });
  }, []);

  const markIncomplete = useCallback((id: string) => {
    setProgress((prev) => {
      const updated = { ...prev };
      delete updated[id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save progress to localStorage', e);
      }
      return updated;
    });
  }, []);

  const isComplete = useCallback((id: string) => {
    return !!progress[id];
  }, [progress]);

  const getCompletedCount = useCallback((ids: string[]) => {
    return ids.filter((id) => progress[id]).length;
  }, [progress]);

  return { markComplete, markIncomplete, isComplete, getCompletedCount };
};

const CircularProgress: React.FC<{ percentage: number; size?: number; strokeWidth?: number; color?: string }> = ({
  percentage,
  size = 80,
  strokeWidth = 6,
  color = '#a855f7',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
};

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  icon,
  value,
  total,
  color = '#a855f7',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateValue, setAnimateValue] = useState(0);
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setAnimateValue(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      requestAnimationFrame(animate);
    }
  }, [value, isVisible]);

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl p-6 transition-all duration-700 ease-out
        bg-white/[0.05] backdrop-blur-xl border border-white/[0.08]
        hover:border-purple-500/30 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-purple-500/10
        transform hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 1s ease-out',
          transitionDelay: `${delay + 300}ms`,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 flex items-center justify-between">
        {/* Left side: Icon and info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${color}22, ${color}11)`,
                border: `1px solid ${color}33`,
              }}
            >
              {icon}
            </div>
            <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">
              {title}
            </h3>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-white">{animateValue}</span>
            <span className="text-lg text-white/40">/ {total}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${percentage}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}88)`,
                  transitionDelay: `${delay + 200}ms`,
                }}
              />
            </div>
            <span className="text-xs font-medium text-white/50 min-w-[3rem] text-right">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Right side: Circular progress */}
        <div className="relative ml-4">
          <CircularProgress percentage={percentage} size={80} strokeWidth={6} color={color} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-white">{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Dashboard component that aggregates all category stats
const StatsDashboard: React.FC<{
  categories: {
    name: string;
    icon: React.ReactNode;
    total: number;
    color: string;
    ids: string[];
  }[];
}> = ({ categories }) => {
  const { getCompletedCount } = useProgress();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.total, 0);
  const totalCompleted = categories.reduce(
    (sum, cat) => sum + getCompletedCount(cat.ids),
    0
  );
  const overallPercentage =
    totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {/* Overall Progress Card */}
      <div className="mb-8">
        <div
          className="
            relative overflow-hidden rounded-2xl p-8
            bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-transparent
            backdrop-blur-xl border border-purple-500/20
        "
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-10"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
            {/* Large circular progress */}
            <div className="relative">
              <CircularProgress
                percentage={overallPercentage}
                size={120}
                strokeWidth={8}
                color="#a855f7"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">{overallPercentage}%</span>
                <span className="text-xs text-white/50">Complete</span>
              </div>
            </div>

            {/* Stats summary */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                Overall Progress
              </h2>
              <p className="text-white/60 mb-4">
                You've completed {totalCompleted} out of {totalQuestions} questions
              </p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm text-white/70">
                    {totalCompleted} Completed
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-sm text-white/70">
                    {totalQuestions - totalCompleted} Remaining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <StatsCard
            key={category.name}
            title={category.name}
            icon={category.icon}
            value={getCompletedCount(category.ids)}
            total={category.total}
            color={category.color}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export { StatsCard, StatsDashboard, useProgress };
export default StatsCard;

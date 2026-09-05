import { ProgressData } from '../types';

const STORAGE_KEY = 'ds-interview-prep-progress';

export const loadProgress = (): ProgressData => {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved) as ProgressData;
    } catch (e) {
      console.warn('Failed to parse progress data, using defaults');
      return getDefaultProgress();
    }
  }
  return getDefaultProgress();
};

export const saveProgress = (progress: ProgressData): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
};

export const updateProgress = (
  category: keyof ProgressData,
  increment: number = 1
): ProgressData => {
  const current = loadProgress();
  const updated = {
    ...current,
    [category]: Math.min(
      current[category] + increment,
      getCategoryTotal(category)
    ),
  };
  saveProgress(updated);
  return updated;
};

export const resetProgress = (): ProgressData => {
  const defaultProgress = getDefaultProgress();
  saveProgress(defaultProgress);
  return defaultProgress;
};

const getDefaultProgress = (): ProgressData => ({
  python: 0,
  statistics: 0,
  ml: 0,
  sql: 0,
  systemDesign: 0,
  behavioral: 0,
});

const getCategoryTotal = (category: keyof ProgressData): number => {
  switch (category) {
    case 'python': return 10;
    case 'statistics': return 8; // Assuming 8 topics
    case 'ml': return 20;
    case 'sql': return 15;
    case 'systemDesign': return 6; // Assuming 6 topics
    case 'behavioral': return 10; // Assuming 10 questions
    default: return 0;
  }
};
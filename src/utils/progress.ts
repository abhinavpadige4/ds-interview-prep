import { ProgressData } from '../types';

const STORAGE_KEY = 'ds-interview-prep-progress';

export const saveProgress = (progress: ProgressData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export const loadProgress = (): ProgressData => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load progress:', error);
    return {};
  }
};

export const updateProgress = (
  category: string,
  completed: number,
  total: number
): ProgressData => {
  const currentProgress = loadProgress();
  const updated = {
    ...currentProgress,
    [category]: { completed, total }
  };
  saveProgress(updated);
  return updated;
};

export const getProgressPercentage = (category: string): number => {
  const progress = loadProgress()[category];
  if (!progress || progress.total === 0) return 0;
  return Math.round((progress.completed / progress.total) * 100);
};

export const resetProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to reset progress:', error);
  }
};
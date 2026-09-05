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
      console.warn('Failed to parse progress data, resetting to default');
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

export const updateProgress = (category: keyof ProgressData, completed: boolean): ProgressData => {
  const current = loadProgress();
  const updated = { ...current };
  
  if (completed) {
    updated[category] = Math.min(100, updated[category] + 10);
  } else {
    updated[category] = Math.max(0, updated[category] - 10);
  }
  
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
  behavioral: 0
});
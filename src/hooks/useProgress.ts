```typescript
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'ds-interview-progress';

export function useProgress() {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCompletedIds(new Set(JSON.parse(stored)));
      }
    } catch (e) {
      console.error('Failed to load progress:', e);
    }
  }, []);

  const toggleComplete = useCallback((id: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      return next;
    });
  }, []);

  const isCompleted = useCallback((id: string) => completedIds.has(id), [completedIds]);
  const getProgress = useCallback((category: string) => {
    const categoryQuestions = questions.filter(q => q.category === category);
    if (categoryQuestions.length === 0) return 0;
    const completed = categoryQuestions.filter(q => completedIds.has(q.id)).length;
    return Math.round((completed / categoryQuestions.length) * 100);
  }, [completedIds]);

  return { completedIds, toggleComplete, isCompleted, getProgress };
}

// Import questions for type checking
import { questions } from '../data/questions';

```typescript
export interface PythonChallenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  solution: string;
  explanation: string;
  tags: string[];
}

export interface StatisticsTopic {
  id: string;
  title: string;
  category: string;
  content: string;
  formula?: string;
  example?: string;
  tags: string[];
}

export interface MLQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export interface SQLQuery {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  query: string;
  explanation: string;
  tags: string[];
}

export interface SystemDesignTopic {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  tags: string[];
}

export interface BehavioralQuestion {
  id: string;
  question: string;
  starBreakdown: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  tips: string[];
  tags: string[];
}

export type CategoryType =
  | 'python'
  | 'statistics'
  | 'ml'
  | 'sql'
  | 'system-design'
  | 'behavioral';

export interface ProgressState {
  [key: string]: boolean;
}

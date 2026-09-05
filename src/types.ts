export interface ProgressData {
  [category: string]: {
    completed: number;
    total: number;
  };
}

export interface PythonChallenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  code: string;
  solution: string;
  hints: string[];
}

export interface StatsConcept {
  id: number;
  title: string;
  formula: string;
  explanation: string;
  example: string;
}

export interface MLQuestion {
  id: number;
  question: string;
  answer: string;
  category: 'Regression' | 'Classification' | 'Clustering' | 'Neural Networks';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface SQLQuery {
  id: number;
  title: string;
  description: string;
  query: string;
  expectedOutput: string;
  schema: string;
  tags: ('Joins' | 'Window Functions' | 'CTEs')[];
}

export interface SystemDesignPrompt {
  id: number;
  scenario: string;
  considerations: string[];
  bestPractices: string[];
}

export interface BehavioralQuestion {
  id: number;
  question: string;
  starGuide: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  tips: string[];
}

export interface CategoryTab {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface SearchFilterProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface ProgressTrackerProps {
  category: string;
  progress: number;
  total: number;
}
export interface ProgressData {
  python: number;
  statistics: number;
  ml: number;
  sql: number;
  systemDesign: number;
  behavioral: number;
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

export interface StatisticsTopic {
  id: number;
  title: string;
  content: string;
  formulas: string[];
  examples: string[];
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
  explanation: string;
  tags: ('Joins' | 'Window Functions' | 'CTEs')[];
}

export interface SystemDesignTopic {
  id: number;
  title: string;
  description: string;
  keyComponents: string[];
  considerations: string[];
}

export interface BehavioralQuestion {
  id: number;
  question: string;
  starMethod: {
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
  progress: number;
}
export type TopicId = 'les1' | 'les2' | 'les3' | 'les4' | 'les5';

export interface TopicMeta {
  id: TopicId;
  title: string;
  shortTitle: string;
  subtitle: string;
  sourcePptx: string;
}

export interface ExamQuestion {
  id: string;
  number: number;
  topic: TopicId;
  question: string;
  /** Strikt 3 antwoordopties (meerkeuze A/B/C conform tentamenformat) */
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explanation: string;
  source: string;
}

export interface ExamSet {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  questions: ExamQuestion[];
}

export type ExamMode = 'practice' | 'exam';

export interface SavedAttempt {
  id: string;
  examId: string;
  examTitle: string;
  dateIso: string;
  answered: number;
  total: number;
  correct: number;
  percentage: number;
  grade: string;
  topicFilter: TopicId | 'all';
  questionIds: string[];
  selectedAnswers: Record<string, number>;
}

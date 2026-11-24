import type { ExamQuestion, SavedAttempt, TopicId } from '../types/exam';
import { TOPIC_ORDER } from '../data/topics';

const STORAGE_KEY = 'bbp-proeftoets-attempts-v2';

export function shuffleArray<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function buildOptionOrder(shuffle: boolean): [number, number, number] {
  const base: [number, number, number] = [0, 1, 2];
  if (!shuffle) return base;
  const shuffled = shuffleArray(base);
  return [shuffled[0], shuffled[1], shuffled[2]];
}

export function calculateIndicativeGrade(
  correct: number,
  total: number
): { percentage: number; grade: string; passed: boolean } {
  if (total <= 0) {
    return { percentage: 0, grade: '1,0', passed: false };
  }
  const percentage = Math.round((correct / total) * 100);
  // Gokkanscorrectie voor 3-keuzevragen (gokkans = 1/3 ≈ 33,3%, voldoende bij ~67%)
  const raw = (correct / total - 1 / 3) / (2 / 3);
  const gradeNum = Math.max(1, Math.min(10, 1 + Math.max(0, raw) * 9));
  return {
    percentage,
    grade: gradeNum.toFixed(1).replace('.', ','),
    passed: gradeNum >= 5.5,
  };
}

export interface TopicBreakdown {
  topic: TopicId;
  total: number;
  answered: number;
  correct: number;
  wrong: number;
  percentage: number;
}

export function computeTopicBreakdown(
  questions: ExamQuestion[],
  selectedAnswers: Record<string, number>
): TopicBreakdown[] {
  return TOPIC_ORDER.map((topic) => {
    const topicQuestions = questions.filter((q) => q.topic === topic);
    const total = topicQuestions.length;
    let answered = 0;
    let correct = 0;
    let wrong = 0;

    for (const q of topicQuestions) {
      const picked = selectedAnswers[q.id];
      if (picked === undefined) continue;
      answered++;
      if (picked === q.correctIndex) {
        correct++;
      } else {
        wrong++;
      }
    }

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { topic, total, answered, correct, wrong, percentage };
  }).filter((row) => row.total > 0);
}

function isValidSavedAttempt(item: unknown): item is SavedAttempt {
  if (!item || typeof item !== 'object') return false;
  const a = item as Partial<SavedAttempt>;
  return (
    typeof a.id === 'string' &&
    typeof a.examId === 'string' &&
    typeof a.examTitle === 'string' &&
    typeof a.dateIso === 'string' &&
    typeof a.correct === 'number' &&
    typeof a.total === 'number' &&
    typeof a.percentage === 'number' &&
    Array.isArray(a.questionIds) &&
    a.selectedAnswers !== null &&
    typeof a.selectedAnswers === 'object'
  );
}

export function loadSavedAttempts(): SavedAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidSavedAttempt);
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: SavedAttempt): SavedAttempt[] {
  const existing = loadSavedAttempts();
  const next = [attempt, ...existing].slice(0, 25);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Negeer opslagfouten (bijv. privémodus)
  }
  return next;
}

export function formatAttemptLabel(attempt: SavedAttempt): string {
  let timePart = '';
  try {
    const d = new Date(attempt.dateIso);
    if (!Number.isNaN(d.getTime())) {
      const now = new Date();
      const sameDay =
        d.getFullYear() === now.getFullYear() &&
        d.getMonth() === now.getMonth() &&
        d.getDate() === now.getDate();
      timePart = sameDay
        ? d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })
        : d.toLocaleDateString('nl-NL', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
          });
    }
  } catch {
    timePart = '';
  }
  const base = `${attempt.examTitle} · ${attempt.correct}/${attempt.total} (${attempt.percentage}%)`;
  return timePart ? `${base} · ${timePart}` : base;
}

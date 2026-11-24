import { RotateCcw } from 'lucide-react';
import { TOPICS, TOPIC_ORDER } from '../data/topics';
import type { ExamMode, ExamQuestion, ExamSet, TopicId } from '../types/exam';

interface ExamToolbarProps {
  exams: ExamSet[];
  activeExamId: string;
  onSelectExam: (examId: string) => void;
  allQuestions: ExamQuestion[];
  topicFilter: TopicId | 'all';
  onChangeTopic: (topic: TopicId | 'all') => void;
  mode: ExamMode;
  onChangeMode: (mode: ExamMode) => void;
  answeredCount: number;
  totalActive: number;
  correctCount: number;
  wrongCount: number;
  isFinished: boolean;
  hasSavedAttempts?: boolean;
  isViewingHistory?: boolean;
  onOpenHistory?: () => void;
  onFinish: () => void;
  onRestart: () => void;
  progressPercent: number;
}

export function ExamToolbar({
  exams,
  activeExamId,
  onSelectExam,
  allQuestions,
  topicFilter,
  onChangeTopic,
  mode,
  onChangeMode,
  answeredCount,
  totalActive,
  correctCount,
  wrongCount,
  isFinished,
  hasSavedAttempts = false,
  isViewingHistory = false,
  onOpenHistory,
  onFinish,
  onRestart,
  progressPercent,
}: ExamToolbarProps) {
  return (
    <header className="space-y-3">
      {/* Regel 1: Titel + (alleen bij meerdere toetsen) compacte toetskiezer */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-base font-bold text-clinical-950 tracking-tight">
          Basale Beïnvloedingsprincipes
        </h1>

        {exams.length > 1 && (
          <select
            value={activeExamId}
            onChange={(e) => onSelectExam(e.target.value)}
            aria-label="Kies proeftoets"
            className="min-w-0 max-w-full px-2.5 py-1.5 rounded-lg border border-clinical-200 bg-white text-[16px] sm:text-xs font-medium text-clinical-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {exams.map((exam) => (
              <option key={exam.id} value={exam.id}>
                {exam.shortTitle} ({exam.questions.length})
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Regel 2: Onderdeel, modus, subtiele teller + uitslagen/uitslag/opnieuw */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1 sm:flex-none">
          <select
            value={topicFilter}
            onChange={(e) => onChangeTopic(e.target.value as TopicId | 'all')}
            aria-label="Kies onderdeel"
            className="min-w-0 max-w-full flex-1 sm:flex-none min-h-[38px] sm:min-h-[32px] px-2.5 py-1.5 rounded-lg border border-clinical-200 bg-white text-[16px] sm:text-xs font-medium text-clinical-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">
              Alle onderdelen ({allQuestions.length})
            </option>
            {TOPIC_ORDER.map((topicId) => {
              const count = allQuestions.filter((q) => q.topic === topicId).length;
              if (count === 0) return null;
              return (
                <option key={topicId} value={topicId}>
                  {TOPICS[topicId].shortTitle} ({count})
                </option>
              );
            })}
          </select>

          <div
            role="group"
            aria-label="Toetsmodus"
            className="flex items-center bg-clinical-100 p-0.5 rounded-lg border border-clinical-200 text-xs font-medium shrink-0"
          >
            {(
              [
                { id: 'practice', label: 'Oefenen' },
                { id: 'exam', label: 'Toets' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChangeMode(opt.id)}
                className={`min-h-[34px] sm:min-h-[28px] px-2.5 py-1 rounded-md transition ${
                  mode === opt.id
                    ? 'bg-white text-clinical-950 shadow-2xs font-semibold'
                    : 'text-clinical-600 hover:text-clinical-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {mode === 'practice' && answeredCount > 0 && !isViewingHistory && (
            <span className="text-xs text-clinical-600 font-medium tabular-nums">
              <span className="text-emerald-700">{correctCount} goed</span>
              {' · '}
              <span className="text-rose-600">{wrongCount} fout</span>
            </span>
          )}

          {hasSavedAttempts && !isFinished && !isViewingHistory && onOpenHistory && (
            <button
              type="button"
              onClick={onOpenHistory}
              className="min-h-[38px] sm:min-h-[32px] px-2.5 py-1 rounded-lg border border-clinical-200 bg-white hover:bg-clinical-100 text-clinical-700 text-xs font-medium transition"
            >
              Uitslagen
            </button>
          )}

          {!isFinished && !isViewingHistory && answeredCount > 0 && (
            <button
              type="button"
              onClick={onFinish}
              className="min-h-[38px] sm:min-h-[32px] px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition"
            >
              Uitslag
            </button>
          )}

          <button
            type="button"
            onClick={onRestart}
            className="min-h-[38px] min-w-[38px] sm:min-h-[32px] sm:min-w-[32px] flex items-center justify-center rounded-lg border border-clinical-200 bg-white hover:bg-clinical-100 text-clinical-600 transition"
            title="Opnieuw beginnen (gehusseld)"
            aria-label="Opnieuw beginnen"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Dunne voortgangsbalk */}
      {!isFinished && !isViewingHistory && totalActive > 0 && (
        <div
          className="w-full h-1 bg-clinical-200 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </header>
  );
}

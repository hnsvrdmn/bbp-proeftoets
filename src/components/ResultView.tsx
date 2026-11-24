import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOPICS } from '../data/topics';
import type { ExamQuestion, SavedAttempt, TopicId } from '../types/exam';
import {
  calculateIndicativeGrade,
  computeTopicBreakdown,
  formatAttemptLabel,
} from '../utils/examHelpers';

interface ResultViewProps {
  questions: ExamQuestion[];
  selectedAnswers: Record<string, number>;
  savedAttempts?: SavedAttempt[];
  activeAttemptId?: string | null;
  onSelectAttempt?: (attemptId: string) => void;
  onBackToQuiz?: () => void;
  onRetryWrong: (wrongIds: string[], attemptQuestions?: ExamQuestion[]) => void;
  onPracticeTopic: (topic: TopicId) => void;
  onRestart: () => void;
}

type ReviewFilter = 'wrong' | 'all';

export function ResultView({
  questions,
  selectedAnswers,
  savedAttempts = [],
  activeAttemptId = null,
  onSelectAttempt,
  onBackToQuiz,
  onRetryWrong,
  onPracticeTopic,
  onRestart,
}: ResultViewProps) {
  const total = questions.length;
  let correct = 0;
  const wrongIds: string[] = [];

  for (const q of questions) {
    const picked = selectedAnswers[q.id];
    if (picked !== undefined && picked === q.correctIndex) {
      correct++;
    } else {
      wrongIds.push(q.id);
    }
  }

  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>(
    wrongIds.length > 0 ? 'wrong' : 'all'
  );

  const { percentage, grade, passed } = calculateIndicativeGrade(correct, total);
  const breakdown = computeTopicBreakdown(questions, selectedAnswers);

  const filteredReview = questions.filter((q) => {
    if (reviewFilter === 'all') return true;
    const picked = selectedAnswers[q.id];
    return picked === undefined || picked !== q.correctIndex;
  });

  const showHistoryBar = Boolean(onBackToQuiz) || savedAttempts.length > 1;

  return (
    <div className="space-y-5">
      {/* Uitslag + onderdelenlijst */}
      <section className="bg-white rounded-2xl border border-clinical-200/90 shadow-xs p-5 sm:p-6 space-y-5">
        {showHistoryBar && (
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-clinical-100">
            {onBackToQuiz ? (
              <button
                type="button"
                onClick={onBackToQuiz}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 py-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Terug naar toets</span>
              </button>
            ) : (
              <span className="text-xs font-medium text-clinical-500">
                Opgeslagen uitslag
              </span>
            )}

            {savedAttempts.length > 1 && onSelectAttempt && (
              <select
                value={activeAttemptId ?? savedAttempts[0]?.id ?? ''}
                onChange={(e) => onSelectAttempt(e.target.value)}
                aria-label="Kies opgeslagen uitslag"
                className="min-w-0 max-w-full px-2.5 py-1.5 rounded-lg border border-clinical-200 bg-clinical-50 text-[16px] sm:text-xs font-medium text-clinical-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto"
              >
                {savedAttempts.map((att) => (
                  <option key={att.id} value={att.id}>
                    {formatAttemptLabel(att)}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-clinical-100">
          <div className="text-lg font-bold text-clinical-950 tabular-nums">
            {correct} / {total} goed{' '}
            <span className="text-clinical-500 font-medium text-sm">
              ({percentage}%)
            </span>
          </div>
          <span
            title="3-keuze met gokkanscorrectie (voldoende vanaf 67% / cijfer 5,5)"
            className={`text-sm font-bold tabular-nums ${
              passed ? 'text-emerald-700' : 'text-rose-600'
            }`}
          >
            Cijfer {grade}
          </span>
        </div>

        {/* Resultaat per onderdeel: compacte klikbare lijst */}
        <div className="divide-y divide-clinical-100">
          {breakdown.map((row) => {
            const meta = TOPICS[row.topic];
            const barColor =
              row.percentage >= 75
                ? 'bg-emerald-500'
                : row.percentage >= 50
                  ? 'bg-amber-500'
                  : 'bg-rose-500';
            const textColor =
              row.percentage >= 75
                ? 'text-emerald-700'
                : row.percentage >= 50
                  ? 'text-amber-700'
                  : 'text-rose-600';

            return (
              <button
                key={row.topic}
                type="button"
                onClick={() => onPracticeTopic(row.topic)}
                className="w-full py-3 sm:py-2.5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 text-left hover:bg-clinical-50/80 px-1.5 -mx-1.5 rounded-lg transition group"
                title={`Oefen alleen ${meta.shortTitle}`}
              >
                <div className="flex items-center justify-between gap-2 sm:min-w-0">
                  <span className="text-xs sm:text-sm font-medium text-clinical-800">
                    {meta.shortTitle}
                  </span>
                  <span
                    className={`sm:hidden text-xs font-semibold tabular-nums shrink-0 ${textColor}`}
                  >
                    {row.correct}/{row.total} ({row.percentage}%)
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex-1 sm:flex-none sm:w-24 h-1.5 bg-clinical-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor}`}
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span
                    className={`hidden sm:inline text-xs font-semibold tabular-nums w-20 text-right ${textColor}`}
                  >
                    {row.correct}/{row.total} ({row.percentage}%)
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-clinical-400 group-hover:text-clinical-700 transition shrink-0" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Maximaal 2 actieknoppen */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 pt-1">
          {wrongIds.length > 0 && (
            <button
              type="button"
              onClick={() => onRetryWrong(wrongIds, questions)}
              className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold text-center transition"
            >
              Foute vragen oefenen ({wrongIds.length})
            </button>
          )}
          <button
            type="button"
            onClick={onRestart}
            className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-lg border border-clinical-200 bg-white hover:bg-clinical-100 text-clinical-800 text-xs font-semibold text-center transition"
          >
            Opnieuw beginnen
          </button>
        </div>
      </section>

      {/* Nabespreking */}
      <section className="bg-white rounded-2xl border border-clinical-200/90 shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-bold text-clinical-950">Nabespreking</h2>

          <div className="flex items-center bg-clinical-100 p-0.5 rounded-lg border border-clinical-200 text-xs font-medium">
            {(
              [
                { id: 'wrong', label: `Fout (${wrongIds.length})` },
                { id: 'all', label: `Alle (${total})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setReviewFilter(tab.id)}
                className={`px-2.5 py-1 rounded-md transition ${
                  reviewFilter === tab.id
                    ? 'bg-white text-clinical-950 shadow-2xs font-semibold'
                    : 'text-clinical-600 hover:text-clinical-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {filteredReview.length === 0 ? (
          <p className="text-xs text-clinical-500 py-4 text-center">
            Geen foute vragen om te bekijken.
          </p>
        ) : (
          <div className="divide-y divide-clinical-100">
            {filteredReview.map((q) => {
              const picked = selectedAnswers[q.id];
              const isAnswered = picked !== undefined;
              const isRight = isAnswered && picked === q.correctIndex;

              return (
                <div key={q.id} className="py-4 first:pt-1 last:pb-1 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="text-clinical-500 font-medium">
                      Vraag {q.number} · {TOPICS[q.topic].shortTitle}
                    </span>
                    <span
                      className={`font-semibold ${
                        isRight ? 'text-emerald-700' : 'text-rose-600'
                      }`}
                    >
                      {isRight ? 'Goed' : isAnswered ? 'Fout' : 'Overgeslagen'}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-clinical-950 leading-snug">
                    {q.question}
                  </p>

                  <div className="space-y-1.5 text-xs">
                    {!isRight && isAnswered && (
                      <div className="px-3 py-2 rounded-lg bg-rose-50/80 border border-rose-200 text-rose-950">
                        <span className="font-semibold">Jouw keuze: </span>
                        {q.options[picked]}
                      </div>
                    )}
                    <div className="px-3 py-2 rounded-lg bg-emerald-50/80 border border-emerald-200 text-emerald-950">
                      <span className="font-semibold">Juist: </span>
                      {q.options[q.correctIndex]}
                    </div>
                  </div>

                  <p className="text-xs text-clinical-700 leading-relaxed">
                    {q.explanation}
                  </p>
                  <p className="text-[11px] text-clinical-400">{q.source}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

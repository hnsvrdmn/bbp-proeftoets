import { useEffect } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  XCircle,
} from 'lucide-react';
import { TOPICS } from '../data/topics';
import type { ExamMode, ExamQuestion } from '../types/exam';

interface QuestionCardProps {
  questions: ExamQuestion[];
  currentIndex: number;
  optionOrder: [number, number, number];
  selectedAnswers: Record<string, number>;
  mode: ExamMode;
  onSelectOption: (questionId: string, originalOptionIndex: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
}

const LETTERS = ['A', 'B', 'C'] as const;

export function QuestionCard({
  questions,
  currentIndex,
  optionOrder,
  selectedAnswers,
  mode,
  onSelectOption,
  onPrev,
  onNext,
  onFinish,
}: QuestionCardProps) {
  const question = questions[currentIndex];
  const pickedOriginalIndex = question ? selectedAnswers[question.id] : undefined;
  const isAnswered = pickedOriginalIndex !== undefined;
  const isLast = currentIndex === questions.length - 1;
  const isCorrect = isAnswered && pickedOriginalIndex === question.correctIndex;

  useEffect(() => {
    if (!question) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      const key = e.key.toLowerCase();
      if (key === 'a' || key === '1') {
        if (mode === 'practice' && isAnswered) return;
        onSelectOption(question.id, optionOrder[0]);
      } else if (key === 'b' || key === '2') {
        if (mode === 'practice' && isAnswered) return;
        onSelectOption(question.id, optionOrder[1]);
      } else if (key === 'c' || key === '3') {
        if (mode === 'practice' && isAnswered) return;
        onSelectOption(question.id, optionOrder[2]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onPrev();
      } else if (e.key === 'ArrowRight' || (e.key === 'Enter' && isAnswered)) {
        if (isLast) {
          if (isAnswered) onFinish();
        } else {
          onNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    question,
    optionOrder,
    mode,
    isAnswered,
    currentIndex,
    isLast,
    onSelectOption,
    onPrev,
    onNext,
    onFinish,
  ]);

  if (!question) return null;

  const topicMeta = TOPICS[question.topic];

  return (
    <section className="bg-white rounded-2xl border border-clinical-200/90 shadow-xs p-4 sm:p-6 space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-clinical-500 font-medium">
          Vraag {currentIndex + 1} / {questions.length} · {topicMeta.shortTitle}
        </span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={onPrev}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-clinical-500 disabled:opacity-30 hover:bg-clinical-100 transition"
            title="Vorige vraag"
            aria-label="Vorige vraag"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={isLast}
            onClick={onNext}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-clinical-500 disabled:opacity-30 hover:bg-clinical-100 transition"
            title="Volgende vraag"
            aria-label="Volgende vraag"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <h2 className="text-base sm:text-[17px] font-bold text-clinical-950 leading-snug">
        {question.question}
      </h2>

      {/* 3 Meerkeuze-opties */}
      <div className="space-y-2.5">
        {optionOrder.map((origIdx, displayIdx) => {
          const optionText = question.options[origIdx];
          const isPicked = pickedOriginalIndex === origIdx;
          const isRightOption = origIdx === question.correctIndex;
          const showFeedback = mode === 'practice' && isAnswered;

          let btnStyle =
            'border-clinical-200 bg-clinical-50/50 hover:bg-blue-50/70 hover:border-blue-300 text-clinical-800';

          if (showFeedback) {
            if (isRightOption) {
              btnStyle =
                'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
            } else if (isPicked && !isRightOption) {
              btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
            } else {
              btnStyle = 'border-clinical-200/70 bg-white text-clinical-400';
            }
          } else if (isPicked) {
            btnStyle =
              'border-blue-500 bg-blue-50/80 text-blue-950 font-medium';
          }

          return (
            <button
              key={`${question.id}-opt-${origIdx}`}
              type="button"
              disabled={showFeedback}
              onClick={() => onSelectOption(question.id, origIdx)}
              className={`w-full min-h-[52px] text-left p-3.5 sm:p-4 rounded-xl border text-sm transition active:scale-[0.99] flex items-center justify-between gap-3 ${btnStyle}`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <span
                  className={`w-6 h-6 rounded-md border text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 ${
                    showFeedback && isRightOption
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : showFeedback && isPicked && !isRightOption
                        ? 'bg-rose-600 text-white border-rose-600'
                        : isPicked && !showFeedback
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white border-clinical-300 text-clinical-600'
                  }`}
                >
                  {LETTERS[displayIdx]}
                </span>
                <span className="leading-relaxed">{optionText}</span>
              </div>

              {showFeedback && isRightOption && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              )}
              {showFeedback && isPicked && !isRightOption && (
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Compacte feedback in Oefenmodus */}
      {mode === 'practice' && isAnswered && (
        <div
          className={`p-4 rounded-xl border space-y-2 ${
            isCorrect
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
              : 'bg-rose-50/70 border-rose-200 text-rose-950'
          }`}
        >
          <p className="text-xs font-bold">
            {isCorrect ? 'Goed' : 'Niet juist'}
          </p>
          <p className="text-xs leading-relaxed opacity-90">{question.explanation}</p>
          <p className="text-[11px] text-clinical-500">{question.source}</p>
          <div className="pt-1">
            <button
              type="button"
              onClick={isLast ? onFinish : onNext}
              className="w-full sm:w-auto px-4 py-3 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-xs font-semibold transition"
            >
              {isLast ? 'Bekijk uitslag' : 'Volgende'}
            </button>
          </div>
        </div>
      )}

      {/* Navigatie in Toetsmodus */}
      {mode === 'exam' && (
        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={isLast ? onFinish : onNext}
            className="w-full sm:w-auto px-4 py-3 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-xs font-semibold transition"
          >
            {isLast ? 'Inleveren' : 'Volgende'}
          </button>
        </div>
      )}
    </section>
  );
}

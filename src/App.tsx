import { useCallback, useMemo, useState } from 'react';
import { ExamToolbar } from './components/ExamToolbar';
import { QuestionCard } from './components/QuestionCard';
import { ResultView } from './components/ResultView';
import { EXAM_SETS, getExamById } from './data/exams';
import type { ExamMode, ExamQuestion, SavedAttempt, TopicId } from './types/exam';
import {
  buildOptionOrder,
  calculateIndicativeGrade,
  loadSavedAttempts,
  saveAttempt,
  shuffleArray,
} from './utils/examHelpers';

function createOptionOrders(
  questions: ExamQuestion[],
  shuffleOptions: boolean
): Record<string, [number, number, number]> {
  const map: Record<string, [number, number, number]> = {};
  for (const q of questions) {
    map[q.id] = buildOptionOrder(shuffleOptions);
  }
  return map;
}

export function App() {
  const [activeExamId, setActiveExamId] = useState<string>(
    () => EXAM_SETS.find((e) => e.id === 'proeftoets-4')?.id ?? EXAM_SETS[0].id
  );
  const activeExam = useMemo(() => getExamById(activeExamId), [activeExamId]);

  const allQuestionsById = useMemo(() => {
    const map = new Map<string, ExamQuestion>();
    for (const exam of EXAM_SETS) {
      for (const q of exam.questions) {
        if (!map.has(q.id)) map.set(q.id, q);
      }
    }
    return map;
  }, []);

  const [topicFilter, setTopicFilter] = useState<TopicId | 'all'>('all');
  const [mode, setMode] = useState<ExamMode>('practice');
  const [activeQuestions, setActiveQuestions] = useState<ExamQuestion[]>(
    () => activeExam.questions
  );
  const [optionOrders, setOptionOrders] = useState<
    Record<string, [number, number, number]>
  >(() => createOptionOrders(activeExam.questions, false));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [savedAttempts, setSavedAttempts] = useState<SavedAttempt[]>(() =>
    loadSavedAttempts()
  );
  const [viewingAttemptId, setViewingAttemptId] = useState<string | null>(null);

  const startSession = useCallback(
    (
      examId: string,
      topic: TopicId | 'all',
      shuffle: boolean,
      subsetQuestions?: ExamQuestion[]
    ) => {
      const exam = getExamById(examId);
      const base =
        subsetQuestions && subsetQuestions.length > 0
          ? subsetQuestions
          : topic === 'all'
            ? exam.questions
            : exam.questions.filter((q) => q.topic === topic);

      const nextQuestions = shuffle ? shuffleArray(base) : [...base];
      setActiveQuestions(nextQuestions);
      setOptionOrders(createOptionOrders(nextQuestions, shuffle));
      setSelectedAnswers({});
      setCurrentIndex(0);
      setIsFinished(false);
      setViewingAttemptId(null);
    },
    []
  );

  const handleSelectExam = (examId: string) => {
    setActiveExamId(examId);
    setTopicFilter('all');
    startSession(examId, 'all', false);
  };

  const handleChangeTopic = (topic: TopicId | 'all') => {
    setTopicFilter(topic);
    startSession(activeExamId, topic, false);
  };

  const handleChangeMode = (nextMode: ExamMode) => {
    if (nextMode === mode) return;
    setMode(nextMode);
    startSession(activeExamId, topicFilter, false);
  };

  const handleSelectOption = (questionId: string, originalOptionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: originalOptionIndex,
    }));
  };

  const handleFinish = () => {
    const total = activeQuestions.length;
    let answered = 0;
    let correct = 0;
    for (const q of activeQuestions) {
      const picked = selectedAnswers[q.id];
      if (picked !== undefined) {
        answered++;
        if (picked === q.correctIndex) correct++;
      }
    }
    const { percentage, grade } = calculateIndicativeGrade(correct, total);
    if (answered > 0) {
      const attempt: SavedAttempt = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        examId: activeExamId,
        examTitle: activeExam.shortTitle,
        dateIso: new Date().toISOString(),
        answered,
        total,
        correct,
        percentage,
        grade,
        topicFilter,
        questionIds: activeQuestions.map((q) => q.id),
        selectedAnswers: { ...selectedAnswers },
      };
      const nextAttempts = saveAttempt(attempt);
      setSavedAttempts(nextAttempts);
      setViewingAttemptId(attempt.id);
    } else {
      setViewingAttemptId(null);
    }
    setIsFinished(true);
  };

  const handlePracticeTopicFromResult = (topic: TopicId) => {
    const targetExam = viewingAttempt
      ? getExamById(viewingAttempt.examId)
      : activeExam;
    if (targetExam.id !== activeExamId) {
      setActiveExamId(targetExam.id);
    }
    setTopicFilter(topic);
    startSession(targetExam.id, topic, true);
  };

  const handleRetryWrong = (
    wrongIds: string[],
    attemptQuestions?: ExamQuestion[]
  ) => {
    const pool = attemptQuestions ?? activeQuestions;
    const wrongSet = new Set(wrongIds);
    const subset = pool.filter((q) => wrongSet.has(q.id));
    startSession(activeExamId, topicFilter, true, subset);
  };

  const viewingAttempt = useMemo(() => {
    if (!viewingAttemptId) return null;
    return savedAttempts.find((a) => a.id === viewingAttemptId) ?? null;
  }, [viewingAttemptId, savedAttempts]);

  const isViewingHistory = !isFinished && viewingAttempt !== null;
  const showResultScreen = isFinished || isViewingHistory;

  const resultQuestions = useMemo(() => {
    if (viewingAttempt) {
      const resolved = viewingAttempt.questionIds
        .map((id) => allQuestionsById.get(id))
        .filter((q): q is ExamQuestion => Boolean(q));
      if (resolved.length > 0) return resolved;
    }
    return activeQuestions;
  }, [viewingAttempt, allQuestionsById, activeQuestions]);

  const resultSelectedAnswers = viewingAttempt
    ? viewingAttempt.selectedAnswers
    : selectedAnswers;

  const answeredCount = activeQuestions.reduce(
    (acc, q) => (selectedAnswers[q.id] !== undefined ? acc + 1 : acc),
    0
  );
  const correctCount = activeQuestions.reduce(
    (acc, q) =>
      selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc,
    0
  );
  const wrongCount = answeredCount - correctCount;
  const progressPercent =
    activeQuestions.length > 0
      ? Math.min(100, Math.round((answeredCount / activeQuestions.length) * 100))
      : 0;

  const currentQuestion = activeQuestions[currentIndex];
  const currentOptionOrder = currentQuestion
    ? optionOrders[currentQuestion.id] ?? [0, 1, 2]
    : ([0, 1, 2] as [number, number, number]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-clinical-50 text-clinical-900 overflow-x-hidden">
      <main className="max-w-2xl mx-auto px-3.5 sm:px-4 py-4 sm:py-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-4 sm:space-y-5">
        <ExamToolbar
          exams={EXAM_SETS}
          activeExamId={activeExamId}
          onSelectExam={handleSelectExam}
          allQuestions={activeExam.questions}
          topicFilter={topicFilter}
          onChangeTopic={handleChangeTopic}
          mode={mode}
          onChangeMode={handleChangeMode}
          answeredCount={answeredCount}
          totalActive={activeQuestions.length}
          correctCount={correctCount}
          wrongCount={wrongCount}
          isFinished={isFinished}
          hasSavedAttempts={savedAttempts.length > 0}
          isViewingHistory={isViewingHistory}
          onOpenHistory={() => {
            if (savedAttempts[0]) {
              setViewingAttemptId(savedAttempts[0].id);
            }
          }}
          onFinish={handleFinish}
          onRestart={() => startSession(activeExamId, topicFilter, true)}
          progressPercent={progressPercent}
        />

        {showResultScreen ? (
          <ResultView
            key={viewingAttempt?.id ?? 'current-result'}
            questions={resultQuestions}
            selectedAnswers={resultSelectedAnswers}
            savedAttempts={savedAttempts}
            activeAttemptId={viewingAttempt?.id ?? null}
            onSelectAttempt={(id) => setViewingAttemptId(id)}
            onBackToQuiz={
              isViewingHistory ? () => setViewingAttemptId(null) : undefined
            }
            onRetryWrong={handleRetryWrong}
            onPracticeTopic={handlePracticeTopicFromResult}
            onRestart={() => startSession(activeExamId, topicFilter, true)}
          />
        ) : (
          <QuestionCard
            questions={activeQuestions}
            currentIndex={currentIndex}
            optionOrder={currentOptionOrder}
            selectedAnswers={selectedAnswers}
            mode={mode}
            onSelectOption={handleSelectOption}
            onPrev={() => {
              setCurrentIndex((i) => Math.max(0, i - 1));
              scrollToTop();
            }}
            onNext={() => {
              setCurrentIndex((i) => Math.min(activeQuestions.length - 1, i + 1));
              scrollToTop();
            }}
            onFinish={handleFinish}
          />
        )}
      </main>
    </div>
  );
}

export default App;

import type { ExamSet } from '../../types/exam';
import { proeftoets1 } from './proeftoets1';
import { proeftoets2 } from './proeftoets2';
import { proeftoets3 } from './proeftoets3';
import { proeftoets4 } from './proeftoets4';

/**
 * Voeg hier toekomstige proeftoetsen toe (bijv. proeftoets5, proeftoets6).
 * De selectie-interface toont alle sets in EXAM_SETS automatisch.
 */
const BASE_EXAM_SETS: ExamSet[] = [proeftoets1, proeftoets2, proeftoets3, proeftoets4];

export const EXAM_SETS: ExamSet[] =
  BASE_EXAM_SETS.length > 1
    ? [
        ...BASE_EXAM_SETS,
        {
          id: 'alle-toetsen-mix',
          title: 'Alle proeftoetsen — Gemengde reeks',
          shortTitle: 'Alle toetsen mix',
          subtitle: `${BASE_EXAM_SETS.reduce((acc, s) => acc + s.questions.length, 0)} meerkeuzevragen · Alle toetsen`,
          description: 'Combineert alle beschikbare proeftoetsen in één oefenreeks.',
          questions: BASE_EXAM_SETS.flatMap((s) => s.questions),
        },
      ]
    : BASE_EXAM_SETS;

export function getExamById(id: string): ExamSet {
  return EXAM_SETS.find((e) => e.id === id) ?? EXAM_SETS[0];
}

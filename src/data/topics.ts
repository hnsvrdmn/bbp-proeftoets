import type { TopicId, TopicMeta } from '../types/exam';

export const TOPIC_ORDER: TopicId[] = ['les1', 'les2', 'les3', 'les4', 'les5'];

export const TOPICS: Record<TopicId, TopicMeta> = {
  les1: {
    id: 'les1',
    title: 'Les 1: Modellen, Attitude & Mindset',
    shortTitle: 'Les 1: Attitude & Mindset',
    subtitle: 'Kolb, DVD, OPA, Attitude, Cognitieve dissonantie, Fixed/Growth mindset',
    sourcePptx: '2627 les 1 Intro, Attitude, Mindset.pptx',
  },
  les2: {
    id: 'les2',
    title: 'Les 2: Motivatie, Basisbehoeften & LOC',
    shortTitle: 'Les 2: Motivatie & LOC',
    subtitle: 'Intrinsiek/extrinsiek, Maslow, ZDT, Mastery, SFP, LOC, Pygmalion',
    sourcePptx: '2627 les 2 Motivatie en basisbehoeften, Flow.pptx',
  },
  les3: {
    id: 'les3',
    title: 'Les 3: Emotie, Flow, Stress & Coping',
    shortTitle: 'Les 3: Emotie, Flow & Stress',
    subtitle: "4 B's, Frijda, 5G, Flow, Eberspächer, Stress, Perceptie, Coping",
    sourcePptx: '2627 les 3 Emotie, stress en coping - Copy.pptx',
  },
  les4: {
    id: 'les4',
    title: 'Les 4: Groepen, Interactie, Attributie & Macht',
    shortTitle: 'Les 4: Groepen, Macht & Comm.',
    subtitle: 'Conformeren, Facilitatie/Loafing, Roos van Leary, FAF, Macht, Communicatie',
    sourcePptx: '2627 les 4 perceptie, coping, machten - Copy.pptx',
  },
  les5: {
    id: 'les5',
    title: 'Les 5: Brein, Moraliteit & Contextmanipulatie',
    shortTitle: 'Les 5: Brein, Moraal & Context',
    subtitle: 'Geheugen, Metacognitie, Groepscultuur, Kohlberg, Vygotsky/ZNO, Contextmanipulatie',
    sourcePptx: '2627 les 5 Morele beinvloeding en contextmanipulatie - Copy.pptx',
  },
};

export enum LessonStage {
  INTRO = 'INTRO',
  VISUALIZE = 'VISUALIZE',
  METHODS = 'METHODS',
  DO_IT = 'DO_IT',
  PRACTICE_MATCH = 'PRACTICE_MATCH',
  PRACTICE_COMPARE = 'PRACTICE_COMPARE',
  SUMMARY = 'SUMMARY'
}

export interface Person {
  id: number;
  label: string;
  isTarget?: boolean;
  name?: string;
  avatarColor?: string;
}

export interface MatchItem {
  id: string;
  content: string;
  value: number;
  icon: string;
}

export interface MatchProblemPair {
  left: MatchItem[];
  right: MatchItem[];
}
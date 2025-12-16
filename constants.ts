import { MatchProblemPair } from './types';

// Left column items from the book image
const leftItems = [
  { id: 'l1', content: '11 + 2', value: 13, icon: '🐯' }, // Tiger
  { id: 'l2', content: '10 + 2', value: 12, icon: '🦌' }, // Antelope/Deer
  { id: 'l3', content: '3 + 6', value: 9, icon: '🐵' },   // Monkey
  { id: 'l4', content: '8 + 10', value: 18, icon: '🐘' }, // Elephant
];

// Right column items from the book image (matching values)
const rightItems = [
  { id: 'r1', content: '10 + 8', value: 18, icon: '🦛' }, // Hippo
  { id: 'r2', content: '19 - 10', value: 9, icon: '🦏' }, // Rhino
  { id: 'r3', content: '15 - 2', value: 13, icon: '🦒' }, // Giraffe
  { id: 'r4', content: '13 - 1', value: 12, icon: '🐱' }, // Cat/Cub
];

export const MATCH_DATA: MatchProblemPair = {
  left: leftItems,
  right: rightItems,
};

export const PINE_CONES_COUNT = 11;
export const SQUIRRELS_COUNT = 7;
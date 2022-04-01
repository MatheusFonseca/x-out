import { IRow } from '../interfaces/IRow';
import { ISheet } from '../interfaces/ISheet';
import { scoreSheet } from './ScoreSheet';

export const calculateRowScore = (row: IRow): number => {
  let markedCount = row.boxes.reduce(
    (count, box) => (box.state === 'markedOff' ? count + 1 : count),
    0
  );

  // If the right most box is marked, the lock in that row should be marked as well
  if (row.boxes[row.boxes.length - 1].state === 'markedOff') {
    markedCount += 1;
  }

  return scoreSheet.get(markedCount) || 0;
};

export const calculateFinalScore = (sheet: ISheet): number => {
  let score = 0;
  const rows = Object.values(sheet) as IRow[];

  rows.forEach(row => (score += calculateRowScore(row)));

  return score;
};

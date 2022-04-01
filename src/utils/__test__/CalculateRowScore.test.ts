import { IRow } from '../../interfaces/IRow';
import { calculateRowScore } from '../CalculateScore';

describe('calculateRowScore function', () => {
  const row: IRow = {
    boxes: [
      { value: 2, state: 'default' },
      { value: 3, state: 'default' },
      { value: 4, state: 'default' },
      { value: 5, state: 'default' },
      { value: 6, state: 'default' },
      { value: 7, state: 'default' },
      { value: 8, state: 'default' },
      { value: 9, state: 'default' },
      { value: 10, state: 'default' },
      { value: 11, state: 'default' },
      { value: 12, state: 'default' },
    ],
    color: 'red',
  };

  const scoreSheet = new Map([
    [1, 1],
    [2, 3],
    [3, 6],
    [4, 10],
    [5, 15],
    [6, 21],
    [7, 28],
    [8, 36],
    [9, 45],
    [10, 55],
    [11, 66],
    [12, 78],
  ]);

  it('should calculate the right score based on how many boxes are marked off', () => {
    row.boxes.forEach((box, index) => {
      box.state = 'markedOff';
      if (index === 10) {
        // If the right most box is marked, the lock in that row should be marked as well
        expect(calculateRowScore(row)).toBe(scoreSheet.get(index + 2));
      } else {
        expect(calculateRowScore(row)).toBe(scoreSheet.get(index + 1));
      }
    });
  });
});

import { ISheet } from '../../interfaces/ISheet';
import { calculateFinalScore } from '../CalculateScore';

describe('calculateFinalScore function', () => {
  const sheet: ISheet = {
    row1: {
      boxes: [
        { value: 2, state: 'disabled' },
        { value: 3, state: 'markedOff' },
        { value: 4, state: 'markedOff' },
        { value: 5, state: 'markedOff' },
        { value: 6, state: 'disabled' },
        { value: 7, state: 'markedOff' },
        { value: 8, state: 'markedOff' },
        { value: 9, state: 'markedOff' },
        { value: 10, state: 'markedOff' },
        { value: 11, state: 'markedOff' },
        { value: 12, state: 'markedOff' },
      ],
      color: 'red',
    },
    row2: {
      boxes: [
        { value: 2, state: 'disabled' },
        { value: 3, state: 'markedOff' },
        { value: 4, state: 'disabled' },
        { value: 5, state: 'disabled' },
        { value: 6, state: 'disabled' },
        { value: 7, state: 'disabled' },
        { value: 8, state: 'disabled' },
        { value: 9, state: 'disabled' },
        { value: 10, state: 'markedOff' },
        { value: 11, state: 'default' },
        { value: 12, state: 'default' },
      ],
      color: 'yellow',
    },
    row3: {
      boxes: [
        { value: 12, state: 'disabled' },
        { value: 11, state: 'markedOff' },
        { value: 10, state: 'disabled' },
        { value: 9, state: 'disabled' },
        { value: 8, state: 'markedOff' },
        { value: 7, state: 'markedOff' },
        { value: 6, state: 'markedOff' },
        { value: 5, state: 'markedOff' },
        { value: 4, state: 'markedOff' },
        { value: 3, state: 'default' },
        { value: 2, state: 'default' },
      ],
      color: 'green',
    },
    row4: {
      boxes: [
        { value: 12, state: 'default' },
        { value: 11, state: 'default' },
        { value: 10, state: 'default' },
        { value: 9, state: 'default' },
        { value: 8, state: 'default' },
        { value: 7, state: 'default' },
        { value: 6, state: 'default' },
        { value: 5, state: 'default' },
        { value: 4, state: 'default' },
        { value: 3, state: 'default' },
        { value: 2, state: 'default' },
      ],
      color: 'blue',
    },
  };

  it('should calculate the right score based on how many boxes are marked off', () => {
    expect(calculateFinalScore(sheet)).toBe(79); // 55 + 3 + 21 + 0
  });
});

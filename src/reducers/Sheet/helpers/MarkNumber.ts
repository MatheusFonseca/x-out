import { IBox } from '@/interfaces';

export const markNumber = (target: number, rowState: IBox[]): IBox[] => {
  const is = (box: IBox, state: IBox['state']) => box.state === state;

  if (is(rowState[target], 'disabled') || !rowState[target]) {
    return rowState;
  }

  const newRowState: IBox[] = JSON.parse(JSON.stringify(rowState));
  let markedCount = 0;

  newRowState.forEach((box, index) => {
    if (index < target && !is(box, 'markedOff')) {
      box.state = 'disabled';
    }
    if (is(box, 'markedOff')) {
      markedCount += 1;
    }
  });

  // should not mark off the last number if there is less than 5 other marked off numbers before it
  if (target === rowState.length - 1 && markedCount < 5) {
    return rowState;
  }

  newRowState[target].state = 'markedOff';
  markedCount += 1;

  // should disable the last number if its not possible to mark 5 numbers before it
  const numbersLeft = newRowState.length - target - 2;
  if (markedCount + numbersLeft < 5) {
    newRowState[newRowState.length - 1].state = 'disabled';
  }

  return newRowState;
};

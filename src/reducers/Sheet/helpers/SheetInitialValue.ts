import { IBox, IColor, ISheet } from '@/interfaces';

const generateInitialValue = (color: IColor) => {
  const initialBoxesState: IBox[] = [];
  for (let i = 2; i <= 12; i++) {
    initialBoxesState.push({ state: 'default', value: i });
  }
  if (color === 'green' || color === 'blue') {
    return initialBoxesState.reverse();
  }
  return initialBoxesState;
};

export const sheetInitialValue: ISheet = {
  row1: {
    boxes: [...generateInitialValue('red')],
    color: 'red',
  },
  row2: {
    boxes: [...generateInitialValue('yellow')],
    color: 'yellow',
  },
  row3: {
    boxes: [...generateInitialValue('green')],
    color: 'green',
  },
  row4: {
    boxes: [...generateInitialValue('blue')],
    color: 'blue',
  },
};

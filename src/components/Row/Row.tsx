import React from 'react';
import { Box } from '../Box/Box';
import { Lock } from '../Lock/Lock';

interface RowProps {
  color: 'red' | 'yellow' | 'green' | 'blue';
  inverted?: boolean;
}

const rowStyles = {
  red: 'bg-red',
  yellow: 'bg-yellow',
  green: 'bg-green',
  blue: 'bg-blue',
};

export interface INumberState {
  markedOff: boolean;
  disabled: boolean;
}

export const markNumber = (
  target: number,
  rowState: INumberState[]
): INumberState[] => {
  if (rowState[target].disabled || !rowState[target]) {
    return rowState;
  }

  const newRowState: INumberState[] = JSON.parse(JSON.stringify(rowState));
  let markedCount = 0;

  newRowState.forEach((dice, index) => {
    if (index < target && !dice.markedOff) {
      dice.disabled = true;
    }
    if (dice.markedOff) {
      markedCount += 1;
    }
  });

  // should not mark off the last number if there is less than 5 other marked off numbers before it
  if (target === rowState.length - 1 && markedCount < 5) {
    return rowState;
  }

  newRowState[target].markedOff = true;
  markedCount += 1;

  // should disable the last number if its not possible to mark 5 numbers before it
  const numbersLeft = newRowState.length - target - 2;
  if (markedCount + numbersLeft < 5) {
    newRowState[newRowState.length - 1].disabled = true;
  }

  return newRowState;
};

export const Row = ({ color, inverted = false }: RowProps) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (inverted) {
    numbers.reverse();
  }

  return (
    <div
      className={`flex flex-row justify-center space-x-2 p-4 rounded-2xl my-6 ${rowStyles[color]}`}
    >
      {numbers.map(number => {
        return (
          <Box key={`${color}-row-${number}`} number={number} color={color} />
        );
      })}

      <Lock color={color} variant="default" />
    </div>
  );
};

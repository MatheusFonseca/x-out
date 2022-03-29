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

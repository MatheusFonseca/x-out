import { IColor, IDice } from '@/interfaces';

export const rollDice = (): IDice => {
  const generateRandomInt = () => Math.floor(Math.random() * 6) + 1;
  const colors: (IColor | 'white')[] = [
    'white',
    'white',
    'red',
    'yellow',
    'green',
    'blue',
  ];

  return colors.map(color => ({
    color,
    value: generateRandomInt(),
  })) as IDice;
};

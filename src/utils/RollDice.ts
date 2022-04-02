import { IColor } from '../interfaces/IColor';
import { IDie } from '../interfaces/IDie';

export const rollDice = (): IDie[] => {
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
  }));
};

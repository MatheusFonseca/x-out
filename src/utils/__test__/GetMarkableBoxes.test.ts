import { IDice } from '@/interfaces';
import { getMarkableBoxes } from '../GetMarkableBoxes';

describe('calculateRowScore function', () => {
  const dice: IDice = [
    {
      color: 'white',
      value: 1,
    },
    {
      color: 'white',
      value: 3,
    },
    {
      color: 'red',
      value: 5,
    },
    {
      color: 'yellow',
      value: 6,
    },
    {
      color: 'green',
      value: 4,
    },
    {
      color: 'blue',
      value: 2,
    },
  ];

  it('should return an array of the markable boxes based on the dice passed', () => {
    expect(getMarkableBoxes(dice, false)).toMatchObject([
      {
        color: 'red',
        value: 4,
      },
      {
        color: 'yellow',
        value: 4,
      },
      {
        color: 'green',
        value: 4,
      },
      {
        color: 'blue',
        value: 4,
      },
      {
        color: 'red',
        value: 6,
      },
      {
        color: 'red',
        value: 8,
      },
      {
        color: 'yellow',
        value: 7,
      },
      {
        color: 'yellow',
        value: 9,
      },
      {
        color: 'green',
        value: 5,
      },
      {
        color: 'green',
        value: 7,
      },
      {
        color: 'blue',
        value: 3,
      },
      {
        color: 'blue',
        value: 5,
      },
    ]);
  });

  it('should exclude white dice sum from the result if the white dice was already used', () => {
    expect(getMarkableBoxes(dice, true)).toMatchObject([
      {
        color: 'red',
        value: 6,
      },
      {
        color: 'red',
        value: 8,
      },
      {
        color: 'yellow',
        value: 7,
      },
      {
        color: 'yellow',
        value: 9,
      },
      {
        color: 'green',
        value: 5,
      },
      {
        color: 'green',
        value: 7,
      },
      {
        color: 'blue',
        value: 3,
      },
      {
        color: 'blue',
        value: 5,
      },
    ]);
  });
});

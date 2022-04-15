import { IColor, IDice, IMarkableBox } from '@/interfaces';

export const getMarkableBoxes = (
  dice: IDice,
  wasWhiteDiceUsed: boolean
): IMarkableBox[] => {
  const [whiteDie1, whiteDie2, redDie, yellowDie, greenDie, blueDie] = dice;

  const markableBoxes: IMarkableBox[] = [];
  const allColors: IColor[] = ['red', 'yellow', 'green', 'blue'];

  // A player can mark off a box of any color that match the white dice sum (only once)
  if (!wasWhiteDiceUsed) {
    allColors.forEach(color =>
      markableBoxes.push({
        color,
        value: whiteDie1.value + whiteDie2.value,
      })
    );
  }

  /*
    A player may (but is not required to) add one of the white dice together 
    with any one of the colored dice and mark off the number corresponding 
    to this sum in the color-row corresponding to the color of the chosen die
  */
  [redDie, yellowDie, greenDie, blueDie].forEach(die => {
    markableBoxes.push({
      color: die.color,
      value: whiteDie1.value + die.value,
    });
    markableBoxes.push({
      color: die.color,
      value: whiteDie2.value + die.value,
    });
  });

  return markableBoxes;
};

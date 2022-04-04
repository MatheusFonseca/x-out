import React, { useContext } from 'react';
import { DiceContext } from '../../contexts/Dice/Dice.context';
import { SheetContext } from '../../contexts/Sheet/Sheet.context';
import { IBox } from '../../interfaces/IBox';
import { IColor } from '../../interfaces/IColor';
import { ISheet } from '../../interfaces/ISheet';
import { getMarkableBoxes } from '../../utils/GetMarkableBoxes';
import { Box } from '../Box/Box';
import { Lock } from '../Lock/Lock';

const rowStyles = {
  red: 'bg-red',
  yellow: 'bg-yellow',
  green: 'bg-green',
  blue: 'bg-blue',
};

interface RowProps {
  color: IColor;
  id: keyof ISheet;
  isEyeOn: boolean;
}

export const Row = ({ color, id, isEyeOn }: RowProps) => {
  const { sheet, dispatchSheet } = useContext(SheetContext);
  const { dice } = useContext(DiceContext);

  const isBoxMarkable = (box: IBox): boolean => {
    if (box.state !== 'default') {
      return false;
    }

    return (
      getMarkableBoxes(dice, false).findIndex(markableBox => {
        if (markableBox.color === color && markableBox.value === box.value) {
          return true;
        }
        return false;
      }) >= 0
    );
  };

  const markBox = ({ value, state }: IBox, index: number) => {
    if (isBoxMarkable({ value, state })) {
      dispatchSheet({
        type: 'MARK_BOX',
        payload: { targetBox: index, targetRow: id },
      });
    }
  };

  return (
    <div
      className={`flex flex-row justify-center space-x-2 p-4 rounded-2xl my-6 ${rowStyles[color]}`}
    >
      {sheet[id].boxes.map(({ value, state }, index) => {
        return (
          <div
            key={`${color}-row-${value}`}
            onClick={() => markBox({ value, state }, index)}
          >
            <Box
              value={value}
              color={color}
              variant={
                isEyeOn &&
                state === 'default' &&
                !isBoxMarkable({ value, state })
                  ? 'playedDown'
                  : state
              }
            />
          </div>
        );
      })}

      <Lock
        color={color}
        variant={sheet[id].boxes[sheet[id].boxes.length - 1].state}
      />
    </div>
  );
};

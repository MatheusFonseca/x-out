import { IBox, IColor, IDice, ISheet } from '@/interfaces';
import React from 'react';
import { getMarkableBoxes } from '@/utils';
import { Box, Lock } from '@/components';
import { SheetAction } from '@/reducers';

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
  sheet: ISheet;
  dispatchSheet: React.Dispatch<SheetAction>;
  dice: IDice;
}

export const Row = ({
  color,
  id,
  dice,
  isEyeOn,
  sheet,
  dispatchSheet,
}: RowProps) => {
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

import React, { useContext } from 'react';
import { SheetContext } from '../../contexts/Sheet/Sheet.context';
import { IColor } from '../../interfaces/IColor';
import { ISheet } from '../../interfaces/ISheet';
import { Box, IBox } from '../Box/Box';
import { Lock } from '../Lock/Lock';

const rowStyles = {
  red: 'bg-red',
  yellow: 'bg-yellow',
  green: 'bg-green',
  blue: 'bg-blue',
};

export interface IRow {
  boxes: IBox[];
  color: IColor;
}

interface RowProps {
  color: IColor;
  id: keyof ISheet;
}

export const Row = ({ color, id }: RowProps) => {
  const { sheet, dispatchSheet } = useContext(SheetContext);

  return (
    <div
      className={`flex flex-row justify-center space-x-2 p-4 rounded-2xl my-6 ${rowStyles[color]}`}
    >
      {sheet[id].boxes.map(({ value, state }, index) => {
        return (
          <div
            key={`${color}-row-${value}`}
            onClick={() =>
              dispatchSheet({
                type: 'MARK_BOX',
                payload: { targetBox: index, targetRow: id },
              })
            }
          >
            <Box value={value} color={color} variant={state} />
          </div>
        );
      })}

      <Lock color={color} variant="default" />
    </div>
  );
};

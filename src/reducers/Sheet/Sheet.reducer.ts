import { IBox, ISheet } from '@/interfaces';
import { markNumber } from './helpers';

export type SheetAction = {
  type: 'MARK_BOX';
  payload: {
    targetBox: number;
    targetRow: keyof ISheet;
  };
};

export const sheetReducer = (sheet: ISheet, action: SheetAction): ISheet => {
  const { targetBox, targetRow } = action.payload;

  switch (action.type) {
    case 'MARK_BOX':
      return {
        ...sheet,
        [targetRow]: {
          ...sheet[targetRow],
          boxes: markNumber(targetBox, sheet[targetRow].boxes),
        },
      };
    default:
      return sheet;
  }
};

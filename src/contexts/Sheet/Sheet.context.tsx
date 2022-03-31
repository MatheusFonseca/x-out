import { createContext, ReactNode, useReducer } from 'react';
import { IBox } from '../../components/Box/Box';
import { IColor } from '../../interfaces/IColor';
import { ISheet } from '../../interfaces/ISheet';
import { SheetAction, sheetReducer } from './Sheet.reducer';

interface IProviderProps {
  children: ReactNode | ReactNode[];
}

const generateInitialValue = (color: IColor) => {
  const initialBoxesState: IBox[] = [];
  for (let i = 1; i <= 12; i++) {
    initialBoxesState.push({ state: 'default', value: i });
  }
  if (color === 'green' || color === 'blue') {
    return initialBoxesState.reverse();
  }
  return initialBoxesState;
};

const initialValue: ISheet = {
  row1: {
    boxes: [...generateInitialValue('red')],
    color: 'red',
  },
  row2: {
    boxes: [...generateInitialValue('yellow')],
    color: 'yellow',
  },
  row3: {
    boxes: [...generateInitialValue('green')],
    color: 'green',
  },
  row4: {
    boxes: [...generateInitialValue('blue')],
    color: 'blue',
  },
};

export const SheetContext = createContext<{
  sheet: ISheet;
  dispatchSheet: React.Dispatch<SheetAction>;
}>({ sheet: initialValue, dispatchSheet: () => null });

export const SheetContextProvider = ({ children }: IProviderProps) => {
  const [sheet, dispatchSheet] = useReducer(sheetReducer, initialValue);

  return (
    <SheetContext.Provider
      value={{
        sheet,
        dispatchSheet,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};

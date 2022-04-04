import React, { createContext, ReactNode, useState } from 'react';
import { IDice } from '../../interfaces/IDice';

interface IProviderProps {
  children: ReactNode | ReactNode[];
}

interface IDiceContext {
  dice: IDice;
  setDice: React.Dispatch<React.SetStateAction<IDice>>;
}

export const DiceContext = createContext<IDiceContext>({
  dice: undefined as any,
  setDice: () => [],
});

export const DiceContextProvider = ({ children }: IProviderProps) => {
  const [dice, setDice] = useState<IDice>(undefined as any);

  return (
    <DiceContext.Provider
      value={{
        dice,
        setDice,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

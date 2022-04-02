import React, { createContext, ReactNode, useState } from 'react';
import { IDie } from '../../interfaces/IDie';
import { rollDice } from '../../utils/RollDice';

interface IProviderProps {
  children: ReactNode | ReactNode[];
}

interface IDiceContext {
  dice: IDie[];
  setDice: React.Dispatch<React.SetStateAction<IDie[]>>;
}

export const DiceContext = createContext<IDiceContext>({
  dice: [],
  setDice: () => [],
});

export const DiceContextProvider = ({ children }: IProviderProps) => {
  const [dice, setDice] = useState<IDie[]>(rollDice());

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

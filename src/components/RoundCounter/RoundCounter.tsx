import React from 'react';
import { IRound } from '../../interfaces/IRound';

interface RoundCounterProps {
  rounds: IRound[];
}

export const RoundCounter = ({ rounds }: RoundCounterProps) => {
  return (
    <div className="flex space-x-2 justify-center">
      {rounds.map(({ status }, index) => {
        return (
          <div
            className={`h-[30px] w-[30px] shadow-md rounded-lg flex items-center justify-center ${
              status === 'played' ? 'bg-gray' : 'bg-white'
            }`}
            key={`round-${index + 1}`}
          >
            {status === 'skipped' && (
              <p className="text-gray text-lg text-center font-bold">-5</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

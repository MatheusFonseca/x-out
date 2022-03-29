import React from 'react';
import Image from 'next/image';
import xImage from '../../../public/x.png';
import { boxStyles } from './Box.styles';

interface BoxProps {
  number: number;
  color: 'red' | 'yellow' | 'green' | 'blue';
  variant?: 'default' | 'markedOff' | 'playedDown' | 'disabled';
}

export const Box = ({ number, variant = 'default', color }: BoxProps) => {
  return (
    <div
      className={`w-[120px] h-[120px] flex items-center justify-center rounded-2xl ${boxStyles.bg[variant][color]}`}
    >
      {variant === 'markedOff' ? (
        <Image width={82} height={91} src={xImage} alt="Marked off box" />
      ) : (
        <p className={`text-8xl font-bold ${boxStyles.number[variant][color]}`}>
          {number}
        </p>
      )}
    </div>
  );
};

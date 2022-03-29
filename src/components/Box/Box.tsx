import React from 'react';
import Image from 'next/image';
import xImage from '../../../public/x.png';
import { boxStyles } from './Box.styles';
import { IColor } from '../../interfaces/IColor';
interface BoxProps {
  number: number;
  color: IColor;
  variant?: 'default' | 'markedOff' | 'playedDown' | 'disabled';
}

export const Box = ({ number, variant = 'default', color }: BoxProps) => {
  return (
    <div
      className={`w-[106px] h-[122px] pb-4 select-none rounded-2xl ${
        variant === 'default' && 'cursor-pointer'
      }`}
    >
      <div
        className={`w-full h-full flex items-center justify-center rounded-2xl ${boxStyles.bg[variant][color]}`}
      >
        {variant === 'markedOff' ? (
          <Image
            draggable={false}
            width={82}
            height={91}
            src={xImage}
            alt="Marked off box"
          />
        ) : (
          <p
            className={`text-[84px] leading-none font-bold ${boxStyles.number[variant][color]}`}
          >
            {number}
          </p>
        )}
      </div>
    </div>
  );
};

import React from 'react';

interface LockProps {
  color: 'red' | 'yellow' | 'green' | 'blue';
  variant?: 'default' | 'markedOff' | 'disabled';
}

const lockStyles = {
  red: 'fill-red',
  yellow: 'fill-yellow',
  green: 'fill-green',
  blue: 'fill-blue',
};

const disableStyles =
  'relative after:absolute after:w-full after:bg-gray after:h-full after:rounded-[53px] after:top-0 after:bg-[rgb(0,0,0,0.25)] bg-white shadow-lg';

export const Lock = ({ color, variant = 'default' }: LockProps) => {
  return (
    <div
      className={`w-[106px] h-[106px] flex items-center justify-center rounded-[53px] bg-white shadow-lg pb-1.5 ${
        variant !== 'default' && disableStyles
      }`}
    >
      {variant === 'markedOff' ? (
        <svg className={lockStyles[color]} viewBox="0 0 448 512" height={73}>
          <desc>Locked</desc>
          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
        </svg>
      ) : (
        <svg
          className={lockStyles[color]}
          viewBox="0 0 448 512"
          height={73}
          transform="rotate(-10)"
        >
          <desc>Unlocked</desc>
          <path d="M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z" />
        </svg>
      )}
    </div>
  );
};

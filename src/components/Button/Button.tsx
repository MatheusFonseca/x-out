import React, { ReactChild } from 'react';

interface ButtonProps {
  children: ReactChild | ReactChild[];
  size: 'sm' | 'lg';
}

export const Button = ({ children, size }: ButtonProps) => {
  const buttonStyles = {
    lg: 'w-[272px] h-[120px]',
    sm: 'w-[80px] h-[60px]',
  };

  return (
    <div className="pb-4 cursor-pointer">
      <div
        className={`${buttonStyles[size]} bg-gray shadow-lg rounded-2xl flex justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
};

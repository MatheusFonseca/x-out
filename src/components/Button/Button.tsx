import React, { ReactChild } from 'react';

interface ButtonProps {
  children: ReactChild | ReactChild[];
  size: 'sm' | 'lg';
  onClick?: () => void;
}

export const Button = ({ children, size, onClick }: ButtonProps) => {
  const buttonStyles = {
    lg: 'w-[272px] h-[120px]',
    sm: 'w-[80px] h-[60px]',
  };

  return (
    <div {...(onClick && { onClick })} className="pb-4 cursor-pointer">
      <div
        className={`${buttonStyles[size]} bg-gray shadow-lg rounded-2xl flex justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
};

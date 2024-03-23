'use client';

import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type TButtonColor = 'prime' | 'dark';
type TButtonSize = 'sm' | 'md' | 'lg';

type TAppButton = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
  color?: TButtonColor;
  size?: TButtonSize;
};

const getColor = (color?: TButtonColor) => {
  switch (color) {
    case 'prime':
      return 'bg-prime hover:bg-prime-800';
    case 'dark':
      return 'bg-dark';
    default:
      return 'bg-prime hover:bg-prime-800';
  }
};

const getSize = (size?: TButtonSize) => {
  switch (size) {
    case 'sm':
      return 'text-sm py-2.5 px-5';
    case 'md':
      return 'py-3 px-6'
    case 'lg':
      return 'py-4 px-8'
    default:
      return 'text-sm py-2.5 px-5';
  }
};

export const AppButton: FC<TAppButton> = ({ children, color, size, ...props }) => {
  return (
    <button
      {...props}
      className={`
        md:w-auto w-full text-[#fff] rounded-[10px] font-bold flex justify-center items-center transition
        ${getColor(color)}
        ${getSize(size)}
        ${props.className || ''}`
      }
    >
      {children}
    </button>
  );
};

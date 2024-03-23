import React, { ReactNode } from 'react'
import { If } from '@/components/core/If';

type TAppInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;

}

export const AppInput = ({ label, ...props }: TAppInputProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <If condition={label}>
        <label aria-label="input" htmlFor={props.id}>
          {label}
        </label>
      </If>
      <input
        {...props}
        className={`px-5 py-3 border-neutral-300 rounded-md w-full ${props.className || ''}`}
      />
    </div>
  )
}

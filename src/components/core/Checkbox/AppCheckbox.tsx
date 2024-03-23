import { ReactNode } from 'react';
import { If } from '@/components/core/If';

type TAppCheckbox = {
  label?: ReactNode;
};

export const AppCheckbox = ({ label }: TAppCheckbox) => {
  return (
    <div className="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <If condition={label}>
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium text-gray-900"
          aria-label="checkbox"
        >
          {label}
        </label>
      </If>
    </div>
  )
}

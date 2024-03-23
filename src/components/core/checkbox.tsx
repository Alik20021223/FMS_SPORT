import React, { ReactNode } from 'react';

interface CustomCheckboxProps {
  children: ReactNode;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ children }) => {
  return (
    <div className="custom-checkbox">
      <label aria-label="custom-checkbox" className='flex items-center'>
        <input type="checkbox" className='rounded-lg' />
        <span className='ml-2'>{children}</span>
      </label>
    </div>
  );
}

export default CustomCheckbox;

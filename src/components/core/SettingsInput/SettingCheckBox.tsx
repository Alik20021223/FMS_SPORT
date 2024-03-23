'use client'
import { Checkbox } from '@nextui-org/react';
import React, { useState } from 'react';

export type SettingCheck = {
  txt: string;
};

const SettingCheckBox = ({ txt }: SettingCheck) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleBlockClick = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <div
        onClick={handleBlockClick}
        className={`py-[18px] pr-6 flex items-center justify-between w-[651px] bg-[#F5F5F5] rounded-[20px] ${isChecked ? 'checked' : ''
          }`}
      >
        <span className='pl-[38px]'>{txt}</span>
        <Checkbox isSelected={isChecked} onValueChange={setChecked} size="lg"></Checkbox>
      </div>
    </div>
  );
};

export default SettingCheckBox;

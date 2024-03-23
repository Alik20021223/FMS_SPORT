// FormField.tsx
import React, { ChangeEvent, ReactNode } from 'react';
import { Select, SelectItem, Input, Selection } from '@nextui-org/react';
import { ExpandMore } from '@mui/icons-material';

interface Option {
  id: number;
  value: string;
  label: ReactNode;
}

interface FormFieldProps {
  label: string;
  type: 'text' | 'select';
  value?: string;
  options?: Option[];
  selectedKeys?: string | string[];
  onChange?: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onSelectionChange?: (keys: Selection) => any,
}

const btnClass = {
  trigger: [
    "shadow-none",
    "rounded-md",
    "border",
    "p-5",
    "h-[45px]",
    "min-h-0",
    "bg-[#fff]"
  ],
  popoverContent: [
    "rounded-xl",
    "bg-[#f1f1f1]",
  ],
};

const FormField: React.FC<FormFieldProps> = ({ label, type, value, options = [], selectedKeys = [], onChange, onSelectionChange }) => {

  const handleSelectChange = (keys: Selection) => {
    if (onSelectionChange) {
      onSelectionChange(keys)
    }
  };

  return (
    <div className={`py-3 ${(label == 'Возраст' || label == 'Вес' || label == 'Пол') && 'flex items-center'}`}>
      <label aria-label={label}>
        {label}
        {type === 'select' ? (
          <Select
            disableSelectorIconRotation
            selectionMode={label == 'Номинация' ? 'multiple' : 'single'}
            selectorIcon={<ExpandMore />}
            className={`mt-4 ${(label == 'Возраст' || label == 'Вес' || label == 'Пол') && 'w-[150px] ml-2 mt-0'}`}
            selectedKeys={selectedKeys}
            onChange={onChange as any}
            onSelectionChange={handleSelectChange}
            classNames={btnClass}
          >
            {options.map((item) => (
              <SelectItem key={item.id} value={item.value} className='rounded-full hover:bg-[#b7b7b7cc]'>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        ) : (
          <Input
            classNames={{ inputWrapper: ['bg-white', 'border', 'h-[45px]', 'min-h-0'] }}
            className='mt-4'
            value={value}
            onChange={onChange}
          />
        )}
      </label>
    </div>
  );
};


export default FormField;
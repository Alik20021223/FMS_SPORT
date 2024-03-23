'use client';

import { AppInput } from '@/components/core/Input/AppInput';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AppCheckbox } from '../core/Checkbox/AppCheckbox';
import { AppButton } from '../core/Button/AppButton';

export const TheTopUpPay = () => {
  const [pay, setPay] = useState<Record<string, string>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPay(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-neutral-100 py-4 px-9 min-h-full">
      <h1 className="text-dark text-2xl mb-3 font-bold">Пополнение баланса</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-full">
            <AppInput
              name="num"
              label="Номер карты"
              placeholder="0000 0000 0000 0000"
              value={pay?.num || ''}
              onChange={handleChange}
            />
          </div>
          <AppInput
            name="term"
            label="Срок"
            placeholder="ММ/ГГ"
            value={pay?.term || ''}
            onChange={handleChange}
          />
          <AppInput
            name="cvc"
            label="CVC - код"
            placeholder="***"
            value={pay?.cvc || ''}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-10">
          <AppCheckbox label="Запомнить данные для следующих покупок " />
          <AppButton className="!w-full">
            Оплатить 150 ₽
          </AppButton>
          <p>Платеж защищен сертификатом TLS</p>
          <p>Написвть в поддержку</p>
        </div>
      </form>
    </div>
  )
}

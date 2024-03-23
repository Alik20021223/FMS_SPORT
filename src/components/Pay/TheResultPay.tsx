import { AppDetails, TDetailsData } from '@/components/core/Details/AppDetails';
import { Hr } from '@/components/core/Hr';

const sumDetail: TDetailsData[] = [
  { title: 'Цена', value: '150 ₽' },
  { title: 'Скидка', value: 'Скидка' },
];

const resultDetail: TDetailsData[] = [
  { title: 'Итого:  ', value: '150 ₽' },
];

export const TheResultPay = () => {
  return (
    <div className="bg-neutral-100 py-4 px-9 self-baseline sm:min-w-80">
      <h1 className="text-dark text-2xl mb-3 font-bold">
        Сумма
      </h1>
      <AppDetails data={sumDetail} />
      <Hr />
      <AppDetails data={resultDetail} />
    </div>
  )
};

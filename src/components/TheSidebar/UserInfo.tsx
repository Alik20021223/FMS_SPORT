'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AppButton } from '@/components/core/Button/AppButton';
import { useRouter } from 'next/navigation';
import { PersonalState } from '@/app/interfaces/Person';

export type TUserInfoData = {
  fullname: string;
  id: string;
  balanse: number;
}

type TUserInfoProps = {
  data: PersonalState
}

const userMenu = [
  { name: 'Персональные данные', link: '/profile' },
  { name: 'Антропометрия', link: '/profile/anthropometry' },
  { name: 'Семья', link: '/profile/family' },
  { name: 'Достижения', link: '/profile/achievements' },
  { name: 'Мой клуб', link: '/my-club' },
];


const menu = [
  { name: 'Клубы', link: '/clubs' },
  { name: 'Спортсмены', link: '/athletes' },
  { name: 'Турниры', link: '/tournaments' },
  { name: 'Настройки', link: '/setting' },
  { name: 'Обратная связь', link: '/feedback' },
];

export const UserInfo = ({ data }: TUserInfoProps) => {
  const router = useRouter();
  const redirectToPay = () => {
    router.push('/pay');
  };

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div >
      <div className="flex flex-col gap-4">
        <Image
          src={"/static/" + data.photo}
          alt="avatar"
          width={70}
          height={70}
          className="object-cover rounded-full border-2 border-prime"
        />
        <ul className="mb-10 flex flex-col gap-3 text-dark">
          <li>{data.surname} {data.name} {data.patronymic}</li>
          <li>ID{Intl.NumberFormat('ru-RU', {maximumSignificantDigits: 6}).format(data.id,)}</li>
          <li className="flex flex-wrap items-center">
            <span className="mr-4">Баланс</span>
            <span className="mr-8 text-gray-500">{data.balance} руб.</span>
            <AppButton className='mt-3' onClick={redirectToPay}>
              Пополнить баланс
            </AppButton>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            Личные данные
            <ul className="flex flex-col gap-3 ml-10 mt-4">
              {userMenu.map((m, i) => (
                <li key={i}>
                  <Link href={m.link} prefetch={false}>
                    <div onClick={() => handleRedirect(m.link)}>
                      {m.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {menu.map((m, i) => (
            <li key={i}>
              <Link href={m.link} prefetch={false}>
                <div onClick={() => handleRedirect(m.link)}>
                  {m.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

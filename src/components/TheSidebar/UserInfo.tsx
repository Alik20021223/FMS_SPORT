'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AppButton } from '@/components/core/Button/AppButton';
import { useRouter } from 'next/navigation';
import { PersonalState } from '@/app/interfaces/Person';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';

export type TUserInfoData = {
  fullname: string;
  id: string;
  balanse: number;
}

type TUserInfoProps = {
  data: PersonalState
}

export const UserInfo = ({ data }: TUserInfoProps) => {
  const router = useRouter();
  const user: PersonalState = useAppSelector(state => state.personal)
  const [menu, setMenu] = useState<any[]>([
    { name: 'Клубы', link: '/clubs' },
    { name: 'Спортсмены', link: '/athletes' },
    { name: 'Турниры', link: '/tournaments' },
    { name: 'Настройки', link: '/setting' },
    { name: 'Обратная связь', link: '/feedback' },
  ])
  const [userMenu, setUserMenu] = useState<any[]>([
    { name: 'Персональные данные', link: '/profile', isActive: true},
    { name: 'Антропометрия', link: '/profile/anthropometry', isActive: true },
    { name: 'Семья', link: '/profile/family', isActive: true },
    { name: 'Достижения', link: '/profile/achievements', isActive: true },
    { name: 'Мой клуб', link: '/my-club', isActive: user.club ? true : false },
  ]);

  useEffect(() => {
    
  }, [])

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
          <li>ID {data.id.toString().padStart(6, "0")}</li>
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
            <Link href={'/profile'}>Личные данные</Link>
            <ul className="flex flex-col gap-3 ml-10 mt-4">
              {userMenu.map((m, i) => m.isActive ? (
                <li key={i}>
                  <Link href={m.link} prefetch={false}>
                    <div onClick={() => handleRedirect(m.link)}>
                      {m.name}
                    </div>
                  </Link>
                </li>
              ) : (<></>))}
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

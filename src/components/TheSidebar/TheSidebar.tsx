'use client'
import Image from "next/image"
import { TUserInfoData, UserInfo } from "./UserInfo"
import Link from "next/link"
import { useAppSelector } from "@/redux/hooks"
import { PersonalState } from "@/app/interfaces/Person"
import './sidebar.css';

export const TheSidebar = () => {

  const user: PersonalState = useAppSelector(state => state.personal)

  return (
    <>
      <nav className="fsmb-sidebar px-8 py-11 min-h-screen max-h-screen self-baseline overflow-auto w-[25%] sticky top-0 bg-[#eeeeee]">
        <Link href="/" className="flex gap-4 items-center mb-12">
          <Image
            src="/assets/img/logo-fsmb.png"
            alt="avatar"
            width={44}
            height={67}
            className="object-cover inline-block text-red-500"
          />
          <p className="text-primry">
            ФЕДЕРАЦИЯ <br />
            СОВРЕМЕННОГО <br />
            МЕЧЕВОГО БОЯ
          </p>
        </Link>
        <UserInfo data={user} />
      </nav>

    </>
  )
}

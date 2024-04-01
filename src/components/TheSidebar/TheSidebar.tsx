'use client'
import Image from "next/image"
import { TUserInfoData, UserInfo } from "./UserInfo"
import Link from "next/link"
import { useAppSelector } from "@/redux/hooks"
import { PersonalState } from "@/app/interfaces/Person"

export const TheSidebar = () => {

  const user: PersonalState = useAppSelector(state => state.personal)

  return (
    <>
      <nav className="px-8 py-11 max-h-dvh-100 self-baseline overflow-auto">
        <Link href="/" className="flex gap-4 items-center mb-12">
          <Image
            src="/assets/img/logo-fsmb.png"
            alt="avatar"
            width={44}
            height={67}
            className="object-cover inline-block"
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

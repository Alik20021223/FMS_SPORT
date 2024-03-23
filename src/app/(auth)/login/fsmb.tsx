import React from 'react'
import Image from "next/image";

export const Fsmb = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-[140px]">
        <div className="mb-6">
            <Image src="/assets/img/Лого2.svg"
                width={122}
                height={185}
                alt="Picture of the author" />
        </div>
        <h1 className="text-[30px] leading-[38px] text-[#155783] mb-[80px]">ФЕДЕРАЦИЯ СОВРЕМЕННОГО МЕЧЕВОГО БОЯ</h1>
        <p className="text-center text-[12px] font-medium">Заявите о себе, общайтесь, знакомьтесь с единомышленниками по всей стране, участвуйте в соревнованиях <span className="text-[#D42828]">(и еще куча всего, что может дать мне, как участниу, этот сервис)</span></p>
    </div>
  )
}

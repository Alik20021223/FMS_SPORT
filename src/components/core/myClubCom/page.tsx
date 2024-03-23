'use client'
import { AppTable } from '@/components/core/Table/Table'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { FC } from 'react'
import { columns, myClub } from './data'

interface MyClubProps {
    isButton: boolean
  }

const MyClub: FC<MyClubProps> = ({isButton}) => {

    return (
        <div className={`w-[600px] bg-[#F5F5F5] rounded-[20px]`}>
            <div className='pl-[58px] pt-[29px] flex items-center mb-9'>
                <div className='mr-[45px]'>
                    <Image src={myClub.LogoInfo.logoImg} alt='logo' width={100} height={100} />
                </div>
                <div>
                    <p className='underline'>Клуб
                        "{myClub.LogoInfo.nameClub}"
                    </p>
                    <p className='underline'>{myClub.LogoInfo.cityClub}</p>
                </div>
            </div>
            <div className='pl-[78px] pr-[131px] mb-[55px]'>
                {myClub.infoClub.map((item) => (
                    <div key={item.id} className='underline mb-3'>
                        {item.value}
                        <p className='underline ml-5'>{item.txt}</p>
                    </div>
                ))}
                <div className='underline mb-5'>
                    Описание
                    <p className='underline ml-5'>{myClub.Description.dateWork}</p>
                    <p className='underline ml-5'>{myClub.Description.firstGroup}</p>
                    <p className='underline ml-5'>{myClub.Description.secondGroup}</p>
                    <p className='underline ml-5'>{myClub.Description.sportSection}</p>
                </div>
                {isButton && <Button className='py-[10px] w-full text-white bg-prime underline'>Изменить описание</Button>}
            </div>
            <div className='px-6 w-full pb-3'>
                <AppTable cols={columns} rows={myClub.clubAthletes} tableClassPy='py-2' tableClass="px-4"></AppTable>
            </div>
        </div>
    )
}

export default MyClub
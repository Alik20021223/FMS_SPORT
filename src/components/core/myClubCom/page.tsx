'use client'
import { AppTable } from '@/components/core/Table/Table'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { columns } from './data'
import axios from 'axios'
import { ModalApply } from './_components/ModalApply'
import { useDisclosure } from '@nextui-org/react'

interface MyClubProps {
    isButton: boolean
}

const MyClub: FC<MyClubProps> = ({ isButton }) => {

    const [myClub, setMyClub] = useState<any>({})
    const [myClubMember, setMyClubMembers] = useState<any>([])
    const [dataApply, setDataApply] = useState<any>({})
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        axios.get('/api/my-club', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            setMyClub(res.data.club)
            setMyClubMembers(res.data.members)

        })
    }, [])    

    const handleClickRow = (data: any) => {
        console.log(data);
        
        onOpen()
        setDataApply(data)
    }



    return (
        <div className={`w-[600px] bg-[#F5F5F5] rounded-[20px]`}>
            {myClub ? (
                <>
                    <div className='pl-[58px] pt-[29px] flex items-center mb-9'>
                        <div className='mr-[45px]'>
                            <Image src={'/assets/img/logoClub.png'} alt='logo' width={100} height={100} />
                        </div>
                        <div>
                            <p className='underline'>Клуб
                                "{myClub.name}"
                            </p>
                            <p className='underline'>{myClub.city}</p>
                        </div>
                    </div>
                    <div className='pl-[78px] pr-[131px] mb-[55px]'>

                        <div className='underline mb-3'>
                            Адресс
                            <p className='underline ml-5'>{myClub?.address}</p>
                        </div>
                        <div className='underline mb-3'>
                            Дата основания
                            <p className='underline ml-5'>{myClub?.createdAt}</p>
                        </div>
                        <div className='underline mb-3'>
                            Наличие акредитации
                            <p className='underline ml-5'>{myClub?.accreditation ? myClub?.accreditation : "Нет"}</p>
                        </div>
                        <div className='underline mb-3'>
                            Телефон
                            <p className='underline ml-5'>{myClub?.phone}</p>
                        </div>
                        <div className='underline mb-3'>
                            Почта
                            <p className='underline ml-5'>{myClub?.email}</p>
                        </div>
                        <div className='underline mb-3'>
                            Глава Клуба
                            <p className='underline ml-5'>{myClub?.owner?.surname} {myClub?.owner?.name} {myClub?.owner?.patronymic}</p>
                        </div>


                        <div className='underline mb-5'>
                            Описание
                            <p className='underline ml-5'>{myClub.description}</p>
                        </div>
                        {/* {isButton && <Button className='py-[10px] w-full text-white bg-prime underline'>Изменить описание</Button>} */}
                    </div>
                    <div className='px-6 w-full pb-3'>
                        <AppTable cols={columns} rows={myClubMember} onClickRow={handleClickRow} tableClassPy='py-2' tableClass="px-4"></AppTable>
                    </div>
                    <ModalApply isOpen={isOpen} onOpen={onOpen} onClose={onClose} item={dataApply}/>
                </>
            ) : <div className='p-5'>
                <h1>Вы не состоите в клубе!</h1>
            </div>
            }
        </div>
    )
}

export default MyClub
'use client'
import React, { FC, useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { AppTable } from "@/components/core/Table/Table";
import { useDisclosure } from '@nextui-org/react';
import { CreateTourneyModal } from '@/components/core/Modals/CreateTourney/Modal';
import WatchModal from '@/components/core/Modals/TourneyTableWatch/Modal';
import { ChangeCreate } from '@/components/core/Modals/ChangeCreateTourney/Modal';
import axios from 'axios';

const columns = [
    {
        key: "name",
        label: "Турнир",
    },
    {
        key: "dateFtom",
        label: "Дата",
    },
    {
        key: "nomination",
        label: "Номинация",
    },
    {
        key: "address",
        label: "Место поведение",
    },
    {
        key: "price",
        label: "Стоимость",
    },
    {
        key: "applicationDeadline",
        label: "Прием заявок до",
    },
    {
        key: "action",
        label: "",
    },
];


const CreateTourney = () => {
    const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
    const { isOpen: isWatchOpen, onOpen: onWatchOpen, onClose: onWatchClose } = useDisclosure();
    const { isOpen: isChangeOpen, onOpen: onChangeOpen, onClose: onChangeClose } = useDisclosure();
    const [rows, setRows] = useState<any[]>([])

    const [isId, setId] = useState<number>()
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get('/api/my-tournaments', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            let tournoments = res.data.data
            tournoments = tournoments.map((tournoment: any) => {
                let dateFrom = new Date(tournoment.dateFrom) 
                tournoment.dateFrom = dateFrom.getDate() + '.' + (dateFrom.getMonth() + 1).toString().padStart(2, '0') + '.' + dateFrom.getFullYear()
                
                let dateTo = new Date(tournoment.dateTo) 
                tournoment.dateTo = dateTo.getDate() + '.' + (dateTo.getMonth() + 1).toString().padStart(2, '0') + '.' + dateTo.getFullYear()
                
                let appDeadline = new Date(tournoment.applicationDeadline) 
                tournoment.applicationDeadline = appDeadline.getDate() + '.' + (appDeadline.getMonth() + 1).toString().padStart(2, '0') + '.' + appDeadline.getFullYear()
                return tournoment
            })
            setRows(tournoments)
            
        })
    }, [])

    const handleCreate = () => {
        onCreateOpen();
    }


    const handleWatch = () => {
        onWatchOpen();
    }

    const handleChangeOpen = () => {
        setItem(item)
        onChangeOpen();
    }


    return (
        <div className='w-full flex items-center flex-col'>
            <div className='flex w-full mb-[28px] justify-between'>
                <Button onClick={handleCreate} className='bg-prime text-white rounded-[10px] w-[40%]  py-[10px]'>Создать турнир</Button>
                <Button onClick={handleWatch} className='bg-prime text-white rounded-[10px] w-[40%]  py-[10px]'>Посмотреть турнир</Button>
            </div>
            <div className='w-full'>
                <p className='mb-5'>Созданные турниры</p>
                <div className="w-full">
                    <AppTable cols={columns} rows={rows} onClickRow={handleChangeOpen} />
                </div>
            </div>
            <CreateTourneyModal isOpen={isCreateOpen} onOpen={onCreateOpen} onClose={onCreateClose} data={rows} />
            <WatchModal isOpen={isWatchOpen} onOpen={onWatchOpen} onClose={onWatchClose} data={rows} />
            <ChangeCreate
                item={item}
                onOpen={onChangeOpen}
                isOpen={isChangeOpen}
                onClose={onChangeClose}
            />
        </div>
    )
}

export default CreateTourney
'use client'
import React, { FC, useState } from 'react'
import { Button } from '@nextui-org/react'
import { AppTable } from "@/components/core/Table/Table";
import { useDisclosure } from '@nextui-org/react';
import { CreateTourneyModal } from '@/components/core/Modals/CreateTourney/Modal';
import WatchModal from '@/components/core/Modals/TourneyTableWatch/Modal';
import { ChangeCreate } from '@/components/core/Modals/ChangeCreateTourney/Modal';


const rows = [
    {
        id: 1,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        dateEnd: '14.02.2023',
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        price: 1200,
        change: true,
    },
];

const columns = [
    {
        key: "name",
        label: "Турнир",
    },
    {
        key: "dateAt",
        label: "Дата",
    },
    {
        key: "type",
        label: "Номинация",
    },
    {
        key: "placeAt",
        label: "Место поведение",
    },
    {
        key: "price",
        label: "Стоимость",
    },
    {
        key: "dateEnd",
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

    const [isId, setId] = useState<number>()
    const [item, setItem] = useState({});

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
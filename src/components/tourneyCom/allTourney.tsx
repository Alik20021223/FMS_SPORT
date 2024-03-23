'use client'
import React, { FC, useState } from 'react'
import { AppTable } from '../core/Table/Table';
import { useRouter } from 'next/navigation';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const rows = [
    {
        id: 1,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        price: 1200,
        action: true,
        dateEnd: '14.02.2023',
        apply: false
    },
    {
        id: 2,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        price: 1200,
        dateEnd: '14.02.2023',
        action: true,
        apply: true
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
        label: "Заявки",
    },
];

const Action: FC<{ el: any }> = ({ el }) => {
    const [isApply, setApply] = useState(el.apply);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();


    const handlePay = () => {
        onClose();
        console.log('pay now')
    }

    const handleLate = () => {
        onClose();
        console.log('pay later')
    }

    return (
        <>
            <span onClick={() => onOpen()} className={` font-bold cursor-pointer ${isApply ? 'text-default' : 'text-prime'}`}>Подать</span>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Подача заявки</ModalHeader>
                            <ModalBody>
                                <p>Оплатить сейчас или позже?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='bg-prime text-white hover:bg-primary-800' onPress={handlePay}>
                                    Сейчас
                                </Button>
                                <Button className='bg-red-400 text-red-700 hover:bg-red-300' onPress={handleLate}>
                                    Позже
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export const AllTourney = () => {
    return (
        <div className='w-full mt-4'>
            <AppTable cols={columns} rows={rows} onAction={(item) => <Action el={item} />} />
        </div>
    )
}

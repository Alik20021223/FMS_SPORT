'use client'
import React, { FC, useState } from 'react'
import { AppTable } from "@/components/core/Table/Table";
import CloseCom from "@/components/core/icons/iconClose";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

type TRow = {
    id: number;
    name: string;
    dateAt: string;
    dateEnd: string;
    type: string;
    placeAt: string;
    price: number;
    action: boolean;
    pay: boolean;
};

export type TColumn = {
    key: string;
    label: string;
};

const rows: TRow[] = [
    {
        id: 1,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        dateEnd: '14.02.2023',
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        price: 1200,
        action: true,
        pay: false
    },
    {
        id: 2,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        dateEnd: '14.02.2023',
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        price: 1200,
        action: true,
        pay: true
    },
];

const columns: TColumn[] = [
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
        label: "Место проведение",
    },
    {
        key: "price",
        label: "Стоимость",
    },
    {
        key: "action",
        label: "Заявки",
    },
];

const Action: FC<{ item: TRow }> = ({ item }) => {
    const [isPay, setPay] = useState(item.pay);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClose = () => {
        console.log('close')
        onClose();
    }

    const handlePay = () => {
        setPay(true)
        onClose();
    }

    return (
        <>
            {isPay ? (
                <span className="text-prime font-bold cursor-pointer">
                    Оплачен
                </span>
            ) : (
                <div className='flex items-center'>
                    <span onClick={() => onOpen()} className="text-white mr-1 py-[9px] px-2 rounded-[10px] bg-prime font-bold cursor-pointer">
                        Оплатить
                    </span>
                    <span className='cursor-pointer' style={{ width: 15, height: 15 }} onClick={handleClose}>
                        <CloseCom />
                    </span>
                </div>
            )
            }
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Оплата</ModalHeader>
                            <ModalBody>
                                <p>Вы точно хотите оплатить</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='bg-prime text-white hover:bg-primary-800' onPress={handlePay}>
                                    Да
                                </Button>
                                <Button className='bg-red-400 text-red-700 hover:bg-red-300' onPress={handleClose}>
                                    Отмена
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

const AppliedTournaments = () => {
    return (
        <div className='mt-9 w-full'>
            <p className='mb-5'>Поданные заявки</p>
            <div className='w-full'>
                <AppTable cols={columns} rows={rows} onAction={(item) => <Action item={item} />} />
            </div>
        </div>
    )
}

export default AppliedTournaments

'use client'
import React, { FC, useEffect, useState } from 'react'
import { AppTable } from "@/components/core/Table/Table";
import CloseCom from "@/components/core/icons/iconClose";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import axios from 'axios';

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
    status: string;
};

export type TColumn = {
    key: string;
    label: string;
};


const columns: TColumn[] = [
    {
        key: "name",
        label: "Турнир",
    },
    {
        key: "dateFrom",
        label: "Дата",
    },
    {
        key: "nomination",
        label: "Номинация",
    },
    {
        key: "address",
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
    const [isPay, setPay] = useState(item.status !== 'pending');
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
    const [rows, setRows] = useState<any[]>([])

    useEffect(() => {
        axios.get('/api/my-applications', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            let applications = res.data.data
            
            applications = applications.map((application: any) => {
                let dateFrom = new Date(application.tournament.dateFrom) 
                application.dateFrom = dateFrom.getDate() + '.' + (dateFrom.getMonth() + 1).toString().padStart(2, '0') + '.' + dateFrom.getFullYear()
                
                let dateTo = new Date(application.tournament.dateTo) 
                application.dateTo = dateTo.getDate() + '.' + (dateTo.getMonth() + 1).toString().padStart(2, '0') + '.' + dateTo.getFullYear()
                
                let appDeadline = new Date(application.tournament.applicationDeadline) 
                application.applicationDeadline = appDeadline.getDate() + '.' + (appDeadline.getMonth() + 1).toString().padStart(2, '0') + '.' + appDeadline.getFullYear()

                application.name = application.tournament.name
                application.address = application.tournament.address
                application.nomination = application.tournament.nomination
                application.price = application.tournament.price
                return application
            })
            setRows(applications)
        })
    }, [])

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

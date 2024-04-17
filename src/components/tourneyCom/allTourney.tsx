'use client'
import React, { FC, useEffect, useState } from 'react'
import { AppTable } from '../core/Table/Table';
import { useRouter } from 'next/navigation';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import { error } from 'console';

const columns = [
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
        location.reload()
    }

    const handleLate = () => {
        onClose();
        console.log('pay later')
        location.reload()
    }

    function handleApplication() {
        axios.post('/api/application/new', {tournamentId: el.id}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then(res => {
            onOpen()
        }, (err) => {
            onClose()
            alert(err.message)
        }).catch((err) => {
            onClose()
            alert(err.message)
        })
    }

    return (
        <>
            <span onClick={() => handleApplication()} className={` font-bold cursor-pointer ${isApply ? 'text-default' : 'text-prime'}`}>Подать</span>
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
    const [rows, setRows] = useState<any[]>([])

    useEffect(() => {
        axios.get('/api/tournaments', {
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
    return (
        <div className='w-full mt-4'>
            <AppTable cols={columns} rows={rows} onAction={(item) => <Action el={item} />} />
        </div>
    )
}

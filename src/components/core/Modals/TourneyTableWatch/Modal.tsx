import React, { FC } from 'react'
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { AppTable } from '../../Table/Table';
import { TRowContinue, TRowEnd, rowsContinue, rowsEnd, columns } from './data';
import { useRouter } from 'next/navigation';



type TDataModal = {
    id: number;
    name: string;
    dateAt: string;
    type: string;
    placeAt: string;
    price: number;
};

type TAddModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    data: TDataModal[];
};

const ActionContinue: FC<{ item: TRowContinue }> = ({ item }) => {

    const router = useRouter();


    const handleWatch = () => {
        console.log('watch')
        router.push('/tournaments/watchTourney')
    }

    const handleConnect = () => {
        console.log('connect')
    }

    return (
        <>
            {item.watch ?
            <span onClick={handleWatch} className='font-bold cursor-pointer text-prime'>Посмотреть</span>
            : (item.connect ? <span onClick={handleConnect} className='font-bold cursor-pointer text-prime'>Подключиться</span>
            : (item.undefined && <span className='font-bold text-default'>Недоступно</span>))}
        </>
    )
}

const ActionEnd: FC<{ item: TRowEnd }> = ({ item }) => {



    const handleWatch = () => {

        console.log('lox')
    }

    return (
        <>

            {item.watch ? (
                <span onClick={handleWatch} className='font-bold cursor-pointer text-prime'>Посмотреть</span>
            ) : (
                item.undefined && <span className='font-bold text-default'>Недоступно</span>
            )}
        </>
    )
}


const WatchModal = ({ isOpen, onOpen, onClose, data }: TAddModal) => {



    return (
        <div>
            <Modal classNames={{ closeButton: ["mt-4", "px-3"] }} backdrop='blur' className='!max-w-[746px] !bg-[#FCFCFC] rounded-2xl !py-4 !px-3' isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <p>Текущие турниры</p>
                                <div className="mt-10 w-full">
                                    <AppTable cols={columns} rows={rowsContinue} onAction={(item) => <ActionContinue item={item} />} tableClass="pl-4" />
                                </div>
                                <div className='mt-[87px]'>
                                    <p className='mb-5'>Завершенные турниры</p>
                                    <AppTable cols={columns} rows={rowsEnd} onAction={(item) => <ActionEnd item={item} />} tableClass="pl-4" />
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default WatchModal
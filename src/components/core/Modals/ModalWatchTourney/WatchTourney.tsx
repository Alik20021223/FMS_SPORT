import React, { FC } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Participant, TableTourney } from '@/components/core/TableTourneyWatch/TableTourney';



type TAddModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    data?: any;
};

const participants: Participant[] = [
    { id: 1, name: 'Иванов' },
    { id: 2, name: 'Петров' },
    { id: 3, name: 'Сидоров' },
    { id: 4, name: 'Кузьмин' },
];


const WatchTourney: FC<TAddModal> = ({ isOpen, onClose, onOpen, data }) => {
    return (
        <div>
            <Modal backdrop='transparent' classNames={{ closeButton: ["mt-4", "px-3"] }} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col">Просмотр турнира</ModalHeader>
                            <ModalBody>
                                <Button className='bg-prime text-white hover:bg-prime-800' onPress={() => onClose()}>
                                    Вывести на экран
                                </Button>
                                <TableTourney participants={participants} />
                            </ModalBody>
                            <ModalFooter >

                                <Button className='bg-prime text-white hover:bg-prime-800' onPress={() => onClose()}>
                                    Отказан
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default WatchTourney
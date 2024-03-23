import React, { FC } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import BlockArrow from '../../BlockArrow/BlockArrow';



type TAddModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    data?: string;
};


const ModalProtest: FC<TAddModal> = ({ isOpen, onClose, onOpen, data }) => {
    return (
        <div>
            <Modal classNames={{ closeButton: ["mt-4", "px-3"] }} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col">Протест</ModalHeader>
                            <ModalBody>
                                <BlockArrow isEditable={true} label={"Подать"} className='!mt-1 !rounded-[20px]' rightValue={data} />
                                <div className='p-4 bg-[#F5F5F5] rounded-[20px]'><p className='ml-4'>Принять</p></div>
                            </ModalBody>
                            <ModalFooter >
                                <Button className='bg-prime text-white hover:bg-prime-300' onPress={() => onClose()}>
                                    Удовлетворен
                                </Button>
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

export default ModalProtest
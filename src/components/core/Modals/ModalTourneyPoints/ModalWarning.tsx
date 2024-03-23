import React, { FC } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import BlockArrow from '../../BlockArrow/BlockArrow';



type TAddModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    data?: number;
};


const ModalWarning: FC<TAddModal> = ({ isOpen, onClose, onOpen, data }) => {
    return (
        <div>
            <Modal classNames={{ closeButton: ["mt-4", "px-3"] }} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col">Предупреждение</ModalHeader>
                            <ModalBody>
                                <div className='p-4 rounded-[20px] text-center bg-red-300 px-[69px]'>Нанесена травма</div>
                                <BlockArrow isEditable={true} label={"Добавить предупреждение"} className='!mt-1 !rounded-[20px]' rightValue={data} />
                            </ModalBody>
                            <ModalFooter className='flex justify-center'>
                                <Button className='bg-prime w-full text-white hover:bg-prime-800' onPress={() => onClose()}>
                                    Ок
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalWarning
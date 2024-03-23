import React, { FC } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import BlockArrow from '../../BlockArrow/BlockArrow';
import ModalWarning from './ModalWarning';
import ModalProtest from './ModalProtest';

type TDataModalObject = {
    id: number,
    name: string
}

type TDataModal = {
    fighterOne: TDataModalObject,
    fighterTwo: TDataModalObject,
    pointA: number,
    pointB: number,
    protest: string,
    warning: number
}

type TAddModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    data?: TDataModal;
};

export const ModalPoints: FC<TAddModal> = ({ isOpen, onClose, onOpen, data }) => {


    const { isOpen: isOpenWarn, onOpen: onOpenWarn, onClose: onCloseWarn } = useDisclosure();
    const { isOpen: isOpenProtest, onOpen: onOpenProtest, onClose: onCloseProtest } = useDisclosure();

    return (
        <div>
            <Modal classNames={{ closeButton: ["mt-4", "px-3"] }} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col">{data?.fighterOne.name}</ModalHeader>
                            <ModalBody>
                                <BlockArrow isEditable={true} label={"Очки"} className='!mt-1 !rounded-[20px]' rightValue={data?.pointA} />
                                <div onClick={()=> onOpenWarn()} className='p-4 w-full flex justify-between   bg-[#F5F5F5] rounded-[20px]'>
                                    <p className='ml-4'>Предупреждение</p>
                                    {data?.warning}
                                </div>
                                <div onClick={()=> onOpenProtest()} className='p-4 w-full flex justify-between  bg-[#F5F5F5] rounded-[20px]'>
                                    <p className='ml-4'>Протест</p>
                                    {data?.protest}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='bg-prime text-white hover:bg-prime-800' onPress={() => onClose()}>
                                    Ок
                                </Button>
                                <Button className='bg-prime text-white hover:bg-prime-300' onPress={() => onClose()}>
                                    Завершить бой
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <ModalWarning isOpen={isOpenWarn} onOpen={onOpenWarn} onClose={onCloseWarn} data={data?.warning} />
            <ModalProtest isOpen={isOpenProtest} onOpen={onOpenProtest} onClose={onCloseProtest} data={data?.protest} />
        </div>

    )
}

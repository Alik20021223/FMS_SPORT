'use client'
import { Modal, ModalContent, ModalBody, Button, Select, SelectItem, Textarea, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { role } from '../data';
import { AthletesModal } from '../../Modals/AthltetesModal/page';

interface ModalApplyApp {
    item?: any;
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
}

export const ModalApply = ({ isOpen, item, onOpen, onClose }: ModalApplyApp) => {
    const [isAccepted, setIsAccepted] = useState<boolean>(true);
    const [selectedRole, setSelectedRole] = useState<Set<string>>(new Set());
    const [rejectionReason, setRejectionReason] = useState<string>("");

    const {isOpen: isOpenData, onOpen: onOpenData, onClose: onCloseData} = useDisclosure()

    const handleApply = (accept: boolean) => {
        setIsAccepted(accept);
        if (!accept) {
            setSelectedRole(new Set());
        }
    };

    const handleSubmit = () => {
        const formData = new FormData();
        if (isAccepted) {
            formData.append('role', Array.from(selectedRole).join(', '));
        } else {
            formData.append('rejectionReason', rejectionReason);
        }
        // Add other form handling logic here
        console.log('Form data:', formData.get('rejectionReason'));
    };

    return (
        <Modal
            backdrop="blur"
            classNames={{ closeButton: ["mt-2", "px-3"] }}
            className="!max-w-[400px] !bg-[#FCFCFC] rounded-2xl mt-10 ml-10"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent style={{ maxHeight: 'calc(100vh - 20px)', overflowY: 'auto' }}>
                <ModalBody>
                    <div className='mt-10 space-y-5'>
                        <Button 
                        // onClick={() => onOpenData()}
                        >{item?.full_name}</Button>
                        <AthletesModal isOpen={isOpenData} onOpen={onOpenData} onClose={onCloseData} club={false} />
                        <div className='flex justify-between'>
                            <Button onClick={() => handleApply(true)} color='primary'>Принять</Button>
                            <Button onClick={() => handleApply(false)} color='danger'>Отклонить</Button>
                        </div>
                        <div className="flex w-full justify-center flex-col space-y-5">
                            {isAccepted ? (
                                <Select
                                    label="Роль"
                                    aria-label='roleSelect'
                                    labelPlacement='outside'
                                    variant="flat"
                                    placeholder='Выберите роль'
                                    selectedKeys={selectedRole}
                                    className="max-w-xs"
                                    onSelectionChange={(keys) => setSelectedRole(keys as Set<string>)}
                                >
                                    {role.map((roleItem) => (
                                        <SelectItem key={roleItem.value} value={roleItem.value}>
                                            {roleItem.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            ) : (
                                <Textarea
                                    label="Причина отказа"
                                    labelPlacement='outside'
                                    placeholder="Напишите причину отказа"
                                    className="max-w-xs"
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                />
                            )}
                            <Button onClick={handleSubmit} color='primary'>Подтвердить</Button>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

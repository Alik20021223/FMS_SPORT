'use client'
import React, { useState } from 'react'
import ProfileBlock from "@/components/core/profileBlock/profileBlock";
import Image from "next/image";
import EditModal from "@/components/core/Modals/EditModal/EditModal";
import { FAppDetails } from '@/components/core/familyBlock/AppFamily';
import { AppButton } from '@/components/core/Button/AppButton';
import { FamilyModal } from '@/components/core/Modals/FamilyModal/FamilyModal';
import { useDisclosure } from '@nextui-org/react';

const FamilyApp = (props: any) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleClick = () => {
        onOpen();
    }

    return (
        <>
            <div className='flex flex-col'>
                <ProfileBlock className="flex ">
                    <Image
                        src={"/static/" + props?.data?.photo}
                        width={90}
                        height={90}
                        className="rounded-full"
                        alt="profile_photo"
                    />
                    <div className="ml-10">
                        <p className="text-base text-dark font-medium">{props?.data?.email}</p>
                        <p className="text-base text-dark font-medium">
                            {props?.data?.surname} {props?.data?.name} {props?.data?.patronymic}
                        </p>
                        <p className="text-base text-dark font-medium">{props?.data?.birth ? new Date(props?.data?.birth).toLocaleDateString() : 'День рождение не указано!'}</p>
                    </div>
                    <Image
                        src={"/assets/img/iconPers/edit.svg"}
                        width={18}
                        height={18}
                        alt=""
                        className="ml-auto cursor-pointer"
                        onClick={() => setIsEditModalOpen(!isEditModalOpen)}
                    />
                </ProfileBlock>

                {isEditModalOpen && (
                    <EditModal onClose={() => setIsEditModalOpen(!isEditModalOpen)} />
                )}
                <div className='mt-[33px]'>
                    <FAppDetails data={props?.data.relatives} />
                </div>
            </div>
            <div className='flex justify-end'>
                <AppButton onClick={handleClick} className='px-[10%]' color='prime' size='sm' >
                    Добавить
                </AppButton>
                <FamilyModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            </div>
        </>
    )
}

export default FamilyApp
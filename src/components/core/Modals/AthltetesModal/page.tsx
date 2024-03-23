import React from 'react'
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import ProfileBlock from '@/components/core/profileBlock/profileBlock';
import Image from 'next/image';
import { TabPage } from '@/components/core/TabPage/TabPage';
import { user, tabs } from "./data";
import { AchievCom } from './AchievCom';
import { AntropCom } from './antropCom';
import { UserCom } from './userCom';
import { FamilyCom } from './FamilyCom';
import { ClubCom } from './clubCom';

type TAddModal = {
    item?: any;
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
};


export const AthletesModal = ({ isOpen, item, onOpen, onClose }: TAddModal) => {
    return (
        <Modal
            backdrop="blur"
            classNames={{ closeButton: ["mt-2", "px-3"] }}
            className="!max-w-[846px] !bg-[#FCFCFC] rounded-2xl mt-10 ml-10"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent style={{ maxHeight: 'calc(100vh - 20px)', overflowY: 'auto' }}>
                <ModalBody>
                    <ProfileBlock className="flex mt-10">
                        <Image
                            src={"/assets/img/user-avatar.png"}
                            width={90}
                            height={90}
                            className="rounded-full border-2 border-prime"
                            alt="profile_photo"
                        />
                        <div className="ml-10">
                            <p className="text-base text-dark font-medium">{user.person.email}</p>
                            <p className="text-base text-dark font-medium">
                                {user.person.surname} {user.person.name} {user.person.patronymic}
                            </p>
                            <p className="text-base text-dark font-medium">{new Date(user.person.createdAt).toLocaleDateString()}</p>
                        </div>
                    </ProfileBlock>
                    <TabPage tabs={tabs} components={
                        [
                            <UserCom props={user.userData} />,
                            <AntropCom anthropometry={user.anthropometry} />,
                            <FamilyCom data={user.family} />,
                            <AchievCom data={user.achievement.data} dataTour={user.achievement.dataTour} />,
                            <ClubCom />
                        ]
                    }
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};


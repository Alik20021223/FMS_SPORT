import React, { useState } from 'react'
import ProfileBlock from "../core/profileBlock/profileBlock";
import Image from "next/image";
import EditModal from "../core/Modals/EditModal/EditModal";
import { AchAppType, AchievementCom } from '../core/AchievementCom/AchievementCom';
import { TournamentCom, TourAppType } from '../core/AchTourCom/Tournament'
import { PersonalState } from '@/app/interfaces/Person';

const dataAch: AchAppType[] = [
    {
        id: 1,
        name: 'Щит и меч',
        rate: 1,
        rateGame: '12/1/6',
        action: true,
    },
    {
        id: 2,
        name: 'Сабля',
        rate: 3,
        rateGame: '2/1/1',
        action: true,
    },
]

const dataTour: TourAppType[] = [
    {
        id: 1,
        tour: 'Турнир 3-х',
        name: 'Щит и меч',
        rate: 1,
        date: '22.06.2022',
    },
    {
        id: 2,
        tour: 'Три богатыря',
        name: 'Сабля',
        rate: 3,
        date: '14.01.2022',
    },
]
type TUserInfoProps = {
    data: PersonalState
}
const AchievementApp = ({ data }: TUserInfoProps) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

    return (
        <>
            <div className='flex flex-col'>
                <ProfileBlock className="flex ">
                    <Image
                        src={"/static/" + data.photo}
                        width={90}
                        height={90}
                        className="rounded-full"
                        alt="profile_photo"
                    />
                    <div className="ml-10">
                        <p className="text-base text-dark font-medium">{data.email}</p>
                        <p className="text-base text-dark font-medium">
                            {data.surname} {data.name} {data.patronymic}
                        </p>
                        <p className="text-base text-dark font-medium">{data.birth ? new Date(data.birth).toLocaleDateString() : 'День рождение не указано!'}</p>
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
                <AchievementCom data={dataAch} />
                <div className='mt-10'>
                    <TournamentCom data={dataTour} />
                </div>
            </div>
        </>
    )
}

export default AchievementApp
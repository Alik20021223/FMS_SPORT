import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import { TColumn } from '@/components/tourneyCom/applyTourney';
import { AppTable } from '@/components/core/Table/Table';

export type AchAppType = {
    id: number;
    name: string;
    rate: number;
    rateGame: string;
    action: boolean;
};

type AchAppProps = {
    data: AchAppType[];
};

const columns: TColumn[] = [
    {
        key: "name",
        label: "Номинация",
    },
    {
        key: "rate",
        label: "Рейтинг",
    },
    {
        key: "rateGame",
        label: "побед / поражений / ничья",
    },
    {
        key: "action",
        label: "",
    },
];

const Action: FC<{ item: AchAppType }> = ({ item }) => {
    const [isApply, setApply] = useState(item.action);

    const handleReset = () => {
        console.log(isApply);
    }

    return (
        <>
            <Image src='/assets/img/Vector.svg' width={18} height={18} alt='update' onClick={handleReset} />
        </>
    );
};


export const AchievementCom = ({ data }: AchAppProps) => {
    return (
        <div className='mt-8'>
            <h1>Достижения</h1>
            <div className='mt-4'>
                <AppTable cols={columns} rows={data} onAction={(item) => <Action item={item} />} tableClassPy="py-6" />
            </div>
        </div>
    );
};



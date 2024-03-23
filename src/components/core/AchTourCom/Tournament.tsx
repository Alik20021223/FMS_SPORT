import React from 'react'
import { TColumn } from '@/components/tourneyCom/applyTourney';
import { AppTable } from '@/components/core/Table/Table';

export type TourAppType = {
    id: number;
    tour: string;
    name: string;
    rate: number;
    date: string;
};

type TourAppProps = {
    data: TourAppType[];
};

const columns: TColumn[] = [
    {
        key: "tour",
        label: "Турнир",
    },
    {
        key: "name",
        label: "Номинация",
    },
    {
        key: "rate",
        label: "Результат",
    },
    {
        key: "date",
        label: "Дата",
    },
];



export const TournamentCom = ({ data }: TourAppProps) => {
    return (
        <div className='mt-8'>
            <h1>Турниры</h1>
            <div className='mt-4'>
                <AppTable cols={columns} rows={data} tableClassPy="py-6" />
            </div>
        </div>
    )
}


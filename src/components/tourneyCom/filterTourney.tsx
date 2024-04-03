'use client'
import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { ExpandMore } from '@mui/icons-material';
import { ageFilter, sexFilter, leagueFilter, nominationFilter, townFilter } from './data';
import { Checkbox } from "@nextui-org/react";

const btnClass = {
    trigger: [
        "shadow-none",
        "rounded-md",
        "border",
        "p-5",
        "h-[45px]",
        "min-h-0",
        "bg-[#fff]"
    ],
    popoverContent: [
        "rounded-xl",
        "bg-[#f1f1f1]",
    ],
};

export const FilterTourney = () => {
    return (
        <div className='mt-5'>
            <div className='flex w-full flex-col'>
                <p>Турниры</p>
                <div className='flex flex-col w-[90%] ml-[10%]  items-center'>
                    <div className='flex w-full justify-between'>
                        <div className='flex items-center'>
                            <p>Возраст</p>
                            <Select
                                placeholder="12-18"
                                classNames={btnClass}
                                className='w-[130px] ml-3'
                                disableSelectorIconRotation
                                selectorIcon={<ExpandMore />}
                            >
                                {ageFilter.map((item) => (
                                    <SelectItem key={item.id} value={item.age}>
                                        {item.age}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className='flex items-center'>
                            <p>Пол</p>
                            <Select
                                placeholder="Смешанный"
                                classNames={btnClass}
                                className='w-[200px] ml-3'
                                disableSelectorIconRotation
                                selectorIcon={<ExpandMore />}
                            >
                                {sexFilter.map((item) => (
                                    <SelectItem key={item.id} value={item.sex}>
                                        {item.sex}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className='flex items-center'>
                            <p>Лига</p>
                            <Select
                                placeholder="А"
                                classNames={btnClass}
                                className='w-[130px] ml-3'
                                disableSelectorIconRotation
                                selectorIcon={<ExpandMore />}
                            >
                                {leagueFilter.map((item) => (
                                    <SelectItem key={item.id} value={item.league}>
                                        {item.league}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className='flex mt-[10px] items-center w-full'>
                        <p>Номинация</p>
                        <Select
                            classNames={btnClass}
                            className='ml-3'
                            disableSelectorIconRotation
                            selectorIcon={<ExpandMore />}
                        >
                            {nominationFilter.map((item) => (
                                <SelectItem key={item.id} value={item.nomination}>
                                    {item.nomination}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className='flex mt-[10px] items-center w-full'>
                        <div className='w-[25%] flex items-center'>
                            <p>Доступно мне</p>
                            <Checkbox color='primary' className='ml-3' radius='lg' classNames={{ wrapper: ["w-[25px]", "h-[25px]"] }} />
                        </div>
                        <div className='flex w-[75%] items-center'>
                            <p>Город</p>
                            <Select
                                classNames={btnClass}
                                className='ml-3'
                                disableSelectorIconRotation
                                selectorIcon={<ExpandMore />}
                            >
                                {townFilter.map((item) => (
                                    <SelectItem key={item.id} value={item.town}>
                                        {item.town}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

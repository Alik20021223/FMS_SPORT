'use client'
import React from 'react';
import { AppButton } from '../core/Button/AppButton';
import { Select, SelectItem } from "@nextui-org/react";
import { ExpandMore } from '@mui/icons-material';

export const TheFeedback = () => {

    const btnClass = {
        trigger: [
            "shadow-none",
            "rounded-[20px]",
            "border",
            "p-5",
            "h-[45px]",
            "min-h-0",
            "bg-[#F5F5F5]"
        ],
        popoverContent: [
            "rounded-xl",
            "bg-[#F5F5F5]",
        ],
    };

    const typeOfFeedBack = [
        { id: 1, feedBack: 'Обращение' },
        { id: 2, feedBack: 'Поддержка' },
        { id: 3, feedBack: 'Запрос' },
    ]

    return (
        <div>
            <h1 className='font-bold text-2xl mb-[132px] leading-7'>Обратная связь</h1>
            <div className='bg-[#FCFCFC] w-[719px] h-[528px] rounded-[20px]'>
                <form action="onSubmit" className='w-full pl-8 pt-10 pr-9 pb-6 flex flex-col'>
                    <div className='mb-[23px]'>
                        <Select
                            placeholder='Обращение'
                            classNames={btnClass}
                            className='w-full'
                            disableSelectorIconRotation
                            selectorIcon={<ExpandMore />}
                        >
                            {typeOfFeedBack.map((item) => (
                                <SelectItem key={item.id} value={item.feedBack}>
                                    {item.feedBack}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className='h-[315px] bg-[#F5F5F5] rounded-[20px] p-5'>
                        <textarea className='w-full h-full bg-transparent border-none outline-none' placeholder='Введите сюда текст вашего обращения'></textarea>
                    </div>
                    <AppButton color='prime' size='sm' className='!w-1/2 mt-6 flex self-end'>Отправить</AppButton>
                </form>
            </div>
        </div>
    );
};


'use client'

import React, { useState } from 'react'
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { ExpandMore } from '@mui/icons-material';
import CustomCheckbox from '../core/checkbox';

export const SearchForm = () => {
    const [selectedCity, setSelectedCity] = useState<string>("");

    const cities = [
        { txt: 'Брянск', id: 1 },
        { txt: 'Москва', id: 2 },
        { txt: 'Chicago', id: 3 },
    ];

    const nomination = [
        { id: 1, txt: 'Щит и меч' },
        { id: 2, txt: 'Сабля' },
        { id: 3, txt: 'Щит и меч, Сабля' },
    ];

    const btnClass = {
        trigger: [
            "shadow-none",
            "bg-white",
            "rounded-md",
            "border-1",
            "p-5",
            "h-[45px]"
        ],
        popoverContent: [
            "rounded-xl",
            "bg-[#f1f1f1]",
        ],
    };



    return (
        <div className='w-full'>
            <div>
                <div className='flex'>
                    <div className='w-[35%] mr-[20px] flex flex-col items-start'>
                        <p>Название</p>
                        <Input type='text' placeholder='Кветунь' className='border rounded-md' classNames={{ inputWrapper: 'h-[45px]' }}></Input>
                    </div>
                    <div className='w-[35%] flex flex-col items-start'>
                        <p>Город</p>
                        <Select
                            disableSelectorIconRotation
                            classNames={btnClass}
                            selectorIcon={< ExpandMore />}
                            label="Выберите город"
                            className='border rounded-md'
                            selectedKeys={[selectedCity]}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            {cities.map((city) => (
                                <SelectItem key={city.id} value={city.txt} className='rounded-full hover:bg-[#b7b7b7cc]'>
                                    {city.txt}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className='flex flex-col mt-5'>
                    <p>Возраст</p>
                    <div className='mt-1.5 flex'>
                        <div className="custom-checkbox ">
                            <CustomCheckbox>дети</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-14">
                            <CustomCheckbox>подростки</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-14">
                            <CustomCheckbox>взрослые</CustomCheckbox>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-5'>
                    <p>Лига</p>
                    <div className='mt-1.5 flex'>
                        <div className="custom-checkbox ">
                            <CustomCheckbox>a</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>b</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>c</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>d</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>e</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>f</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>g</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>h</CustomCheckbox>
                        </div>
                        <div className="custom-checkbox ml-6">
                            <CustomCheckbox>i</CustomCheckbox>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-5 w-[70%]'>
                    <p>Номинация</p>
                    <div className='mt-1.5'>
                        <Select
                            disableSelectorIconRotation
                            classNames={btnClass}
                            selectorIcon={< ExpandMore />}
                            label="Выберите номинацию"
                            className='border rounded-md'
                            selectedKeys={[selectedCity]}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            {nomination.map((item) => (
                                <SelectItem key={item.id} value={item.txt} className='rounded-full hover:bg-[#b7b7b7cc]'>
                                    {item.txt}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className='mt-5 flex justify-end w-[70%]'>
                    <Button className='py-[10px] px-[140px] bg-prime rounded-[10px] text-white' >Поиск клуба</Button>
                </div>
            </div>
        </div>
    )
}

'use client'

import React, { useState } from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import Image from 'next/image';
import { ExpandMore } from '@mui/icons-material';
import { Button } from '@nextui-org/react';

import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

type TAddModal = {
    isOpen: boolean,
    onOpen: () => void;
    onClose: () => void;
};

export const btnClass = {
    trigger: [
        "shadow-none",
        "bg-white",
        "rounded-md",
        "border-2",
        "p-5",
        "h-[45px]"
    ],
    popoverContent: [
        "rounded-xl",
        "bg-white",
    ],
};

const cities = [
    { txt: 'Phoenix', id: 1 },
    { txt: 'Houston', id: 2 },
    { txt: 'Chicago', id: 3 },
];

const Fio = [
    { txt: 'Иванов Игорь', id: 1 },
    { txt: 'Иванов Игорь', id: 2 },
    { txt: 'Иванов Игорь', id: 3 },
    { txt: 'Иванов Игорь', id: 4 },
]

const StatusFam = [
    { txt: 'Сын', id: 1 },
    { txt: 'Дочь', id: 2 },
    { txt: 'Жена', id: 3 },
]





export const FamilyModal = ({ isOpen, onOpen, onClose }: TAddModal) => {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [selectedFio, setSelectedFio] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<string>("");

    const disable = !!(selectedStatus && selectedFio && selectedCity);

    console.log(selectedCity, selectedFio, selectedStatus)

    return (
        <div>
            <Modal backdrop='blur' className='!max-w-[490px] bg- !h-[90%] rounded-2xl mt-10 ml-10 bg-[#FCFCFC]' isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className='px-10 pt-8 relative'>
                                    <h1>Добавить члена семьи</h1>
                                    <div className='py-5'>
                                        <label>
                                            Город
                                            <Select
                                                disableSelectorIconRotation
                                                classNames={btnClass}
                                                selectorIcon={< ExpandMore />}
                                                selectedKeys={[selectedCity]}
                                                onChange={(e) => setSelectedCity(e.target.value)}
                                            >
                                                {cities.map((city) => (
                                                    <SelectItem key={city.id} value={city.txt} className='rounded-full hover:bg-[#b7b7b7cc]'>
                                                        {city.txt}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </label>
                                        <label>
                                            ФИО
                                            <Select
                                                disableSelectorIconRotation
                                                classNames={btnClass}
                                                selectorIcon={< ExpandMore />}
                                                selectedKeys={[selectedFio]}
                                                onChange={(e) => setSelectedFio(e.target.value)}
                                            >
                                                {Fio.map((fio) => (
                                                    <SelectItem key={fio.id} value={fio.txt} className='rounded-full hover:bg-[#b7b7b7cc]'>
                                                        {fio.txt}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </label>
                                    </div>
                                    <span className='border-b-4 border-[#D9D9D9] w-[500px] absolute left-[-30px] '></span>
                                </div>
                                <div className='px-10 relative'>
                                    <div className='py-5'>
                                        <div className='flex mb-6 items-center'>
                                            <Image
                                                src={"/assets/img/SonImg.svg"}
                                                width={100}
                                                height={100}
                                                className="object-cover rounded-full border-2 border-primary"
                                                alt="profile_photo"
                                            />
                                            <div className='ml-6'>
                                                <p>Иванов Игорь</p>
                                                <p>г.Брянск</p>
                                            </div>
                                        </div>
                                        <label>
                                            Статус
                                            <Select
                                                disableSelectorIconRotation
                                                classNames={btnClass}
                                                selectorIcon={< ExpandMore />}
                                                selectedKeys={[selectedStatus]}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                            >
                                                {StatusFam.map((status) => (
                                                    <SelectItem key={status.id} value={status.txt} className='rounded-full hover:bg-[#b7b7b7cc]'>
                                                        {status.txt}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </label>
                                    </div>
                                    <span className='border-b-4 border-[#D9D9D9] w-[500px] absolute left-[-30px] '></span>
                                </div>
                                <div className='px-6 mt-4'>
                                    <Button disabled={disable} className={`${disable ? ' text-white  bg-primary hover:bg-primary-800' : 'bg-[#F5F5F5] text-[#C0C0C0]'} py-[10px] font-semibold rounded-xl w-full`}>
                                        Добавить
                                    </Button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}





'use client'

import React, { useEffect, useState } from 'react'
import { Autocomplete, AutocompleteItem, Select, SelectItem } from "@nextui-org/react";
import Image from 'next/image';
import { ExpandMore } from '@mui/icons-material';
import { Button } from '@nextui-org/react';

import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import axios from 'axios';

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

export const FamilyModal = ({ isOpen, onOpen, onClose }: TAddModal) => {
    const [city, setCity] = useState<any>();
    const [cityList, setCityList] = useState<any[]>([]);
    const [user, setUser] = useState<any>()
    const [selectedUser, setSelectedUser] = useState<any>()
    const [userList, setUserList] = useState<any[]>([]);
    const [status, setStatus] = useState<any>()

    const [statusList, setStatusList] = useState<any[]>([
        {
            id: 1,
            value: "Супруг(а)"
        },
        {
            id: 2,
            value: "Ребенок"
        },
        {
            id: 3,
            value: "Родитель"
        },
        {
            id: 4,
            value: "Брат/Сестра"
        },
        {
            id: 5,
            value: "Дедушка/Бабушка"
        },
        {
            id: 6,
            value: "Внук(иня)"
        },
        {
            id: 7,
            value: "Дядя"
        },
        {
            id: 8,
            value: "Тетя"
        },
        {
            id: 9,
            value: "Двоюродный(ая) брат/сестра"
        },
        {
            id: 10,
            value: "Племянник"
        },
        {
            id: 11,
            value: "Племянница"
        },
        {
            id: 12,
            value: "Родственник(ца) по браку"
        }
    ])

    function showPrompt(value: string) {
        axios.post('/suggestions/api/4_1/rs/suggest/address', {
            query: value,
            from_bound: { value: "city" },
            to_bound: { value: "city" }
        }, {
            headers: {
                'Authorization': 'Token 8ea8222f7a7784ba26078fb524744d19355e1b3c'
            }
        }).then((res: any) => {
            setCityList(res.data.suggestions)
        })
    }

    const disable = !!(status && selectedUser && city);

    useEffect(() => {
        axios.get('/api/user-sprotsmens', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            setUserList(res.data.sportsmens)
        })
    }, [])

    useEffect(() => {
        setSelectedUser(userList.find(item => item.id === parseInt(user)))
    }, [user])

    useEffect(() => {
        setUserList(userList.filter(item => item.city === city))
    }, [city])

    function addRelative() {
        axios.post('/api/add-relative', {
            relative: parseInt(user),
            relationship: statusList.find(item => item.id === parseInt(status)).value
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            setUserList(res.data.sportsmens)
        })
    }

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

                                        <Autocomplete
                                            label='Город'
                                            items={cityList}
                                            selectedKey={city}
                                            onSelectionChange={setCity}
                                            onInputChange={showPrompt}
                                            labelPlacement='outside'>
                                            {(item) => <AutocompleteItem key={item.data.city}>{item.value}</AutocompleteItem>}
                                        </Autocomplete>

                                        <Autocomplete
                                            label='ФИО'
                                            items={userList}
                                            selectedKey={user}
                                            onSelectionChange={setUser}
                                            labelPlacement='outside'>
                                            {(item) => <AutocompleteItem key={item.id}>{`${item.surname} ${item.name} ${item.patronymic}`}</AutocompleteItem>}
                                        </Autocomplete>
                                    </div>
                                    <span className='border-b-4 border-[#D9D9D9] w-[500px] absolute left-[-30px] '></span>
                                </div>
                                {selectedUser
                                    ? (
                                        <div className='px-10 relative'>
                                            <div className='py-5'>
                                                <div className='flex mb-6 items-center'>
                                                    <Image
                                                        src={"/static/" + selectedUser.photo}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover rounded-full border-2 border-primary"
                                                        alt="profile_photo"
                                                    />
                                                    <div className='ml-6'>
                                                        <p>{selectedUser?.surname} {selectedUser?.name}</p>
                                                        {/* <p>{city}</p> */}
                                                    </div>
                                                </div>
                                                <Autocomplete
                                                    label='Статус'
                                                    defaultItems={statusList}
                                                    selectedKey={status}
                                                    onSelectionChange={setStatus}
                                                    labelPlacement='outside'>
                                                    {(item) => <AutocompleteItem key={item.id}>{item.value}</AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                            <span className='border-b-4 border-[#D9D9D9] w-[500px] absolute left-[-30px] '></span>
                                        </div>
                                    )
                                    : (<p className='px-10'>Выберите родственника!</p>)
                                }

                                <div className='px-6 mt-4'>
                                    <Button onPress={() => {addRelative(); onClose(); location.reload()}} disabled={disable} className={`${disable ? ' text-white  bg-primary hover:bg-primary-800' : 'bg-[#F5F5F5] text-[#C0C0C0]'} py-[10px] font-semibold rounded-xl w-full cursor-pointer`}>
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





'use client'

import { nominationFilter, townFilter } from "@/components/tourneyCom/data";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { TableAthletes } from "@/app/(private)/athletes/_components/table";
import { Club } from "@/app/interfaces/Club";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Container() {

    const InputWrapper = {
        inputWrapper: ['bg-white', 'border', 'h-[45px]', 'min-h-0'],
    }

    const btnClass = {
        trigger: [
            "shadow-none",
            "bg-white",
            "rounded-md",
            "border-2",
            "p-5",
            "h-[45px]",
            "min-h-0",
        ],
        popoverContent: [
            "rounded-xl",
            "bg-white",
        ],
    };

    const ageFilter = [
        { id: 1, value: '12-14' },
        { id: 2, value: '12-14' },
        { id: 3, value: '12-14' },
        { id: 4, value: '12-14' },
        { id: 5, value: '12-14' },
    ]


    const [rows, setRows] = useState<Club[]>([])

    useEffect(() => {
        axios.get('/api/clubs', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            setRows(res.data.clubs)
        })
    }, [])

    const columns = [
        {
            key: 'id',
            label: '№'
        },
        {
            key: 'name',
            label: 'Название'
        },
        {
            key: 'city',
            label: 'Город'
        },
        {
            key: 'league',
            label: 'Лига'
        },
        {
            key: 'nomination',
            label: 'Номинация'
        },
    ]

    const LeagueFilter = [
        {
            id: 1,
            txt: 'A',
        },
        {
            id: 2,
            txt: 'B',
        },
        {
            id: 3,
            txt: 'C',
        },
        {
            id: 4,
            txt: 'D',
        },
        {
            id: 5,
            txt: 'E',
        },
        {
            id: 6,
            txt: 'F',
        },
        {
            id: 7,
            txt: 'G',
        },
        {
            id: 8,
            txt: 'H',
        },
        {
            id: 9,
            txt: 'I',
        },
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="flex flex-wrap max-w-[1200px]">
                <h4 className="section__heading w-[100%] font-bold text-xl">Клубы</h4>
                <form className="w-full mt-3" onSubmit={handleSubmit}>
                    <div className="w-[100%] justify-between flex">
                        <div className="w-[46%]">
                            <label aria-label="Название">
                                <p className="mb-2">Название</p>
                                <Input type="text" className="w-full" placeholder="Кветунь" classNames={InputWrapper} />
                            </label>
                        </div>
                        <div className="w-[46%]">
                            <label aria-label="Town">
                                <p className="mb-2">Город</p>
                                <Select
                                    placeholder="Москва"
                                    classNames={btnClass}
                                >
                                    {townFilter.map((item) => (
                                        <SelectItem key={item.id} value={item.town}>
                                            {item.town}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </label>
                        </div>
                    </div>
                    <div className="w-[80%] mt-4">
                        <label aria-label="Town">
                            <p className="mb-2">Лига</p>
                            <Select
                                placeholder="Лиги"
                                selectionMode="multiple"
                                classNames={btnClass}
                            >
                                {LeagueFilter.map((item) => (
                                    <SelectItem key={item.id} value={item.txt}>
                                        {item.txt}
                                    </SelectItem>
                                ))}
                            </Select>
                        </label>
                    </div>
                    <div className="w-[80%] mt-4">
                        <h3>Возраст</h3>
                        <Select
                            className="w-[100%] mt-2"
                            placeholder="12-14"
                            classNames={btnClass}
                        >
                            {nominationFilter.map((item) => (
                                <SelectItem key={item.id} value={item.nomination}>
                                    {item.nomination}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="w-[80%] mt-4">
                        <label aria-label="Nomination">
                            <p className="mb-2">Номинация</p>
                            <Select
                                placeholder="Сабля"
                                classNames={btnClass}
                            >
                                {nominationFilter.map((item) => (
                                    <SelectItem key={item.id} value={item.nomination}>
                                        {item.nomination}
                                    </SelectItem>
                                ))}
                            </Select>
                        </label>
                    </div>
                    <div className="w-[80%] mt-8 flex justify-end">
                        <Button type="submit" className="py-[10px] w-[70%] bg-prime text-white">Поиск клуба</Button>
                    </div>
                </form>
                <div className="w-[100%] mt-9">
                    <TableAthletes cols={columns} rows={rows} />
                </div>
            </div>
        </>
    )
}
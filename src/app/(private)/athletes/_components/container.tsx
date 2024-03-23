'use client'

import { nominationFilter } from "@/components/tourneyCom/data";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { TableAthletes } from "./table";
import { useDisclosure } from '@nextui-org/react';
import { AthletesModal } from "@/components/core/Modals/AthltetesModal/page";


export default function Container() {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const InputWrapper = {
        inputWrapper: ['bg-white', 'border', 'h-[45px]', 'min-h-[45px]'],
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


    const rows = [
        {
            id: 1,
            number: 1,
            surname: 'Иванов',
            name: 'Иван',
            secondName: 'Иванович',
            city: 'Москва',
            age: '32',
            club: 'Кветунь',
            rate: '96'
        },
        {
            id: 2,
            number: 2,
            surname: 'Иванов',
            name: 'Иван',
            secondName: 'Иванович',
            city: 'Брянск',
            age: '32',
            club: 'Кветунь',
            rate: '96'
        },
        {
            id: 3,
            number: 3,
            surname: 'Иванов',
            name: 'Иван',
            secondName: 'Иванович',
            city: 'Москва',
            age: '32',
            club: 'Кветунь',
            rate: '96'
        },
    ]

    const columns = [
        {
            key: 'number',
            label: '№'
        },
        {
            key: 'surname',
            label: 'Фамилия'
        },
        {
            key: 'name',
            label: 'Имя'
        },
        {
            key: 'secondName',
            label: 'Отчество'
        },
        {
            key: 'city',
            label: 'Город'
        },
        {
            key: 'age',
            label: 'Возраст'
        },
        {
            key: 'club',
            label: 'Кветунь'
        },
        {
            key: 'rate',
            label: 'Личный рейтинг'
        },
    ]

    const handleOpenModal = (item: any) => {
        console.log(item)
        onOpen();
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }


    return (
        <>
            <div className="flex flex-wrap max-w-[1200px]">
                <h4 className="section__heading w-[100%] font-bold text-xl [&>tr]:first:rounded-lg">Спортсмены</h4>
                <form className="w-[60%] mt-3" onSubmit={handleSubmit}>
                    <div className="w-full justify-between flex">
                        <div className="w-[46%]">
                            <label aria-label="FIO">
                                <p className="mb-2">ФИО</p>
                                <Input type="text" className="w-full" classNames={InputWrapper} />
                            </label>
                        </div>
                        <div className="w-[46%]">
                            <label aria-label="Town">
                                <p className="mb-2">Город</p>
                                <Input type="text" className="w-full" classNames={InputWrapper} />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <h3>Возраст</h3>
                        <div className="w-full mt-2 justify-between flex">
                            <div className="w-[46%] flex">
                                <Input type="number" className="w-full" label="от" labelPlacement="outside-left" classNames={InputWrapper} />
                                <Input type="number" className="w-full ml-2" label="до" labelPlacement="outside-left" classNames={InputWrapper} />
                            </div>
                            <div className="w-[46%] flex">
                                <div className="mr-9">
                                    <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">М</Checkbox>
                                </div>
                                <div>
                                    <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">Ж</Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between flex mt-4">
                        <div className="w-[46%]">
                            <label aria-label="Club">
                                <p className="mb-2">Кветунь</p>
                                <Input type="text" className="w-full" classNames={InputWrapper} />
                            </label>
                        </div>
                        <div className="w-[46%]">
                            <label aria-label="WinNomination">
                                <p className="mb-2">Побед в номинации</p>
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
                    </div>
                    <div className="w-full mt-4">
                        <h3>Личный рейтинг</h3>
                        <div className="w-full mt-2 justify-between flex">
                            <div className="w-[46%] flex">
                                <Input type="number" className="w-full" label="от" labelPlacement="outside-left" classNames={InputWrapper} />
                                <Input type="number" className="w-full ml-2" label="до" labelPlacement="outside-left" classNames={InputWrapper} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex justify-end">
                        <Button type="submit" className="py-[10px] w-[70%] bg-prime text-white">Поиск</Button>
                    </div>
                </form>
                <div className="mt-9">
                    <TableAthletes cols={columns} rows={rows} onClickRow={handleOpenModal} />
                </div>
            </div>
            <AthletesModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    )
}

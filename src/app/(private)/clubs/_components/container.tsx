'use client'

import { nominationFilter, townFilter } from "@/components/tourneyCom/data";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { TableAthletes } from "@/app/(private)/athletes/_components/table";

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
        {id: 1, value: '12-14'},
        {id: 2, value: '12-14'},
        {id: 3, value: '12-14'},
        {id: 4, value: '12-14'},
        {id: 5, value: '12-14'},
    ]


    const rows = [
        {
            id: 1,
            number: 1,
            name: 'Кветунь',
            league: 'a,c,f',
            city: 'Москва',
            nomination: 'Щит и меч'
        },
        {
            id: 2,
            number: 2,
            nomination: 'Щит и сабля',
            name: 'Иван',
            league: 'a,b,c',
            city: 'Брянск',
        },
        {
            id: 3,
            number: 3,
            nomination: 'Щит и меч, Сабля',
            name: 'Кветунь',
            league: 'a,b,d',
            city: 'Москва',
        },
    ]


    const columns = [
        {
            key: 'number',
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

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="flex flex-wrap max-w-[1200px]">
                <h4 className="section__heading w-[100%] font-bold text-xl">Клубы</h4>
                <form className="w-full mt-3" onSubmit={handleSubmit}>
                    <div className="w-[60%] justify-between flex">
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
                        <h3>Лига</h3>
                        <div className="w-full mt-2 justify-between flex">
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">a</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">b</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">c</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">d</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">e</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">f</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">g</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">h</Checkbox>
                            </div>
                            <div>
                                <Checkbox classNames={{ wrapper: ["w-[40px]", "h-[40px]"], icon: ["h-6"] }} size="lg">i</Checkbox>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60%] mt-4">
                        <h3>Возраст</h3>
                        <Select
                            className="w-[60%] mt-2"
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
                    <div className="w-[60%] mt-4">
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
                    <div className="w-[60%] mt-8 flex justify-end">
                        <Button type="submit" className="py-[10px] w-[70%] bg-prime text-white">Поиск клуба</Button>
                    </div>
                </form>
                <div className="w-[80%] mt-9">
                    <TableAthletes cols={columns} rows={rows} />
                </div>
            </div>
        </>
    )
}
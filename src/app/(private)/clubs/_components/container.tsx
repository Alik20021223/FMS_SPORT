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
    const [formState, setFormState] = useState<any>({})
    const [filterRows, setFilterRows] = useState<Club[]>([])

    const fetchClubs = () => {
        return axios.get('/api/clubs', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            let clubs = res.data.clubs;

            clubs = clubs.map((item: any) => {
                item.leagues = item.leagues.map((lg: any) => lg.name).join(', ');
                item.nominations = item.nominations.map((nm: any) => nm.membersTitle).join(', ');
                return item;
            });

            return clubs;
        }).catch((error: any) => {
            console.error('Error fetching clubs:', error);
            return [];
        });
    }




    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchClubs();
            setRows(data);
        };

        fetchData();
    }, []);

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
            key: 'leagues',
            label: 'Лига'
        },
        {
            key: 'nominations',
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

    const handleSelectionChange = (value: any, nameValue: string) => {
        setFormState((prevState: any) => ({ ...prevState, [nameValue]: value.currentKey }));
    };





    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const clubs = await fetchClubs();

        let filterRows = clubs.filter((item: any) => {
            // Проверка имени клуба
            if (formState.name && item.name.toLowerCase() !== formState.name.toLowerCase()) {
                return false;
            }

            // Проверка номинации
            if (formState.nomination) {
                const hasNomination = item.nominations && Array.isArray(item.nominations) &&
                    item.nominations.some((nomination: any) => nomination.membersTitle === formState.nomination);
                if (!hasNomination) {
                    return false;
                }
            }

            // Проверка лиги
            if (formState.league) {
                const hasLeague = item.leagues && Array.isArray(item.leagues) &&
                    item.leagues.some((league: any) => league.name === formState.league);
                if (!hasLeague) {
                    return false;
                }
            }

            // Проверка города
            if (formState.town && item.city !== formState.town) {
                return false;
            }

            // Проверка возраста
            if (formState.age) {
                const ownerAge = item.owner && item.owner.age;
                if (ownerAge !== formState.age) {
                    return false;
                }
            }

            return true;
        });

        setRows(filterRows);
    }





    return (
        <>
            <div className="flex flex-wrap w-full">
                <h4 className="section__heading w-[100%] font-bold text-xl">Клубы</h4>
                <form className="w-full mt-3" onSubmit={handleSubmit}>
                    <div className="w-full justify-between flex">
                        <div className="w-full">
                            <label aria-label="Название">
                                <p className="mb-2">Название</p>
                                <Input onChange={(e) => setFormState((prevState: any) => ({ ...prevState, name: e.target.value }))} type="text" className="w-full" placeholder="Кветунь" classNames={InputWrapper} />
                            </label>
                        </div>
                        <div className="w-[46%]">
                            <label aria-label="Town">
                                <p className="mb-2">Город</p>
                                <Select
                                    placeholder="Москва"
                                    classNames={btnClass}
                                    onSelectionChange={(value: any) => handleSelectionChange(value, "town")}
                                >
                                    {townFilter.map((item) => (
                                        <SelectItem key={item.town} value={item.id}>
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
                                // selectionMode="multiple"
                                classNames={btnClass}
                                onSelectionChange={(value: any) => handleSelectionChange(value, "league")}
                            >
                                {LeagueFilter.map((item) => (
                                    <SelectItem key={item.txt} value={item.id}>
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
                            onSelectionChange={(value: any) => handleSelectionChange(value, "age")}
                        >
                            {ageFilter.map((item) => (
                                <SelectItem key={item.value} value={item.id}>
                                    {item.value}
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
                                onSelectionChange={(value: any) => handleSelectionChange(value, "nomination")}
                            >
                                {nominationFilter.map((item) => (
                                    <SelectItem key={item.nomination} value={item.id}>
                                        {item.nomination}
                                    </SelectItem>
                                ))}
                            </Select>
                        </label>
                    </div>
                    <div className="w-[80%] mt-8 flex justify-end">
                        <Button type="submit" className="py-[10px] w-[70%] bg-prime text-white">Поиск клуба</Button>
                    </div>
                </form >
                <div className="w-full mt-9">
                    <TableAthletes cols={columns} rows={rows} />
                </div>
            </div >
        </>
    )
}
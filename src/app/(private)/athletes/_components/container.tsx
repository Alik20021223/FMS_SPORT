'use client'

import { nominationFilter } from "@/components/tourneyCom/data";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { TableAthletes } from "./table";
import { useDisclosure } from '@nextui-org/react';
import { AthletesModal } from "@/components/core/Modals/AthltetesModal/page";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Container() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [rows, setRows] = useState<any[]>([])
    const [formState, setFormState] = useState<any>({})
    const [filterRows, setFilterRows] = useState<any[]>([])

    const fetchAthletes = () => {
        return axios.get('/api/user-sprotsmens', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then((res: any) => {
            return res.data.sportsmens;
        }).catch((error: any) => {
            console.error('Error fetching athletes:', error);
            return [];
        });
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAthletes();
            setRows(data);
        };
    
        fetchData();
    }, []);
    

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

    const columns = [
        {
            key: 'id',
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
            key: 'patronymic',
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

    const handleSelectionChange = (value: any, nameValue: string) => {
        setFormState((prevState: any) => ({ ...prevState, [nameValue]: value.currentKey }));
    };

    const handleChange = (value: string, field: string) => {
        if (field === "name") {
            const [surname, name, patronymic] = value.split(' ');
            setFormState({
                ...formState,
                surname: surname || '',
                name: name || '',
                patronymic: patronymic || ''
            });
        } else {
            setFormState({
                ...formState,
                [field]: value
            });
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const athletes = await fetchAthletes()

        const filterRows = athletes.filter((item: any) => {
            // Проверка имени
            if (formState.name && item.name.toLowerCase() !== formState.name.toLowerCase()) {
                return false;
            }

            // Проверка фамилии
            if (formState.surname && item.surname.toLowerCase() !== formState.surname.toLowerCase()) {
                return false;
            }

            // Проверка отчества
            if (formState.patronymic && item.patronymic.toLowerCase() !== formState.patronymic.toLowerCase()) {
                return false;
            }

            // Проверка города
            if (formState.town && item.city.toLowerCase() !== formState.town.toLowerCase()) {
                return false;
            }

            // Проверка возраста
            if (formState.ageFrom && item.age < Number(formState.ageFrom)) {
                return false;
            }

            if (formState.ageTo && item.age > Number(formState.ageTo)) {
                return false;
            }

            // Проверка рейтинга
            if (formState.rateFrom && item.rate < Number(formState.rateFrom)) {
                return false;
            }

            if (formState.rateTo && item.rate > Number(formState.rateTo)) {
                return false;
            }

            return true;
        });

        setRows(filterRows);
    };


    return (
        <>
            <div className="flex flex-wrap w-full">
                <h4 className="section__heading w-full font-bold text-xl [&>tr]:first:rounded-lg">Спортсмены</h4>
                <form className="w-full mt-3" onSubmit={handleSubmit}>
                    <div className="w-full justify-between flex">
                        <div className="w-[46%]">
                            <label aria-label="FIO">
                                <p className="mb-2">ФИО</p>
                                <Input onChange={(e) => handleChange(e.target.value, "name")} type="text" className="w-full" classNames={InputWrapper} />
                            </label>
                        </div>
                        <div className="w-[46%]">
                            <label aria-label="Town">
                                <p className="mb-2">Город</p>
                                <Input onChange={(e) => handleChange(e.target.value, "town")} type="text" className="w-full" classNames={InputWrapper} />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <h3>Возраст</h3>
                        <div className="w-full mt-2 justify-between flex">
                            <div className="w-[46%] flex">
                                <Input type="number" onChange={(e) => handleChange(e.target.value, "ageFrom")} className="w-full" label="от" labelPlacement="outside-left" classNames={InputWrapper} />
                                <Input type="number" onChange={(e) => handleChange(e.target.value, "ageTo")} className="w-full ml-2" label="до" labelPlacement="outside-left" classNames={InputWrapper} />
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
                                <p className="mb-2">Клуб</p>
                                <Input type="text" className="w-full" onChange={(e) => handleChange(e.target.value, "clubName")} placeholder="Кветунь" classNames={InputWrapper} />
                            </label>
                        </div>
                        <div className="w-[46%]">
                            <label aria-label="WinNomination">
                                <p className="mb-2">Побед в номинации</p>
                                <Select
                                    placeholder="Сабля"
                                    classNames={btnClass}
                                    onSelectionChange={(value) => handleSelectionChange(value, 'winNomination')}
                                >
                                    {nominationFilter.map((item) => (
                                        <SelectItem key={item.nomination} value={item.id}>
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
                                <Input onChange={(e) => handleChange(e.target.value, "rateFrom")} type="number" className="w-full" label="от" labelPlacement="outside-left" classNames={InputWrapper} />
                                <Input onChange={(e) => handleChange(e.target.value, "rateTo")} type="number" className="w-full ml-2" label="до" labelPlacement="outside-left" classNames={InputWrapper} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex justify-end">
                        <Button type="submit" className="py-[10px] w-[70%] bg-prime text-white">Поиск</Button>
                    </div>
                </form>
                <div className="mt-9 w-full">
                    <TableAthletes cols={columns} rows={rows} onClickRow={handleOpenModal} />
                </div>
            </div>
            <AthletesModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} club={true} />
        </>
    )
}

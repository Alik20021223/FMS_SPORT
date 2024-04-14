import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, Button, Selection } from '@nextui-org/react';
import FormField from './selectCom';
import {
    typeTourney,
    ageFilter,
    sexFilter,
    townFilter,
    fightPlace,
    nominationFilter,
    leagueFilter,
    typeFight,
    weightFight,
} from './data';

type TDataModal = {
    id: number;
    name: string;
    dateAt: string;
    type: string;
    placeAt: string;
    price: number;
};

type TAddModal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    data: TDataModal[];
};

export const CreateTourneyModal = ({ isOpen, onOpen, onClose, data }: TAddModal) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        city: "",
        gridView: "",
        address: "",
        dateFrom: "",
        dateTo: "",
        applicationDeadline: "",
        price: 0.00,
        gender: "",
        nomination: [],
        ageFrom: 0,
        ageTo: 0,
        league: [],
        secretary: 0,
        weight: ""
    });

    const disable = Object.values(formData).every((value) => !!value);

    const handleChange = (key: string, value: string | Selection) => {
        setFormData({ ...formData, [key]: value });
        console.log(formData);

    };

    return (
        <div>
            <Modal backdrop='blur' className='!max-w-[746px] h-full !bg-[#FCFCFC] rounded-2xl mt-10 ml-10' isOpen={isOpen} onClose={onClose}>
                <ModalContent style={{ maxHeight: 'calc(100vh - 20px)', overflowY: 'auto' }}>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className='px-10 pt-8 relative'>
                                    <h1>Создание турнира</h1>
                                    <FormField
                                        label='Название'
                                        type='text'
                                        value={[formData.name]}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                    />
                                    <FormField
                                        label='Тип'
                                        type='select'
                                        options={typeTourney}
                                        selectedKeys={[formData.type]}
                                        onChange={(e) => handleChange('type', e.target.value)}
                                    />
                                    <FormField
                                        label='Вид сетки'
                                        type='select'
                                        options={typeFight}
                                        selectedKeys={[formData.gridView]}
                                        onChange={(e) => handleChange('gridView', e.target.value)}
                                    />
                                    <FormField
                                        label='Город'
                                        type='text'
                                        value={[formData.city]}
                                        onChange={(e) => handleChange('city', e.target.value)}
                                    />
                                    <FormField
                                        label='Место проведение'
                                        type='text'
                                        value={[formData.address]}
                                        onChange={(e) => handleChange('address', e.target.value)}
                                    />
                                    <FormField
                                        label='Лига'
                                        type='select'
                                        options={leagueFilter}
                                        selectedKeys={[formData.league]}
                                        onChange={(e) => handleChange('league', e.target.value)}
                                    />
                                    <div className='flex justify-between w-full'>
                                        <FormField
                                            label='Возраст'
                                            type='select'
                                            options={ageFilter}
                                            selectedKeys={[formData.ageFrom]}
                                            onChange={(e) => handleChange('ageFrom', e.target.value)}
                                        />
                                        <FormField
                                            label='Пол'
                                            type='select'
                                            options={sexFilter}
                                            selectedKeys={[formData.gender]}
                                            onChange={(e) => handleChange('gender', e.target.value)}
                                        />
                                        <FormField
                                            label='Вес'
                                            type='select'
                                            options={weightFight}
                                            selectedKeys={[formData.weight]}
                                            onChange={(e) => handleChange('weight', e.target.value)}
                                        />
                                    </div>
                                    <FormField
                                        label='Номинация'
                                        type='select'
                                        selectedKeys={[formData.nomination]}
                                        options={nominationFilter}
                                        onSelectionChange={(values) => handleChange('nomination ', values)}
                                    />
                                    <FormField
                                        label='Стоимость'
                                        type='number'
                                        value={formData.price}
                                        onChange={(e) => handleChange('price', e.target.value)}
                                    />
                                    <h1 className='pt-3'>Даты проведения</h1>
                                    <div className='flex items-start justify-between w-full'>
                                        <FormField label='с' type='text' value={formData.dateFrom} onChange={(e) => handleChange('dateFrom', e.target.value)} />
                                        <FormField label='по' type='text' value={formData.dateTo} onChange={(e) => handleChange('dateTo', e.target.value)} />
                                        <FormField label='дата окончания заявок' type='text' value={formData.applicationDeadline} onChange={(e) => handleChange('applicationDeadline', e.target.value)} />
                                    </div>
                                    <FormField label='Секретарь' type='text' value={formData.secretary} onChange={(e) => handleChange('secretary', e.target.value)} />
                                </div>
                                <span className='border-b-4 border-[#D9D9D9] w-full left-[-30px]'></span>
                                <div className='px-6 mt-4'>
                                    <Button
                                        disabled={disable}
                                        className={`${disable ? ' text-white  bg-prime hover:bg-prime-800' : 'bg-[#F5F5F5] text-[#C0C0C0]'} py-[10px] font-semibold rounded-xl w-full`}
                                    >
                                        Создать
                                    </Button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

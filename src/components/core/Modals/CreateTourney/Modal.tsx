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
        selectedCity: '',
        isTypeTourney: '',
        isAge: '',
        isSex: '',
        isWeight: '',
        isPlaceTourney: '',
        isTypeFight: '',
        isNomination: [],
        isName: '',
        isPrice: '',
        isTimeStart: '',
        isTimeRegEnd: '',
        isTimeEnd: '',
        isAssistent: '',
        isLeague: '',
    });

    const disable = Object.values(formData).every((value) => !!value);

    const handleChange = (key: string, value: string | Selection) => {
        setFormData({ ...formData, [key]: value });
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
                                        selectedKeys={[formData.isName]}
                                        onChange={(e) => handleChange('isName', e.target.value)}
                                    />
                                    <FormField
                                        label='Тип'
                                        type='select'
                                        options={typeTourney}
                                        selectedKeys={[formData.isTypeTourney]}
                                        onChange={(e) => handleChange('isTypeTourney', e.target.value)}
                                    />
                                    <FormField
                                        label='Вид сетки'
                                        type='select'
                                        options={typeFight}
                                        selectedKeys={[formData.isTypeFight]}
                                        onChange={(e) => handleChange('isTypeFight', e.target.value)}
                                    />
                                    <FormField
                                        label='Город'
                                        type='select'
                                        options={townFilter}
                                        selectedKeys={[formData.selectedCity]}
                                        onChange={(e) => handleChange('selectedCity', e.target.value)}
                                    />
                                    <FormField
                                        label='Место проведение'
                                        type='select'
                                        options={fightPlace}
                                        selectedKeys={[formData.isPlaceTourney]}
                                        onChange={(e) => handleChange('isPlaceTourney', e.target.value)}
                                    />
                                    <FormField label='Лига' type='select' options={leagueFilter} selectedKeys={[formData.isLeague]} onChange={(e) => handleChange('isLeague', e.target.value)} />
                                    <div className='flex justify-between w-full'>
                                        <FormField label='Возраст' type='select' options={ageFilter} selectedKeys={[formData.isAge]} onChange={(e) => handleChange('isAge', e.target.value)} />
                                        <FormField label='Пол' type='select' options={sexFilter} selectedKeys={[formData.isSex]} onChange={(e) => handleChange('isSex', e.target.value)} />
                                        <FormField label='Вес' type='select' options={weightFight} selectedKeys={[formData.isWeight]} onChange={(e) => handleChange('isWeight', e.target.value)} />
                                    </div>
                                    <FormField
                                        label='Номинация'
                                        selectedKeys={formData.isNomination}
                                        onSelectionChange={(values) => handleChange('isNomination', values)}
                                        type='select'
                                        options={nominationFilter}
                                    />
                                    <FormField label='Стоимость' type='text' selectedKeys={[formData.isPrice]} onChange={(e) => handleChange('isPrice', e.target.value)} />
                                    <h1 className='pt-3'>Даты проведения</h1>
                                    <div className='flex items-start justify-between w-full'>
                                        <FormField label='с' type='text' selectedKeys={[formData.isTimeStart]} onChange={(e) => handleChange('isTimeStart', e.target.value)} />
                                        <FormField label='по' type='text' selectedKeys={[formData.isTimeEnd]} onChange={(e) => handleChange('isTimeEnd', e.target.value)} />
                                        <FormField label='дата окончания заявок' type='text' selectedKeys={[formData.isTimeRegEnd]} onChange={(e) => handleChange('isTimeRegEnd', e.target.value)} />
                                    </div>
                                    <FormField label='Секретарь' type='text' selectedKeys={[formData.isAssistent]} onChange={(e) => handleChange('isAssistent', e.target.value)} />
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

import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, Button, Selection } from '@nextui-org/react';
import FormField from './selectCom';
import {
    typeTourney,
    townFilter,
    fightPlace,
    nominationFilter,
    typeFight,
} from './data';


type TAddModal = {
    item?: any;
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
    id?: number;
};

export const ChangeCreate = ({ isOpen, item, onOpen, onClose, id }: TAddModal) => {
    const [formData, setFormData] = useState({
        selectedCity: 'Москва',
        type: 'Все против всех',
        isPlaceTourney: 'Москва общий зал',
        isTypeFight: 'Каждый с каждым',
        isNomination: ['Щит и меч', 'Сабля'],
        name: 'Турнир 3-х',
        isPrice: '1200',
        isTimeStart: '14.02.2022',
        isTimeRegEnd: '14.03.2022',
        isTimeEnd: '14.04.2022',
        isAssistent: 'Петров П.П',
    });

    useEffect(() => {
        setFormData(item || {})
    }, [item]);


    const disable = Object.values(formData).every((value) => !!value);

    const handleChange = (key: string, value: string | Selection) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div>
            <Modal
                backdrop='blur'
                className='!max-w-[746px] h-full !bg-[#FCFCFC] rounded-2xl mt-10 ml-10'
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent style={{ maxHeight: 'calc(100vh - 20px)', overflowY: 'auto' }}>
                    <ModalBody>
                        <div className='px-10 pt-8 relative'>
                            <h1>Изменение турнира</h1>
                            <FormField
                                label='Название'
                                type='text'
                                value={formData.name}
                                onSelectionChange={(values) => handleChange('name', values)}
                            />
                            <FormField
                                label='Тип'
                                type='select'
                                options={typeTourney}
                                selectedKeys={[formData.type]}
                                onSelectionChange={(values) => handleChange('type', values)}
                            />
                            <FormField
                                label='Вид сетки'
                                type='select'
                                options={typeFight}
                                selectedKeys={[formData.isTypeFight]}
                                onSelectionChange={(values) => handleChange('isTypeFight', values)}
                            />
                            <FormField
                                label='Город'
                                type='select'
                                options={townFilter}
                                selectedKeys={formData.selectedCity}
                                onSelectionChange={(values) => handleChange('selectedCity', values)}
                            />
                            <FormField
                                label='Место проведение'
                                type='select'
                                options={fightPlace}
                                selectedKeys={formData.isPlaceTourney}
                                onSelectionChange={(values) => handleChange('isPlaceTourney', values)}
                            />
                            <FormField
                                label='Номинация'
                                selectedKeys={formData.isNomination}
                                onSelectionChange={(values) => handleChange('isNomination', values)}
                                type='select'
                                options={nominationFilter}
                            />
                            <FormField label='Стоимость' type='text' selectedKeys={[formData.isPrice]} onSelectionChange={(values) => handleChange('isPrice', values)} />
                            <h1 className='pt-3'>Даты проведения</h1>
                            <div className='flex items-start justify-between w-full'>
                                <FormField label='с' type='text' selectedKeys={[formData.isTimeStart]} onSelectionChange={(values) => handleChange('isTimeStart', values)} />
                                <FormField label='по' type='text' selectedKeys={[formData.isTimeEnd]} onSelectionChange={(values) => handleChange('isTimeEnd', values)} />
                                <FormField label='дата окончания заявок' type='text' selectedKeys={[formData.isTimeRegEnd]} onChange={(e) => handleChange('isTimeRegEnd', e.target.value)} />
                            </div>
                            <FormField label='Секретарь' type='text' value={formData.isAssistent} onSelectionChange={(values) => handleChange('isAssistent', values)} />
                        </div>
                        <span className='border-b-4 border-[#D9D9D9] w-full left-[-30px]'></span>
                        <div className='w-full flex items-center justify-center'>
                            <div className='px-6 w-[70%] mt-4'>
                                <div className='w-full'>
                                    <Button
                                        disabled={disable}
                                        className={`${disable ? 'text-white bg-primary hover:bg-prime-800' : 'bg-[#F5F5F5] text-[#C0C0C0]'} py-[10px] font-semibold rounded-xl w-full`}
                                    >
                                        Сохранить
                                    </Button>
                                </div>
                                <div className='my-3 w-full'>
                                    <Button
                                        className=' text-white bg-prime hover:bg-prime-800  py-[10px] font-semibold rounded-xl w-full'
                                    >
                                        Сгенерировать турнирную сетку
                                    </Button>
                                </div>
                                <div className='my-3 w-full'>
                                    <Button
                                        className='text-red-600 bg-red-300 hover:bg-prime-800  py-[10px] font-semibold rounded-xl w-full'
                                    >
                                        Удалить турнир
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};





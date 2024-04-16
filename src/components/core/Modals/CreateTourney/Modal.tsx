import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, Button, Selection, Autocomplete, AutocompleteItem } from '@nextui-org/react';
import FormField from './selectCom';
import {
    typeTourney,
    ageFilter,
    sexFilter,
    nominationFilter,
    leagueFilter,
    typeFight,
    weightFight,
} from './data';
import axios from 'axios';

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
    const disable = true;

    const [name, setName] = useState<string>();
    const [type, setType] = useState(new Set([]));
    const [city, setCity] = useState<any>("");
    const [gridView, setGridView] = useState(new Set([]));
    const [address, setAddress] = useState<any>("");
    const [dateFrom, setDateFrom] = useState<Date>();
    const [dateTo, setDateTo] = useState<Date>();
    const [applicationDeadline, setApplicationDeadline] = useState<Date>();
    const [price, setPrice] = useState<string>();
    const [gender, setGender] = useState(new Set([]));
    const [nomination, setNomination] = useState(new Set([]));
    const [ageFrom, setAgeFrom] = useState(new Set([]));
    const [ageTo, setAgeTo] = useState<number>(1);
    const [league, setLeague] = useState(new Set([]));
    const [secretary, setSecretary] = useState<string>();
    const [weight, setWeight] = useState(new Set([]));

    const [cityList, setCityList] = useState<any[]>([]);
    const [addressList, setAddressList] = useState<any[]>([]);

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

    function showPromptAddress(value: string) {

        axios.post('/suggestions/api/4_1/rs/suggest/address', {
            query: value
        }, {
            headers: {
                'Authorization': 'Token 8ea8222f7a7784ba26078fb524744d19355e1b3c'
            }
        }).then((res: any) => {
            setAddressList(res.data.suggestions)
        })

    }

    function submitTournament() {
        axios.post('/api/tournament/new', {
            name: name, 
            type: Array.from(type)[0], 
            city: city, 
            gridView: Array.from(gridView)[0], 
            address: address, 
            dateFrom: dateFrom, 
            dateTo: dateTo, 
            applicationDeadline: applicationDeadline, 
            price: parseInt(price || '0'), 
            gender: Array.from(gender)[0], 
            nomination: parseInt(Array.from(nomination)[0]), 
            ageFrom: parseInt(Array.from(ageFrom)[0]), 
            ageTo: ageTo, 
            league: Array.from(league), 
            secretary: parseInt(secretary || '0'), 
            weightCat: Array.from(weight)[0]
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
            }
        }).then(res => {
            window.location.reload()
        })
    }

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
                                        value={name}
                                        onChange={setName}
                                    />
                                    <FormField
                                        label='Тип'
                                        type='select'
                                        options={typeTourney}
                                        selectedKeys={type}
                                        onChange={setType}
                                    />
                                    <FormField
                                        label='Вид сетки'
                                        type='select'
                                        options={typeFight}
                                        selectedKeys={gridView}
                                        onChange={setGridView}
                                    />
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
                                        label='Место проведение'
                                        items={addressList}
                                        selectedKey={address}
                                        onSelectionChange={setAddress}
                                        onInputChange={showPromptAddress}
                                        labelPlacement='outside'>
                                        {(item) => <AutocompleteItem key={item.value}>{item.value}</AutocompleteItem>}
                                    </Autocomplete>
                                    <FormField
                                        label='Лига'
                                        type='select'
                                        options={leagueFilter}
                                        selectedKeys={league}
                                        onChange={setLeague}
                                    />
                                    <div className='flex justify-between w-full'>
                                        <FormField
                                            label='Возраст'
                                            type='select'
                                            options={ageFilter}
                                            selectedKeys={ageFrom}
                                            onChange={setAgeFrom}
                                        />
                                        <FormField
                                            label='Пол'
                                            type='select'
                                            options={sexFilter}
                                            selectedKeys={gender}
                                            onChange={setGender}
                                        />
                                        <FormField
                                            label='Вес'
                                            type='select'
                                            options={weightFight}
                                            selectedKeys={weight}
                                            onChange={setWeight}
                                        />
                                    </div>
                                    <FormField
                                        label='Номинация'
                                        type='select'
                                        selectedKeys={nomination}
                                        options={nominationFilter}
                                        onChange={setNomination}
                                    />
                                    <FormField
                                        label='Стоимость'
                                        type='number'
                                        value={price}
                                        onChange={setPrice}
                                    />
                                    <h1 className='pt-3'>Даты проведения</h1>
                                    <div className='flex items-start justify-between w-full'>
                                        <FormField label='с' type='date' value={dateFrom} onChange={setDateFrom} />
                                        <FormField label='по' type='date' value={dateTo} onChange={setDateTo} />
                                        <FormField label='дата окончания заявок' type='date' value={applicationDeadline} onChange={setApplicationDeadline} />
                                    </div>
                                    <FormField label='Секретарь' type='text' value={secretary} onChange={setSecretary} />
                                </div>
                                <span className='border-b-4 border-[#D9D9D9] w-full left-[-30px]'></span>
                                <div className='px-6 mt-4'>
                                    <Button
                                        onPress={submitTournament}
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

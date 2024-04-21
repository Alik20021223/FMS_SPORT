"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import { AppInput } from "../../Input/AppInput";
import { Autocomplete, AutocompleteItem, Checkbox, Radio, RadioGroup } from "@nextui-org/react";
import { AppButton } from "../../Button/AppButton";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PersonalState } from "@/app/interfaces/Person";
import { setAvatar, setUser } from "@/redux/features/fsmbSlice";
import axios from "axios";

type TEditModal = {
  onClose: () => void;
};


export default function EditModal({ onClose }: TEditModal) {

  const [modalOpen, setModalOpen] = useState(true);
  const dispatch = useAppDispatch()
  const userData = useAppSelector(state => state.personal)

  const [address, setAddress] = useState<any>(userData.address)
  const [age, setAge] = useState<number>(userData.age)
  const [name, setName] = useState<string>(userData.name)
  const [surname, setSurname] = useState<string>(userData.surname)
  const [patronymic, setPatronymic] = useState<string>(userData.patronymic || '')
  const [gender, setGender] = useState<string>(userData.gender || '')
  const [birth, setBirth] = useState<any>(userData.birth)
  const [phone, setPhone] = useState<string>(userData.phone)
  const [email, setEmail] = useState<string>(userData.email)
  const [city, setCity] = useState<string>(userData.city || '')

  const [addressList, setAddressList] = useState<any[]>([{ value: userData.address }])

  function updateHandler() {
    axios.put('/api/profile/edit', {
      address,
      age,
      name,
      surname,
      patronymic,
      gender,
      birth,
      phone,
      email,
      city
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      location.reload();
    })
  }

  function showPrompt(value: string) {
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

  function selectAddress(address: any) {
    setAddress(address.value)
    setAddressList([])
  }

  function updateProfile(e: any) {
    const formData = new FormData();
    formData.append('file', e.files[0])

    axios.post('/api/uploadAvatar', formData, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then((res: any) => {
      dispatch(setAvatar(res.data))
    })
  }

  function removeProfile() {
    axios.put('/api/profile/remove-avatar', {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then(res => {
      dispatch(setAvatar(res.data))
    })
  }

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <div>
        <div className="flex justify-between items-center mt-4">
          <div>

            <label className="w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src={"/assets/img/iconPers/camera.svg"}
                width={22}
                height={12}
                alt=""
                className="mr-auto ml-auto"
              />
              <input onChange={e => updateProfile(e.target)} type="file" accept="image/*" className="opacity-0 w-0 h-0" />
            </label>
            <p className="text-xs text-dark text-center">Изменить</p>
          </div>
          <Image
            src={"/static/" + userData?.photo}
            width={90}
            height={90}
            alt=""
            className="rounded-full"
          />
          <div>
            <div onClick={removeProfile} className="w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
              <Image
                src={"/assets/img/iconPers/delete.svg"}
                width={22}
                height={12}
                alt=""
                className="mr-auto ml-auto"
              />
            </div>
            <p className="text-xs text-dark text-center">Удалить</p>
          </div>
        </div>
        <div>
          <p className="text-base text-dark mt-6">Как к вам обращаться?</p>
          <AppInput
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Ваше Имя"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <p className="text-xs text-dark">
            Это имя отображается в ваших комментариях и отзывах.
          </p>
        </div>
        <div>
          <p className="text-base text-dark mt-6">Номер членской книжки</p>
          <AppInput
            placeholder="123 456789"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <p className="text-base text-dark font-bold mt-4">
          Персональные данные
        </p>
        <div>
          <p className="text-base text-dark mt-6">Фамилия, Имя, Отчество</p>
          <AppInput
            value={surname}
            onChange={e => setSurname(e.target.value)}
            placeholder="Иванов"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <AppInput
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Иван"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <AppInput
            // defaultValue={userData.patronymic || ''}
            value={patronymic}
            onChange={e => setPatronymic(e.target.value)}
            placeholder="Иванович"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <div>
          <RadioGroup
            label="Пол"
            orientation="horizontal"
            className="mt-2"
            // defaultValue={userData.gender}
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <Radio value="female">Ж</Radio>
            <Radio value="male">М</Radio>
          </RadioGroup>
        </div>

        <div>
          <p className="text-base text-dark mt-6">Дата рождения</p>
          <AppInput
            value={birth}
            onChange={e => setBirth(e.target.value)}
            type="date"
            placeholder="12.04.1995"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <div>
          <p className="text-base text-dark mt-6">Мобильный телефон</p>
          <PhoneInput
            containerClass="w-full mе-[12px]"
            country={'ru'}
            value={phone}
            onChange={phone => setPhone(phone)}
            inputProps={{ required: true }}
          />
        </div>
        <div>
          <p className="text-base text-dark mt-6">Эл.Почта</p>
          <AppInput
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="ivan@ivanov.ru"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <p className="text-base text-dark font-bold mt-4">
          Паспорт РФ (свидетельство о рождении)
        </p>
        <div>
          <p className="text-base text-dark mt-6">Серия номер</p>
          <AppInput
            placeholder=""
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>

        <div>
          <p className="text-base text-dark mt-6">Кем выдан</p>
          <AppInput
            placeholder=""
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>

        <div>
          <p className="text-base text-dark mt-6">Код подразделения</p>
          <AppInput
            placeholder=""
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>

        <div>
          <p className="text-base text-dark mt-6">Дата выдачи</p>
          <AppInput
            type="date"
            placeholder=""
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>

        <div className="relative">
          <Autocomplete
            label='Адрес регистрации'
            items={addressList}
            selectedKey={address}
            onSelectionChange={setAddress}
            onInputChange={showPrompt}
            labelPlacement='outside'>
            {(item) => <AutocompleteItem key={item.value}>{item.value}</AutocompleteItem>}
          </Autocomplete>

        </div>

        <button onClick={updateHandler} className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
      </div>
    </Modal>
  );
}

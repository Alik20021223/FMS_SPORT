"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import { AppInput } from "../../Input/AppInput";
import { Checkbox, Radio, RadioGroup } from "@nextui-org/react";
import { AppButton } from "../../Button/AppButton";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PersonalState } from "@/app/interfaces/Person";
import { setUser } from "@/redux/features/fsmbSlice";
import axios from "axios";

type TEditModal = {
  onClose: () => void;
};


export default function EditModal({ onClose }: TEditModal) {

  const [modalOpen, setModalOpen] = useState(true);
  const dispatch = useAppDispatch()
  const userData = useAppSelector(state => state.personal)
  let updatedUserData: PersonalState = {
    id: 0,
    photo: "",
    age: 0,
    name: "",
    surname: "",
    patronymic: null,
    gender: "",
    birth: null,
    phone: "",
    email: "",
    balance: 0,
    city: null,
    club: null,
    coach: null,
    family: [],
    roles: [],
    anthropometry: {
      weight: 0,
      height: 0,
      shoes: 0,
      armor: 0,
      head: 0,
      helmet: 0
    },
    token: null
  }
  Object.assign(updatedUserData, userData)
  
  function updateHandler() {
    console.log(updatedUserData);
    
    axios.put('/api/profile/edit', updatedUserData, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
        }
    }).then(res => {
      dispatch(setUser(updatedUserData))
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
              <input type="file" accept="image/*" className="opacity-0 w-0 h-0"/>
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
            <div className="w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center">
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
            defaultValue={userData.name}
            onChange={e => updatedUserData.name = e.target.value}
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
            defaultValue={userData.surname}
            onChange={e => updatedUserData.surname = e.target.value}
            placeholder="Иванов"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <AppInput
            defaultValue={userData.name}
            onChange={e => updatedUserData.name = e.target.value}
            placeholder="Иван"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <AppInput
            defaultValue={userData.patronymic || ''}
            onChange={e => updatedUserData.patronymic = e.target.value}
            placeholder="Иванович"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <div>
          <RadioGroup
            label="Пол"
            orientation="horizontal"
            className="mt-2"
            defaultValue={userData.gender}
            onChange={e => updatedUserData.gender = e.target.value}
          >
            <Radio value="female">Ж</Radio>
            <Radio value="male">М</Radio>
          </RadioGroup>
        </div>

        <div>
          <p className="text-base text-dark mt-6">Дата рождения</p>
          <AppInput
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
            // value={phone}
            // onChange={phone => setPhone(phone)}
            inputProps={{ required: true }}
          />
        </div>
        <div>
          <p className="text-base text-dark mt-6">Эл.Почта</p>
          <AppInput
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

        <div>
          <p className="text-base text-dark mt-6">Адрес регистрации</p>
          <AppInput
            placeholder=""
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>

        <button onClick={updateHandler} className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
      </div>
    </Modal>
  );
}

"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";
import { AppInput } from "../../Input/AppInput";
import { Checkbox } from "@nextui-org/react";
import { AppButton } from "../../Button/AppButton";


type TEditModal = {
  onClose: () => void;
};


export default function EditModal({ onClose }: TEditModal) {

  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };
  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <div>
        <div className="flex justify-between items-center mt-4">
          <div>

            <div className="w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center">
              <Image
                src={"/assets/img/iconPers/camera.svg"}
                width={22}
                height={12}
                alt=""
                className="mr-auto ml-auto"
              />
            </div>
            <p className="text-xs text-dark text-center">Изменить</p>
          </div>
          <Image
            src={"/assets/img/user-avatar.png"}
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
            placeholder="Иванов"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <AppInput
            placeholder="Иван"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
          <AppInput
            placeholder="Иванович"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <div>
          <p className="text-base text-dark mt-6">Пол</p>
          <div className="flex items-center mt-2">
            Ж<Checkbox radius="full" className="ml-[1px] mr-2" size="lg"></Checkbox>
            <Checkbox radius="full" size="lg">М</Checkbox>
          </div>
        </div>

        <div>
          <p className="text-base text-dark mt-6">Дата рождения</p>
          <AppInput
            placeholder="12.04.1995"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <div>
          <p className="text-base text-dark mt-6">Мобильный телефон</p>
          <AppInput
            placeholder="+7 987 654 32-11"
            style={{ border: "1px solid #C0C0C0", marginTop: 12 }}
          />
        </div>
        <div>
          <p className="text-base text-dark mt-6">Эл.Почта</p>
          <AppInput
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

        <button className="w-full bg-dark text-white p-2 rounded-xl mt-2 text-base">Сохранить</button>
      </div>
    </Modal>
  );
}

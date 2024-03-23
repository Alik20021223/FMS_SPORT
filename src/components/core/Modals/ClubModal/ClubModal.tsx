"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Image from "next/image";

export default function ClubModal({ onClose }) {
  const [modalOpen, setModalOpen] = useState(true);
  const club = {
    name: "Кветунь",
    city: "Брянск",
    logo: "/assets/img/club-logo.png",
    address: "г. Брянск, ул. 22 съезда КПСС, д. 74",
    since: "22 октября 2018 года",
    accreditation: "Есть акредитация",
    phone: "+7 (953) 283-94-63",
    email: "kvetun_fsmb@fsmb.ru",
    owner: "Павлов Юрий Михайлович",
    description: `Суббота, Воскресенье
       Группа 6-8 лет  с 12.00 до 13.00 
       Группа 12+ с 14.00 до 15.00
        Спорт-клуб Ямма `,
  };
  return (
    <Modal isOpen={modalOpen} onClose={onClose}>
      <div>
        <div className="flex  items-center mb-4">
          <Image
            src={club.logo}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
          <div className="ml-8">
            <p className="text-base text-dark">Клуб "{club.name}"</p>
            <p className="text-sm text-dark">г. {club.city}</p>
          </div>
        </div>
        <Info label="Адрес" value={club.address} />
        <Info label="Дата основания" value={club.since} />
        <Info label="Наличие акредитации" value={club.accreditation} />
        <Info label="Телефон" value={club.phone} />
        <Info label="Почта" value={club.email} />
        <hr className="h-1 bg-gray-500" />

        <Info label="Глава клуба" value={club.owner} />
        <Info label="Описание" value={club.description} />
        <hr className="h-1 bg-gray-500" />
      </div>
    </Modal>
  );
}
type TInfo = {
  label: string;
  value: string;
};
function Info({ label, value }: TInfo) {
  return (
    <div>
      <p className="text-xl text-dark">{label}</p>
      <p className="text-base text-dark ml-4">{value}</p>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import ProfileBlock from "@/components/core/profileBlock/profileBlock";
import Image from "next/image";
import EditModal from "@/components/core/Modals/EditModal/EditModal";
import CityModal from "@/components/core/Modals/CityModal/CityModal";
import CoachModal from "@/components/core/Modals/CoachModal/CoachModal";
import ClubModal from "@/components/core/Modals/ClubModal/ClubModal";
import BlockArrow from "@/components/core/BlockArrow/BlockArrow";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";


export default function UserData(props: any) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCityModalOpen, setIsCityModal] = useState(false);
  const [isCoachModalOpen, setIsCoachModalOpen] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);

  const personal = useSelector((state: RootState) => state.personal)
  
  return (
    <>
      <ProfileBlock className="flex ">
        <Image
          src={"/static/" + personal?.photo}
          width={90}
          height={90}
          className="rounded-full"
          alt="profile_photo"
        />
        <div className="ml-10">
          <p className="text-base text-dark font-medium">{props?.data?.email}</p>
          <p className="text-base text-dark font-medium">
            {personal.surname} {personal.name} {personal.patronymic}
          </p>
          <p className="text-base text-dark font-medium">{personal.birth ? new Date(personal.birth).toLocaleDateString() : 'День рождение не указано!'}</p>
        </div>
        <Image
          src={"/assets/img/iconPers/edit.svg"}
          width={18}
          height={18}
          alt=""
          className="ml-auto cursor-pointer"
          onClick={() => setIsEditModalOpen(!isEditModalOpen)}
        />
      </ProfileBlock>
      {/* <div className="mt-4 grid grid-cols-4 gap-4 justify-between">
        <Role disable={true} role={"Тренер 3 кат."} date={"10.11.2009"} />
        <Role disable={true} role={"Судья 1 кат."} date={"11.12.2020"} />
        <Role disable={true} role={"Спортсмен."} date={"15.10.2007"} />
        <Role disable={true} role={"Родитель"} date={"10.11.2009"} />
      </div> */}
      <div className="mt-4 grid grid-cols-4 gap-4 justify-between">
        {personal.roles.map(role => (<Role disable={false} role={role?.roles} />))}
      </div>
      <BlockArrow
        img={"/assets/img/iconPers/location.svg"}
        label={"Город"}
        value={personal.city ? personal.city.name : 'город не указан!'}
        onClick={() => setIsCityModal(!isCityModalOpen)}
      />
      <BlockArrow
        img={"/assets/img/iconPers/swords.svg"}
        label={"Клуб"}
        value={personal.club ? personal.club.name : 'Не состоит!'}
        onClick={() => personal.city ? setIsClubModalOpen(!isClubModalOpen) : void (0)}
      />
      <BlockArrow
        img={"/assets/img/iconPers/coach.svg"}
        label={"Статус: переход в клуб ...      Ожидание"}
        className="w-[534px] ml-auto"
      />
      <BlockArrow
        img={"/assets/img/iconPers/coach.svg"}
        label={"Тренер"}
        value={personal.coach ? `${personal.coach.name} ${personal.coach.patronymic}` : 'Не указан!'}
        onClick={() => setIsCoachModalOpen(!isCoachModalOpen)}
      />

      <BlockArrow
        img={"/assets/img/iconPers/coach.svg"}
        value={"Удалить аккаунт"}
        className="!bg-[#ff8383] "
        textStyle="!text-black"
      />
      {isEditModalOpen && (
        <EditModal onClose={() => setIsEditModalOpen(false)} />
      )}
      {isCityModalOpen && (
        <CityModal onClose={() => setIsCityModal(false)} />
      )}
      {isCoachModalOpen && (
        <CoachModal onClose={() => setIsCoachModalOpen(false)} />
      )}
      {isClubModalOpen && (
        <ClubModal onClose={() => setIsClubModalOpen(false)} />
      )}
    </>
  );
}

type TRole = {
  role: string;
  date?: string;
  disable: boolean;
};

function Role({ role, date, disable }: TRole) {
  return (
    <ProfileBlock disable={disable} className="rounded-3xl">
      <p className={`${disable ? 'text-slate-400' : 'text-dark'} text-base  text-center`}>{role}</p>
      <p className={`${disable ? 'text-slate-400' : 'text-dark'} text-base  text-center`}>{date}</p>
    </ProfileBlock>
  );
}

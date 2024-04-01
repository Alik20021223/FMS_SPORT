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
          src={"/static/" + props?.data?.photo}
          width={90}
          height={90}
          className="rounded-full"
          alt="profile_photo"
        />
        <div className="ml-10">
          <p className="text-base text-dark font-medium">{props?.data?.email}</p>
          <p className="text-base text-dark font-medium">
            {props?.data?.surname} {props?.data?.name} {props?.data?.patronymic}
          </p>
          <p className="text-base text-dark font-medium">{props?.data?.birth ? new Date(props?.data?.birth).toLocaleDateString() : 'День рождение не указано!'}</p>
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
      <div className="mt-4 flex justify-between">
        <Role role={"Тренер 3 кат."} date={"10.11.2009"} />
        <Role role={"Судья 1 кат."} date={"11.12.2020"} />
        <Role role={"Спортсмен."} date={"15.10.2007"} />
        <Role role={"Родитель"} date={"10.11.2009"} />
      </div>
      <div className="mt-4 flex justify-between">
        <Role role={"Гость."} />
        <Role role={"Глава клуба"} />
        <Role role={"Организатор"} />
        <Role role={"Админ"} />
      </div>
      <BlockArrow
        img={"/assets/img/iconPers/location.svg"}
        label={"Город"}
        value={"Брянск"}
        onClick={() => setIsCityModal(!isCityModalOpen)}
      />
      <BlockArrow
        img={"/assets/img/iconPers/swords.svg"}
        label={"Клуб"}
        value={"Кветунь"}
        onClick={() => setIsClubModalOpen(!isClubModalOpen)}
      />
      <BlockArrow
        img={"/assets/img/iconPers/coach.svg"}
        label={"Статус: переход в клуб Эскалибур      Ожидание"}
        className="w-[534px] ml-auto"
      />
      <BlockArrow
        img={"/assets/img/iconPers/coach.svg"}
        label={"Тренер"}
        value={"Петр Петров"}
        onClick={() => setIsCoachModalOpen(!isCoachModalOpen)}
      />

      <BlockArrow
        img={"/assets/img/iconPers/coach.svg"}
        value={"Удалить аккаунт"}
        className="bg-[#D42828] bg-opacity-[0.12] "
        textStyle="text-[#D42828]"
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
};

function Role({ role, date }: TRole) {
  return (
    <div className="" style={{ width: "154px" }}>
      <ProfileBlock className="rounded-3xl">
        <p className="text-base text-dark text-center">{role}</p>
        <p className="text-base text-dark text-center">{date}</p>
      </ProfileBlock>
    </div>
  );
}

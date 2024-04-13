"use client";
import React, { useEffect, useState } from "react";
import ProfileBlock from "../core/profileBlock/profileBlock";
import Image from "next/image";
import EditModal from "../core/Modals/EditModal/EditModal";
import BlockArrow from "../core/BlockArrow/BlockArrow";
import { AppInput } from "../core/Input/AppInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateAnthropometry } from "@/redux/features/fsmbSlice";
import { Anthropometry } from "@/app/interfaces/Anthropometry";

type TAppInfo = {
  label: string,
  value: string | number,
  changeHandler?: Function
}

export default function AnthropometryData(props: any) {
  const currentAnthropometry = useAppSelector(state => state.personal.anthropometry)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useAppDispatch()
  let newAnthropometry: Anthropometry = {
      weight: 0,
      height: 0,
      shoes: 0,
      armor: 0,
      head: 0,
      helmet: 0
    } 
    Object.assign(newAnthropometry, currentAnthropometry)

  function updateWeight(value: number) {
    newAnthropometry.weight = value
    dispatch(updateAnthropometry({anthropometry: newAnthropometry}))
  }

  function updateHeight(value: number) {
    newAnthropometry.height = value
    dispatch(updateAnthropometry({anthropometry: newAnthropometry}))
  }

  function updateShoes(value: number) {
    newAnthropometry.shoes = value
    dispatch(updateAnthropometry({anthropometry: newAnthropometry}))
  }

  function updateArmor(value: number) {
    newAnthropometry.armor = value
    dispatch(updateAnthropometry({anthropometry: newAnthropometry}))
  }

  function updateHead(value: number) {
    newAnthropometry.head = value
    dispatch(updateAnthropometry({anthropometry: newAnthropometry}))
  }

  function updateHelmet(value: number) {
    newAnthropometry.helmet = value
    dispatch(updateAnthropometry({anthropometry: newAnthropometry}))
  }

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

      {isEditModalOpen && (
        <EditModal onClose={() => setIsEditModalOpen(!isEditModalOpen)} />
      )}
      <p className="text-base text-dark text-center mt-[13px]">Размеры</p>

      <div className="flex justify-between mt-2">
        <InfoBlock changeHandler={updateHelmet} label={"Шлем"} value={props?.data.anthropometry?.helmet} />
        <InfoBlock changeHandler={updateArmor} label={"Доспехи"} value={props?.data.anthropometry?.armor} />
        <InfoBlock changeHandler={updateShoes} label={"Обувь"} value={props?.data.anthropometry?.shoes} />
      </div>
      <BlockArrow
        img={"/assets/img/iconPers/age.svg"}
        value={"Полных лет"}
        label={"Возраст"}
        rightValue={props?.data.age ? props?.data.age : 0}
        isEditable={false}
      />
      <BlockArrow
        img={"/assets/img/iconPers/height.svg"}
        value={"кг"}
        label={"Вес"}
        rightValue={props?.data.anthropometry?.weight}
        isEditable={true}
        changeHandler={updateWeight}
      />
      <BlockArrow
        img={"/assets/img/iconPers/weight.svg"}
        value={"см"}
        label={"Рост"}
        rightValue={props?.data.anthropometry?.height}
        isEditable={true}
        changeHandler={updateHeight}
      />
      <BlockArrow
        img={"/assets/img/iconPers/head.svg"}
        value={"см"}
        label={"Окружность головы"}
        rightValue={props?.data.anthropometry?.head}
        isEditable={true}
        changeHandler={updateHead}
      />
    </>
  );
}

function InfoBlock({ label, value, changeHandler }: TAppInfo) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleChange = (e: number | string) => {
    setEditedValue(e);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (changeHandler) changeHandler(editedValue)
  };

  return (
    <ProfileBlock className="w-[190px] h-[67px] rounded-2xl flex justify-between items-center">
      <p className="text-base text-dark">{label}</p>
      {isEditing ? (
        <AppInput
          type="text"
          value={editedValue}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          className="w-[100px] h-[30px]"
        />
      ) : (
        <p
          className="text-base text-dark cursor-pointer"
          onClick={handleEditClick}
        >
          {editedValue}
        </p>
      )}
    </ProfileBlock>
  );
}

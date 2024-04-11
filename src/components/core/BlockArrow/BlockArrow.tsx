'use client'
import React, { useState } from "react";

import Image from "next/image";
import { AppInput } from "../Input/AppInput";

type TBlockArrow = {
  img?: string;
  label?: string;
  value?: string;
  rightValue?: number | string;
  className?: string;
  onClick?: () => void;
  textStyle?: string;
  isEditable?: boolean;
  changeHandler?: Function
};

export default function BlockArrow({
  img,
  label,
  value,
  rightValue,
  onClick,
  className,
  textStyle,
  isEditable = false,
  changeHandler = void (0)
}: TBlockArrow) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRightValue, setEditedRightValue] = useState(rightValue || "");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setEditedRightValue(editedRightValue);
  };

  const handleCancelChange = (e: number | string) => {
    setEditedRightValue(e);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (changeHandler) changeHandler(editedRightValue)
  };

  const rightValueElement = isEditable ? (
    isEditing ? (
      <div className="flex ml-auto">
        <AppInput
          type="number"
          value={editedRightValue}
          onChange={(e) => handleCancelChange(e.target.value)}
          onBlur={handleBlur}
          className="text-base text-dark w-[100px]"
        />
      </div>
    ) : (
      <>
        {rightValue !== undefined ? (
          <p
            className="text-base text-dark ml-auto mt-auto mb-auto cursor-pointer"
            onClick={isEditable ? handleEditClick : undefined}
          >
            {rightValue}
          </p>
        ) : (
          <Image
            src={"/assets/img/iconPers/arrow.svg"}
            width={8}
            height={13}
            alt=""
            className="ml-auto cursor-pointer"
            onClick={isEditable ? onClick : undefined}
          />
        )}
      </>
    )
  ) : (
    <>
      {rightValue !== undefined ? (
        <p className="text-base text-dark ml-auto mt-auto mb-auto">
          {rightValue}
        </p>
      ) : (
        <Image
          src={"/assets/img/iconPers/arrow.svg"}
          width={8}
          height={13}
          alt=""
          className="ml-auto cursor-pointer"
          onClick={onClick}
        />
      )}
    </>
  );

  return (
    <div className={`flex mt-4 p-4 rounded-lg bg-[#F5F5F5] ${className ? className : ''}`}>
      <div className="flex">
        {img && <Image src={img} width={17} height={17} alt="" />}
        <div className="ml-4">
          <p className="text-sm text-dark font-medium ">{label}</p>
          <p className={`text-base text-neutral-500 ${textStyle}`}>{value}</p>
        </div>
      </div>
      {rightValueElement}
    </div>
  );
}

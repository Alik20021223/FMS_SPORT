import React from "react";

export default function Notifications() {
  return (
    <div className="w-full bg-[#D428281F] mb-[11px] rounded-2xl pt-[26px] pl-[26px] pb-[17px] pr-[22px] relative">
      <p className="text-base text-dark ">
        У вас не отвеченный запрос на добавление{" "}
      </p>
      <p className="text-base text-black opacity-50 mt-[19px]">
        Необходимо заполнить данные прописки
      </p>
      <p className="text-base text-[#C0C0C0] mt-[19px]">
        Ближайший турнир “Три богатыря” старт 12.11.2021
      </p>
      <p className="text-sm text-black opacity-50 absolute bottom-4 right-10">3 уведомления</p>
    </div>
  );
}

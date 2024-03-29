"use client";
import React, { useState, useEffect } from "react";
import UserData from "@/components/UserData/UserData";
import AnthropometryData from "@/components/AnthropometryData/AnthropometryData";
import Notifications from "@/components/core/Notifications/Notifications";
import FamilyApp from "@/components/Family/page";
import AchievementApp from "@/components/Achievement/page";
import axios from "axios";

export type TUserInfoData = {
  fullname: string;
  id: string;
  balanse: number;
}

type TUserInfoProps = {
  data: TUserInfoData;
  activeTab: string;
}

export default function TheProfile({ data, activeTab }: TUserInfoProps) {
  const [active, setActive] = useState(activeTab);
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    axios.get('http://45.84.227.13/api/me', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
      }
    }).then((res: any) => {
      setUser(res.data);
    })
  }, [])

  const handleTabClick = (tab: string) => {
    setActive(tab);
  };

  const renderContent = () => {
    switch (active) {
      case "personal":
        return <UserData data={data} />;
      case "anthropometry":
        return <AnthropometryData data={user} />;
      case "family":
        return <FamilyApp data={user} />;
      case "achievements":
        return <AchievementApp />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Notifications />
      <h1 className="font-bold text-2xl  leading-7 text-dark">
        Личные данные
      </h1>
      <div className="flex mt-4 ">
        <Tab
          title="Персональные данные"
          active={active === "personal"}
          onClick={() => handleTabClick("personal")}
        />
        <Tab
          title="Антропометрия"
          active={active === "anthropometry"}
          onClick={() => handleTabClick("anthropometry")}
        />
        <Tab
          title="Семья"
          active={active === "family"}
          onClick={() => handleTabClick("family")}
        />
        <Tab
          title="Достижения"
          active={active === "achievements"}
          onClick={() => handleTabClick("achievements")}
        />
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}

type TTab = {
  title: string;
  active: boolean;
  onClick: () => void;
};

function Tab({ title, active, onClick }: TTab) {

  return (
    <div
      className={`cursor-pointer px-8 first:px-0  ${active ? "font-bold" : ""} ${active ? "font-bold" : ""
        }`}
      onClick={onClick}
    >
      <p className="text-base text-dark "> {title}</p>
    </div>
  );
}

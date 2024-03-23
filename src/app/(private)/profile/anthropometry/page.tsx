import TheProfile from "@/components/Profile/TheProfile";
import { TUserInfoData } from "@/components/TheSidebar/UserInfo";
import React from "react";

export default function Profile() {
  const userData: TUserInfoData = {
    fullname: 'Иван Иванов',
    id: '123456',
    balanse: 1000,
  };

  return (
    <section className="flex items-center">
      <TheProfile data={userData} activeTab="anthropometry"/>
    </section>
  );
}

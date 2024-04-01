import TheProfile from "@/components/Profile/TheProfile";
import { TUserInfoData } from "@/components/TheSidebar/UserInfo";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

export default function Profile() {
  return (
    <section className="flex  items-center">
      <TheProfile activeTab="achievements"/>
    </section>
  );
}

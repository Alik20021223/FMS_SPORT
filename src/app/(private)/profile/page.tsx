import TheProfile from "@/components/Profile/TheProfile";
import React from "react";

export default function Profile() {

  return (
    <section className="w-[700px] pt-5 pb-5">
      <TheProfile activeTab="personal"/>
    </section>
  );
}
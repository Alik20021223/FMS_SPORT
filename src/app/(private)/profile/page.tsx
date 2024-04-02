import TheProfile from "@/components/Profile/TheProfile";
import React from "react";

export default function Profile() {

  return (
    <section className="flex w-[700]">
      <TheProfile activeTab="personal"/>
    </section>
  );
}
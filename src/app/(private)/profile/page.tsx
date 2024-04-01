import TheProfile from "@/components/Profile/TheProfile";
import React from "react";

export default function Profile() {

  return (
    <section className="flex  items-center">
      <TheProfile activeTab="personal"/>
    </section>
  );
}
import React from "react";
import CreateTourney from "@/components/tourneyCom/createTourney";
import ApplyTourney from "@/components/tourneyCom/applyTourney";
import { FilterTourney } from "@/components/tourneyCom/filterTourney";
import { AllTourney } from "@/components/tourneyCom/allTourney";

export default function Tourney() {
  return (
    <section className="flex h-full w-[700px] pt-5 pb-5 flex-col items-center">
      <CreateTourney />
      <ApplyTourney />
      <div className="w-full">
        <FilterTourney />
        <AllTourney />
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import EventsCard from "@/components/EventsCard/EventsCard";
import WingCard from "@/components/WingCard/WingCard";

const Events = () => {
  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[150px] mb-[100px]">
        {/* <EventsCard /> */}
        <WingCard wing="Eloquense"/>
        <WingCard wing="Cybernix"/>
        <WingCard wing="Nirmaan"/>
        <WingCard wing="Robonix"/>
        <WingCard wing="Illustro"/>
        <WingCard wing="Flagship events"/>
        <WingCard wing="eSports"/>
        <WingCard wing="Fun"/>
      </div>
    </div>
  );
};

export default Events;

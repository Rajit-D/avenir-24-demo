"use client";

import React, { useEffect, useRef } from "react";
import EventsCard from "@/components/EventsCard/EventsCard";
import WingCard from "@/components/WingCard/WingCard";
import { events } from "@/lib/constants";
import Link from "next/link";

const Events = () => {
  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 md:mt-[150px] mt-[80px] mb-[100px]">

        {events.map((wing, index) => (
            <Link href={`/events/${wing.wingName}`} key={index}>
             <WingCard wing={wing.wingName} url={wing.bgURL} desc={wing.desc}/>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Events;

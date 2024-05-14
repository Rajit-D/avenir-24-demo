"use client";

import React, { useEffect, useRef } from "react";
import EventsCard from "@/components/EventsCard/EventsCard";
import WingCard from "@/components/WingCard/WingCard";
import { events } from "@/lib/constants";
import Link from "next/link";
import EventsButton from "@/components/EventsButton/EventsButton";

const Events = () => {
  return (
    <div className="text-black w-dvw h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="md:mt-[150px] mt-[80px] flex justify-center items-center flex-col">
        <Link href={"https://dub.sh/G3xtM8Lgir"} target="blank">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#FF3131,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-[300px] w-[250px] md:mb-0 mb-5 font-mont">
            View the Schedule! 📅
          </button>
        </Link>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 md:mt-[80px] mt-[20px] mb-[100px]">
          {events.map((wing, index) => (
            <Link href={`/events/${wing.wingName}`} key={index}>
              <WingCard
                wing={wing.wingName}
                url={wing.bgURL}
                desc={wing.desc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

"use client";

import React from "react";
import poster from "@/public/assets/poster.jpg";
import Image from "next/image";

const EventsPage = () => {
  return (
    <div className="text-white">
      <h2 className="font-strike text-[35px]">Event Name</h2>
      <div className="flex justify-center items-center">
        <div className="w-full">
          <Image src={poster} alt="event poster" className="h-[450px] w-[400px]"/>
        </div>
        <div className="">
            <div className="">
                <p>Event Date (Prelims): TBD</p>
                <p>Event Date (Finals): TBD</p>
                <p>Team Size: 3-4 members</p>
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

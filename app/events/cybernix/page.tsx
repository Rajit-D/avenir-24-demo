import EventsCard from "@/components/EventsCard/EventsCard";
import Image from "next/image";
import React from "react";
import image from "../../../public/assets/vader.png";

const page = () => {
  return (
    <div className="text-black w-screen md:h-screen h-auto flex justify-center items-between bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="flex justify-center items-center">
        <Image
          src={image}
          alt=""
          width={500}
          height={900}
          className="mt-[150px] border border-red-300"
        />
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[150px]">
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import EventsButton from "../EventsButton/EventsButton";
import { BackgroundGradient } from "../ui/background-gradient";

const EventsCard = () => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-1 bg-[#1B1B1E]">
      <div className="flex flex-col p-6 mx-auto md:max-w-[300px] max-w-[220px] text-center text-white rounded-[22px] shadow xl:p-8">
        <h3 className="mb-4 text-2xl font-strike">Event name</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          exercitationem?
        </p>
        <EventsButton />
      </div>
    </BackgroundGradient>
  );
};

export default EventsCard;

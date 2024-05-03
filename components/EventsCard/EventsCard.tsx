import React from "react";
import EventsButton from "../EventsButton/EventsButton";
import { BackgroundGradient } from "../ui/background-gradient";

const EventsCard = ({name,description} : {name:string,description:string}) => {
  function shortenDescription(description: string, maxLength: number) {
    // Check if the description length is greater than maxLength
    if (description.length > maxLength) {
      // Truncate the description to maxLength characters and append "..."
      return description.slice(0, maxLength) + "...";
    } else {
      // If the description is already shorter than maxLength, return it as is
      return description;
    }
  }
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-1 bg-[#1B1B1E]">
      <div className="flex flex-col p-6 mx-auto md:max-w-[300px] max-w-[220px] text-center text-white rounded-[22px] shadow xl:p-8">
        <h3 className="mb-4 text-2xl font-strike">{name}</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
         {description.slice(0,100)}
        </p>
        <EventsButton />
      </div>
    </BackgroundGradient>
  );
};

export default EventsCard;

import EventFormMultiple from "@/components/EventForm/EventFormMultiple";
import React from "react";

const singleForm = () => {
  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px] mt-[100px]">
      <EventFormMultiple/>
    </div>
  );
};

export default singleForm;

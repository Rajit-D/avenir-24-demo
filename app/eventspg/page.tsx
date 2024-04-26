import EventsPage from "@/components/EventsPage/EventsPage";
import React from "react";

const page = () => {
  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <EventsPage />
    </div>
  );
};

export default page;

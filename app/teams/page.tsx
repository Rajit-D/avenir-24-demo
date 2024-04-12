import TeamsCard from "@/components/TeamsCard/TeamsCard";
import React from "react";

const Teams = () => {
  return (
    <div className="w-screen md:h-screen h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <TeamsCard/>
    </div>
  );
};

export default Teams;

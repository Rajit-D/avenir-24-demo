import TeamsCard from "@/components/TeamsCard/TeamsCard";
import React from "react";

const Teams = () => {
  return (
    <div className="w-screen md:h-full h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-4 mt-[200px]">
      <TeamsCard/>
      <TeamsCard/>
      <TeamsCard/>
      <TeamsCard/>
      <TeamsCard/>
      <TeamsCard/>
      <TeamsCard/>
      <TeamsCard/>
      </div>
    </div>
  );
};

export default Teams;

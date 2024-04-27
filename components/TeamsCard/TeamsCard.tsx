import React from "react";
import { Meteors } from "../ui/meteors";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BackgroundGradient } from "../ui/background-gradient";

const TeamsCard = () => {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-1 bg-[#1B1B1E]">
      <div className="flex flex-row justify-around p-2 mx-auto w-[400px] text-center text-white rounded-[22px]">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
          className="h-[150px] w-[150px] rounded-3xl"
        />
        <div className="flex flex-col justify-center items-start ml-5 w-[300px]">
          <h3 className="text-2xl font-strike text-left">Anakin Skywalker</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            The Fallen Jedi
          </p>
          <div className="mt-3 flex justify-around text-[25px] text-white">
              <FaInstagram className="mr-4" />
              <FaLinkedinIn className="ml-4" />
            </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default TeamsCard;

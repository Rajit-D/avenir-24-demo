import React from "react";
import { Meteors } from "../ui/meteors";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamsCard = () => {
  return (
    <div className="">
      <Meteors number={20} />

      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full w-max overflow-hidden rounded-2xl flex flex-row justify-center items-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
            alt="Team member"
            className="rounded-[100%] h-[150px] w-[150px] "
          />
          <div className="mt-5 flex justify-center items-center flex-col border border-red-500 w-full">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Anakin Skywalker
            </h1>

            <p className="font-normal text-[20px] text-slate-500 mb-4 relative z-50">
              The Fallen Jedi
            </p>

            <div className="flex justify-around text-[25px] text-white">
              <FaInstagram className="mr-4" />
              <FaLinkedinIn className="ml-4" />
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;

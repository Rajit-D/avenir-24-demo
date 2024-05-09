import React from "react";
import { Meteors } from "../ui/meteors";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";

const TeamsCard = () => {
  return (
    <BackgroundGradient className="rounded-[22px] overflow-y-scroll p-4 sm:p-1 bg-[#1B1B1E]">
      <div className="flex flex-row justify-around  p-2 mx-auto w-[400px] text-center text-white rounded-[22px]">
        <div className="h-min w-fit overflow-hidden rounded-lg">
          <img
            className="h-[150px] w-[160px] rounded-lg hover:scale-125 blur-[0.5px] hover:blur-none ease-in-out transition-all object-cover object-center duration-500 cursor-pointer"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center items-start ml-5 w-[300px]">
          <h3 className="text-2xl font-strike text-left">Anakin Skywalker</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            The Fallen Jedi
          </p>
          <div className="mt-3 flex justify-around text-[25px] text-white">
            <Link href={""}>
              <FaInstagram
                size={"1.8rem"}
                className="mr-2 bg-gradient-to-tr from-yellow-300 via-pink-500 to-purple-500 rounded-md"
              />
            </Link>

            <Link href={""}>
              <FaLinkedinIn size={"1.8rem"} className="ml-3 text-blue-500" />
            </Link>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default TeamsCard;

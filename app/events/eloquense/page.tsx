"use client";

import EventsCard from "@/components/EventsCard/EventsCard";
import Image from "next/image";
import React from "react";
import image from "../../../public/assets/elo-mascot.png";
import Modal from "@/components/Modal/Modal";

const page = () => {
  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-between bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="flex justify-center items-center w-screen flex-col mb-10 md:mt-[150px] mt-[100px]">
        <p className="font-strike text-[#FF3131] md:text-[55px] text-[45px]">Eloquense</p>
        <div className="flex justify-around items-center w-screen md:flex-row flex-col">
          <div className="flex justify-center items-center flex-col">
            <Image
              src={image}
              alt=""
              width={500}
              height={900}
              className="mt-[80px] md:h-[400px] h-[300px] md:w-[350px] w-[250px]"
            />
            <div className="text-white text-wrap md:w-[400px] flex justify-center items-center flex-col text-center mt-[20px]">
              <p className="m-2">
                Meet Darth Vader! the official mascot of Cybernix
              </p>
              <Modal para="This is Anakin Skywalker" />
            </div>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[80px]">
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

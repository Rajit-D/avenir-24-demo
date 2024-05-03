"use client";

import axios from "axios";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Modal from "@/components/Modal/Modal";
import EventsCard from "@/components/EventsCard/EventsCard";

// const EventsCard = dynamic(() => import("@/components/EventsCard/EventsCard"), {
//   ssr: false,
// });
interface Event {
  _id: string;
  eventName: string;
  subCategory: string;
  description: string;
  registrationFees: string;
  teamsize: string;
  rulebook: string;
  eventPoster: string;
  date: string;
  prizePool: string;
  coordinators: any;
  __v: number;
}
async function getWingDetails(eventCategory: string) {
  const response = await axios.get(
    `https://avenir24-backend.vercel.app/api/v1/wing/get-wingDetails/${eventCategory}`
  );

  return response.data;
}
const page = async ({ params }: { params: { eventCategory: string } }) => {
  const wingDetails = await getWingDetails(params.eventCategory.toLowerCase());
  console.log(params.eventCategory)
  console.log(wingDetails);
  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-between bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="flex justify-center items-center w-screen flex-col mb-10 md:mt-[150px] mt-[100px]">
        <p className="font-strike text-[#FF3131] md:text-[55px] text-[45px]">
          {params.eventCategory}
        </p>
        <div className="flex justify-around items-center w-screen md:flex-row flex-col">
          <div className="flex justify-center items-center flex-col">
            
            <Image
              src={wingDetails?.wings[0].wingPoster}
              alt=""
              width={500}
              height={900}
              className="mt-[80px] md:h-[400px] h-[300px] md:w-[350px] w-[250px]"
            />
            <div className="text-white text-wrap md:w-[400px] flex justify-center items-center flex-col text-center mt-[20px]">
              <p className="m-2">{wingDetails?.wings[0].wingDescription}</p>
              <Modal para="This is Anakin Skywalker" />
            </div>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[80px]">
            {wingDetails.events.map((event:Event) => (
              <EventsCard
                key={event._id}
                name={event.eventName}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

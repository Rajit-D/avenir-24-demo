"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import EventsCard from "@/components/EventsCard/EventsCard";
import Loading from "@/components/Loading";

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

const Page = ({ params }: { params: { eventCategory: string } }) => {
  const [wingDetails, setWingDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://avenir24-backend.vercel.app/api/v1/wing/get-wingDetails/${params.eventCategory.toLowerCase()}`
        );
        setWingDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.eventCategory]);

  return (
    <div className="text-black pt-8 md:mt-[99.41px] w-dvw h-auto md:h-[calc(100dvh-99.41px)] flex justify-center items-between bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="flex items-center w-full pb-10 flex-col h-full overflow-y-auto">
        <p className="font-strike text-[#FF3131] md:text-[55px] text-[45px]">
          {params.eventCategory}
        </p>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex justify-center items-center w-full md:flex-row flex-col">
            {wingDetails?.wings.length > 0 ? (
              // Check if wings array is not empty
              <div className="flex justify-around items-center md:flex-row flex-col w-full">
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src={wingDetails?.wings[0].wingPoster}
                    alt=""
                    width={500}
                    height={900}
                    className="mt-[20px] md:h-[400px] h-[300px] md:w-[350px] w-[250px]"
                  />
                  <div className="text-white text-wrap md:w-[400px] flex justify-center items-center flex-col text-center mt-[20px]">
                    <p className="m-2">
                      {wingDetails.wings[0].wingDescription}
                    </p>
                    <Modal para={wingDetails.wings[0].modalText} />
                  </div>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[20px]">
                  {wingDetails?.events.map((event: Event) => (
                    <EventsCard
                      key={event._id}
                      name={event.eventName}
                      description={event.description}
                      id={event._id}
                      category={params.eventCategory}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[20px]">
                {wingDetails?.events.map((event: Event) => (
                  <EventsCard
                    key={event._id}
                    name={event.eventName}
                    description={event.description}
                    id={event._id}
                    category={params.eventCategory}
                  />
                ))}
              </div>
            )}

            {/* <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[80px]">
              {wingDetails?.events.map((event: Event) => (
                <EventsCard
                  key={event._id}
                  name={event.eventName}
                  description={event.description}
                  id={event._id}
                  category={params.eventCategory}
                />
              ))}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

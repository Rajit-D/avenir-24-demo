import React from "react";
import EventsButton from "../EventsButton/EventsButton";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
const EventsCard = ({
  name,
  description,
  id,
  category,
}: {
  name: string;
  description: string;
  id: string;
  category: string;
}) => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-1 bg-[#1B1B1E]">
      <div className="flex flex-col md:h-[320px] justify-around p-6 mx-auto md:max-w-[300px] max-w-[220px] text-center text-white rounded-[22px] shadow xl:p-8">
        <h3 className="mb-4 text-2xl font-strike">{name}</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {description.slice(0, 80) + "..."}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          <Link className="min-w-full p-2" href={`/events/${category}/${id}`}>
            <Button className="min-w-full p-2 rounded-3xl">
              <p>View details</p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default EventsCard;

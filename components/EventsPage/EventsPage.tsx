import React from "react";
import Image from "next/image";
import { IoCalendarOutline, IoPersonSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { MdEmojiEvents, MdDescription } from "react-icons/md";
import Link from "next/link";

// Define the EventData interface
interface EventData {
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
  coordinators: {
    name: string;
    number: string;
    _id: string;
  }[];
}

type Props = {
  eventData: EventData | null;
};

const EventsPage = ({ eventData }: Props) => {
  if (!eventData) return null;

  return (
    <div className="text-black w-screen md:h-auto h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="text-white md:mt-[150px] mt-[120px] flex justify-center items-center flex-col md:w-[70%] mb-[80px]">
        <h2 className="font-strike text-[35px] mb-[10px]">
          {eventData.eventName}
        </h2>
        <div className="flex justify-center items-center md:flex-row flex-col mt-[20px]">
          <div className="w-full flex justify-center items-center">
            <Image
              src={eventData.eventPoster}
              width={1000}
              height={1000}
              alt="event poster"
              className="md:h-[450px] h-[330px] md:w-[700px] w-[300px]"
            />
          </div>
          <div className="font-mont">
            <div className="m-5 p-3">
              <p className="flex">
                <IoCalendarOutline className="text-[20px]" />
                &nbsp; <b>Event Date :</b>&nbsp; {eventData.date}
              </p>
              {/* Render other event details */}
            </div>
            {eventData.coordinators.map((coordinator, index) => (
              <div key={index} className="m-5 p-3">
                <p className="flex">
                  <IoPersonSharp className="text-[20px]" />
                  &nbsp; <b>{coordinator.name}:</b> {coordinator.number}
                </p>
              </div>
            ))}
            <div className="m-5 p-3">
              <p className="flex">
                <MdEmojiEvents className="text-[20px]" />
                &nbsp;<b>Prize:</b>&nbsp;Prize pool of Rs. {eventData.prizePool}
              </p>
              {/* Render other event details */}
            </div>
            <div className="m-5 p-3">
              <p className="flex">
                <MdDescription className="text-[20px]" />
                &nbsp;<b>Event description:</b>
              </p>
              <p>{eventData.description}</p>
            </div>
          </div>
        </div>
        <div className="md:mt-[60px] mt-[40px] flex justify-between items-center w-[50%] md:flex-row flex-col">
          <Link href={eventData.rulebook} target="blank">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#FF3131,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[200px] md:mb-0 mb-5 font-mont">
              View Rulebook
            </button>
          </Link>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#FF3131,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[200px] font-mont">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

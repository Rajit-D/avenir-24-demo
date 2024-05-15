import React from "react";
import Image from "next/image";
import { IoCalendarOutline, IoPersonSharp } from "react-icons/io5";
import { MdEmojiEvents, MdDescription } from "react-icons/md";
import Link from "next/link";
import { multipleEventsArray } from "@/utils/multi";
import { singleEventsArray } from "@/utils/single";
import { useRouter } from "next/navigation";
import { eventNames } from "process";
import { FaMoneyBillAlt } from "react-icons/fa";

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
  eventCategory: string;
};

const EventsPage = ({ eventData, eventCategory }: Props) => {
  const router = useRouter();
  if (!eventData) return null;

  const handleClick = (eventName: any) => {
    console.log(eventName);
    if (
      eventName !== "eFootball (PES Mobile)" &&
      eventName !== "BGMI" &&
      eventName !== "Treasure Hunt" &&
      multipleEventsArray.includes(eventName)
    ) {
      router.push(`/multipleForm/${eventCategory}`);
    } else if (singleEventsArray.includes(eventName)) {
      router.push(`/singleForm/${eventCategory}`);
    } else if (eventName === "Innovatrix (Hackathon)")
      window.open(
        "https://unstop.com/p/innovatrix24-netaji-subhash-engineering-college-980862"
      );
    else if (eventName === "Human Ludo") {
      router.push(`/singleForm/humanLudo`);
    } else if (
      eventName === "eFootball (PES Mobile)" ||
      eventName === "BGMI" ||
      eventName === "Treasure Hunt"
    ) {
      router.push(`/singleForm/closed`);
    }
  };

  return (
    <div className="text-white pt-8 md:pt-0 w-dvw overflow-y-auto md:h-dvh flex justify-center items-between bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="flex items-center md:pt-[99.41px] w-full pb-10 flex-col h-full overflow-y-auto">
        <h2 className="font-strike text-[35px] mb-[10px] text-center">
          {eventData.eventName}
        </h2>
        <div className="flex justify-center items-center md:flex-row flex-col">
          <div className="w-full  flex justify-center items-center">
            <Image
              src={eventData.eventPoster}
              height={800}
              width={500}
              alt="event poster"
              className="md:h-[430px] h-[330px] md:w-[380px] w-[300px]"
            />
          </div>
          <div className="font-mont text-white">
            <div className="m-5 p-3">
              <p className="flex">
                <IoCalendarOutline className="text-[20px]" />
                &nbsp; <b>Event Date :</b>&nbsp; {eventData.date}
              </p>
              <p className="flex mt-2">
                <FaMoneyBillAlt className="text-[20px]" />
                &nbsp; <b>Registration fees :</b>&nbsp;{" "}
                {eventData.registrationFees}
              </p>
            </div>
            <div className="ml-5 mr-5 mt-5 p-3">
              <p className="flex">
                <IoPersonSharp className="text-[20px]" />
                &nbsp;Events Co-ordinators:
              </p>
            </div>
            {eventData.coordinators.map((coordinator, index) => (
              <div key={index} className="ml-[50px]">
                <li className="">
                  &nbsp; <b>{coordinator.name}:</b> {coordinator.number}
                </li>
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
              <p className="text-wrap md:w-[500px]">{eventData.description}</p>
            </div>
          </div>
        </div>
        <div className="py-6 flex justify-around items-center w-[100%] md:flex-row flex-col">
          <Link href={eventData.rulebook} target="blank">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#FF3131,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[200px] md:mb-0 mb-5 font-mont">
              View Rulebook
            </button>
          </Link>
          {/* <Link href={`/singleForm/${eventCategory}`} target="blank"> */}
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#FF3131,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[200px] font-mont relative md:right-[70px]"
            onClick={() => {
              handleClick(eventData.eventName);
            }}
          >
            Register
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

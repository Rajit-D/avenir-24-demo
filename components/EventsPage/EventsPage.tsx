"use client";

import React from "react";
import poster from "@/public/assets/poster.jpg";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { MdDescription } from "react-icons/md";

const EventsPage = () => {
  return (
    <div className="text-white mt-[150px] flex justify-center items-center flex-col md:w-[70%] mb-[80px]">
      <h2 className="font-strike text-[35px] mb-[10px]">Event Name</h2>
      <div className="flex justify-center items-center md:flex-row flex-col mt-[20px]">
        <div className="w-full">
          <Image
            src={poster}
            alt="event poster"
            className="h-[450px] w-[400px]"
          />
        </div>
        <div className="">
          <div className="m-5 p-3">
            <p className="flex">
              <IoCalendarOutline className="text-[20px]" />
              &nbsp; <b>Event Date (Prelims):</b>&nbsp; TBD
            </p>
            <p className="flex">
              <IoCalendarOutline className="text-[20px]" />
              &nbsp; <b>Event Date (Finals):</b> &nbsp;TBD
            </p>
            <p className="flex">
              <RiTeamFill className="text-[20px]" />
              &nbsp;<b>Team Size:</b>&nbsp; 3-4 members
            </p>
          </div>
          <div className="m-5 p-3">
            <p className="flex">
              <IoPersonSharp className="text-[20px]" />
              &nbsp; <b>Event co-ordinator 1:</b>&nbsp; 9830487386
            </p>
            <p className="flex">
              <IoPersonSharp className="text-[20px]" />
              &nbsp; <b>Event co-ordinator 2:</b>&nbsp; 9830487386
            </p>
          </div>
          <div className="m-5 p-3">
            <p className="flex">
              <MdEmojiEvents className="text-[20px]" />
              &nbsp;<b>Prize:</b>&nbsp;Prize pool of Rs. XXXX
            </p>
          </div>
          <div className="m-5 p-3">
            <p className="flex">
              <MdDescription className="text-[20px]" />
              &nbsp;<b>Event description:</b>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              temporibus ullam sunt asperiores harum suscipit ut odit
              repudiandae excepturi veniam!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#C6D2ED,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Register here
        </button>
      </div>
      <div className="mt-[40px]">
        <p>
          <b>Rules:</b>
        </p>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
      </div>
    </div>
  );
};

export default EventsPage;

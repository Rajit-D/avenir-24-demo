import React from "react";
import EventsButton from "@/components/EventsButton/EventsButton"

const Events = () => {
  return (
    <div className="text-black w-screen h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px]">
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-[100px]">
        <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white dark:bg-opacity-20 dark:z-2 dark:backdrop-brightness-100 dark:backdrop-blur-[2.7px] rounded-lg shadow xl:p-8 dark:bg-gray-200 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Event name</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            exercitationem?
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <EventsButton/>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white dark:bg-opacity-20 dark:z-2 dark:backdrop-brightness-100 dark:backdrop-blur-[1.7px] rounded-lg shadow xl:p-8 dark:bg-white dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Event name</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            exercitationem?
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <EventsButton/>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white dark:bg-opacity-20 dark:z-2 dark:backdrop-brightness-100 dark:backdrop-blur-[1.7px] rounded-lg shadow xl:p-8 dark:bg-white dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Event name</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            exercitationem?
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <EventsButton/>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white dark:bg-opacity-20 dark:z-2 dark:backdrop-brightness-100 dark:backdrop-blur-[1.7px] rounded-lg shadow xl:p-8 dark:bg-white dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Event name</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            exercitationem?
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <EventsButton/>
        </div>
      </div>
    </div>
  );
};

export default Events;

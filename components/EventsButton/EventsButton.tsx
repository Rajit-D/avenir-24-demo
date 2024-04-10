"use client";

import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const EventsButton = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      <Button className="min-w-full p-2 rounded-3xl">
        <p>View details</p>
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default EventsButton;

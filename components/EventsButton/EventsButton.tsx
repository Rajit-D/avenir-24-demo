"use client";

import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const EventsButton = ()=> {
  return (
    <div className="flex flex-wrap gap-2">
      <Button className="min-w-full flex justify-around">
        Choose plan
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}

export default EventsButton;
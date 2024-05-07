import EventFormMultiple from "@/components/EventForm/EventFormMultiple";
import MultipleForm from "@/components/EventForm/MultipleForm";
import React from "react";

const singleForm = ({ params }: { params: { event: string } }) => {
  return (
    <div className="text-black w-screen md:h-full h-auto flex justify-center items-center bg-opacity-20 z-2 backdrop-brightness-100 backdrop-blur-[1.7px] mt-[100px]">
      <MultipleForm category={params.event}/>
    </div>
  );
};

export default singleForm;
import React from "react";
import { IoFootstepsOutline } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";

const Statistics = () => {
  return (
    <div className="w-full mt-5 flex md:flex-row flex-col md:justify-around justify-center items-center bg-opacity-40 z-2 backdrop-brightness-200 backdrop-blur-[10px] bg-black md:p-0 p-3 font-mont font-bold">
      <div className="w-full flex justify-around items-center">
        <div className="pt-4 pb-4 relative md:right-0 right-4">
          <div className="stat-title flex">
            Footfall <IoFootstepsOutline className="relative top-1 ml-1" />
          </div>
          <div className="stat-value md:text-[35px] text-[25px] font-bold">5,000+</div>
          <div className="stat-desc">1st, 2nd and 3rd day</div>
        </div>
        <div className="pt-4 pb-4 relative md:right-0 right-14">
          <div className="stat-title">Sponsors</div>
          <div className="stat-value md:text-[35px] text-[25px] font-bold">25+</div>
          <div className="stat-desc">↗︎ 7 (38%)</div>
        </div>
      </div>
      <div className="w-full flex justify-around items-center">
        <div className="pt-4 pb-4">
          <div className="stat-title flex">
            Events <MdEmojiEvents className="relative top-1 ml-1" />
          </div>
          <div className="stat-value md:text-[35px] text-[25px] font-bold">20+</div>
          <div className="stat-desc">throughout 3 days</div>
        </div>
        <div className="pt-4 pb-4">
          <div className="stat-title">Colleges engaged</div>
          <div className="stat-value md:text-[35px] text-[25px] font-bold">30+</div>
          <div className="stat-desc">all over West Bengal</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

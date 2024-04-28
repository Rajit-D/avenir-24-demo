import React from "react";

const Statistics = () => {
  return (
    <div className="w-full flex justify-around items-center bg-opacity-40 z-2 backdrop-brightness-200 backdrop-blur-[1.7px] bg-black">
      <div className="pt-4 pb-4">
        <div className="stat-title">Downloads</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>
      <div className="">
        <div className="stat-title">New Users</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>
      <div className="">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
      <div className="">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Statistics;

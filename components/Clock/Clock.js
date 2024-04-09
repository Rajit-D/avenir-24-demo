import React from "react";

const Clock = ({ timerDays }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex p-3">
          <div className="flex justify-center flex-row">
            <p className="text-[20px] md:text-[60px] text-center font-digital  text-teal-500">
              T-&nbsp;
            </p>
            <p className="text-[20px] md:text-[60px] text-center font-digital  text-teal-500">
              {timerDays}
            </p>
            <div className=" text-sky-600 text-[10px] md:text-[60px] font-digital">
              Days
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;

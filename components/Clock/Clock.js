import React from "react";
import "./Clock.css";

const Clock = ({ timerDays }) => {
  return (
    <>
      <div className="flex justify-center items-center relative md:top-[80px] top-[100px]">
        <div className="flex p-3">
          <div className="flex justify-center flex-row">
            <p className="alpha text-[40px] md:text-[60px] text-center font-digital">
              {/* T-&nbsp; */}
              Stay
            </p>
            <p className="alpha text-[40px] md:text-[60px] text-center font-digital">
              {/* {timerDays} */}
              &nbsp;tuned!!
            </p>
            {/* <div className="alpha text-[40px] md:text-[60px] text-center font-digital">&nbsp;Days</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;

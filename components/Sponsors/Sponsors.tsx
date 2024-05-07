import Image from "next/image";
import React from "react";
import euphoria from "../../public/assets/euphoria.png";
import ktm from "../../public/assets/ktm.svg";
import wow from "../../public/assets/wow.webp";
import ieee from "../../public/assets/ieee.png";
import r2r from "../../public/assets/reel2real.png";

const Sponsors = () => {
  return (
    <div className="md:w-full w-[70%] flex justify-center items-center flex-col mx-auto px-5 relative md:top-[70px] mb-[70px]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-red-400 md:text-[30px] text-[22px] font-strike">
            Our Sponsors
          </h2>

          <p className="max-w-md mx-auto mt-2 text-white text-[15px] text-wrap font-mont font-bold p-2">
            We are thankful to each and every company who sponsored our fest.
          </p>
        </div>

        <div className="flex flex-wrap md:items-center justify-center gap-10 mt-2 md:justify-around md:w-full w-screen ">
          <div className="text-gray-400 ">
            <Image
              src={euphoria}
              alt="Euphoria GenX"
              width={200}
              height={100}
              className="md:h-[80px] md:w-[210px]  h-[50px] w-[120px]"
            />
          </div>
          <div className="text-gray-400 ">
            <Image
              src={ktm}
              alt="KTM"
              width={170}
              height={100}
              className="md:h-[100px] md:w-[170px] h-[50px] w-[120px]"
            />
          </div>
          <div className="text-gray-400 ">
            <Image
              src={wow}
              alt="wow momo"
              width={170}
              height={100}
              className="md:h-[120px] md:w-[170px] h-[50px] w-[120px]"
            />
          </div>
          <div className="text-gray-400 ">
            <Image
              src={ieee}
              alt="wow momo"
              width={170}
              height={80}
              className="md:h-[80px] md:w-[150px] h-[50px] w-[120px]"
            />
          </div>
        </div>
      </div>
      <div className="font-mont font-bold text-white md:mt-2 mt-6">and many more...</div>
    </div>
  );
};

export default Sponsors;

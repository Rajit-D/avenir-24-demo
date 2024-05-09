import React from "react";

export interface Props {
  wing: string;
  url: string;
  desc: string;
}

const WingCard = ({ wing, url, desc }: Props) => {
  return (
    <div className="card md:w-96 w-[300px] bg-base-100 shadow-xl image-full md:mt-0 mt-6">
      <figure>
        <img
          src= {url}
          alt="Card Banners"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[20px] font-strike">{wing}</h2>
        <p className="font-mont">{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn  bg-[#FF3131] text-white font-mont border-none hover:text-[#FF3131] hover:bg-white transition-all ease-in-out duration-500 hover:scale-110">Register!</button>
        </div>
      </div>
    </div>
  );
};

export default WingCard;

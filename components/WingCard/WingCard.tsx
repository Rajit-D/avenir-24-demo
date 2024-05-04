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
          <button className="btn text-black bg-[#FF3131] font-mont border-none">Register!</button>
        </div>
      </div>
    </div>
  );
};

export default WingCard;

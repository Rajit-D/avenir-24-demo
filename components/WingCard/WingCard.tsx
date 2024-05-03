import React from "react";

export interface Props {
  wing: string;
  url: string;
}

const WingCard = ({ wing, url }: Props) => {
  return (
    <div className="card md:w-96 w-[300px] bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src= {url}
          alt="Card Banners"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[20px] font-strike">{wing}</h2>
        <p className="font-mont">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn text-black bg-[#FF3131] font-mont border-none">Register!</button>
        </div>
      </div>
    </div>
  );
};

export default WingCard;

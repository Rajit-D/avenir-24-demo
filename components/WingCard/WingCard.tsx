import React from "react";

export interface Props {
  wing: string;
}

const WingCard = ({ wing }: Props) => {
  return (
    <div className="card md:w-96 w-[300px] bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Banners"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[20px] font-strike">{wing}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Register!</button>
        </div>
      </div>
    </div>
  );
};

export default WingCard;

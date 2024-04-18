import React from "react";

export interface Props{
    wing: string
}

const WingCard = ({wing}:Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{wing}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Explore!</button>
    </div>
  </div>
</div>
  );
};

export default WingCard;

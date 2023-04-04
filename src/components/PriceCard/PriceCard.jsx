import React from "react";
import PriceList from "../PriceList/PriceList";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 rounded-md p-5 flex flex-col mb-8">
      <h2 className="text-center">
        <span className="text-4xl text-purple-700 font-extrabold text-center">
          {" "}
          {price.price}
        </span>
        <span className="text-1xl text-white font-extrabold text-center">
          /mon
        </span>
      </h2>
      <h1 className="text-2xl font-bold text-center my-6">{price.name}</h1>

      <p className="text-2xl text-black font-bold pl-4 mb-4">
        Features:
        {price.features.map((feature) => (
          <li className="text-sm  font-semibold">{feature}</li>
        ))}
      </p>
      <p className=" text-center ">
        <button className=" bg-green-500 text-1xl text-white font-bold  text-center w-full py-2 rounded-lg mt-auto hover:bg-yellow-400">
          Buy Now
        </button>
      </p>
    </div>
  );
};

export default PriceCard;

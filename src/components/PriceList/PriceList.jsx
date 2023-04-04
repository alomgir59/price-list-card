import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("/public/Price.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-purple-800 text-center font-extrabold rounded-md bg-purple-300 mx-auto mt-8 mb-4 p-2">
        Awesome Affordable Price
      </h1>
      <div className="grid grid-cols-3 gap-6 mx-auto  ">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;

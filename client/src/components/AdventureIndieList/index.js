import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
const  getRandomPrice  = require("../../utils/price")

const AdventureIndieList = () => {
  const cards = [
    { wallpaper: `https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg`, title: "Limbo", genre:"Adventure Indie", price: getRandomPrice() },,
  ];

  return (
    <div className="mx-[2rem]">
      <p className="text-white pt-6">GAMING SHELF</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {cards.map((card) => (
            <Card wallpaper={card.wallpaper} title={card.title} genre={card.genre} price={card.price}/>
        ))}
      </div>
    </div>
  );
};

export default AdventureIndieList;

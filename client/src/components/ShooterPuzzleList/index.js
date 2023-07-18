import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
const  getRandomPrice  = require("../../utils/price")

const ShooterPuzzleList = () => {
  const cards = [
    { wallpaper: `https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg`, title: "Portal 2", genre: "Shooter Puzzle", price: getRandomPrice() },
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

export default ShooterPuzzleList;

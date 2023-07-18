import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
const  getRandomPrice  = require("../../utils/price")

const ActionRPGList = () => {
  const cards = [
    { wallpaper: `https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg`, title: "Fallout 4", genre:"Action RPG", price: getRandomPrice()  },
    { wallpaper: `https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg`, title: "The Elder Scrolls V: Skyrim", genre:"Action RPG", price: getRandomPrice() },
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

export default ActionRPGList;

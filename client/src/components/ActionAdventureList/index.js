import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
const  getRandomPrice  = require("../../utils/price")

const ActionAdventureList = () => {
  const cards = [
    { wallpaper: `https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`, title: "Grand Theft Auto V", genre: "Action Adventure", price: getRandomPrice()},
    { wallpaper: `https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg`, title: "The Witcher 3: Wild Hunt", genre: "Action Adventure", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg`, title: "Tomb Raider", genre: "Action Adventure", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg`, title: "Red Dead Redemption 2", genre: "Action Adventure", price: getRandomPrice()  },
    { wallpaper: `https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg`, title: "God of War (2018)", genre: "Action Adventure", price: getRandomPrice()  },
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

export default ActionAdventureList;

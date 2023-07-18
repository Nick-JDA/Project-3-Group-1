import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
const  getRandomPrice  = require("../../utils/price")

const ActionShooterList = () => {
  const cards = [
    { wallpaper: `https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg`, title: "DOOM (2016)", genre:"Action Shooter", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg`, title: "Team Fortress 2", genre:"Action Shooter", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg`, title: "Destiny 2", genre:"Action Shooter", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg`, title: "Borderlands 2", genre:"Action Shooter", price: getRandomPrice()},
    { wallpaper: `https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg`, title: "Half-Life 2", genre:"Action Shooter", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg`, title: "BioShock", genre:"Action Shooter", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg`, title: "BioShock Infinite", genre:"Action Shooter", price: getRandomPrice()},
    { wallpaper: `https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg`, title: "Left 4 Dead 2", genre:"Action Shooter", price: getRandomPrice() },
    { wallpaper: `https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg`, title: "Counter-Strike: Global Offensive", genre: "Action Shooter", price: getRandomPrice() },
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

export default ActionShooterList;

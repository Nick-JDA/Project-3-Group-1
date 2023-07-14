import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import Game from "./Game";

const GameShelf = () => {
  const games = [
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
    { wallpaper: one, title: "Arcade Hunt" },
    { wallpaper: two, title: "Arcade Hunt" },
  ];
  return (
    <div className="mx-[2rem]">
      <p className="text-white pt-6">GAMING SHELF</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {games.map((game) => (
            <Game wallpaper={game.wallpaper} title={game.title}/>
        ))}
      </div>
    </div>
  );
};

export default GameShelf;
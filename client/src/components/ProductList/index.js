import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";

const ProductList = () => {
  const cards = [
    { wallpaper: `https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg`, title: "Grand Theft Auto V" },
    { wallpaper: `https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg`, title: "The Witcher 3: Wild Hunt" },
    { wallpaper: three, title: "Arcade Hunt" },
    { wallpaper: foure, title: "Arcade Hunt" },
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
        {cards.map((card) => (
            <Card wallpaper={card.wallpaper} title={card.title}/>
        ))}
      </div>
    </div>
    // <div className="mx-[2rem] lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
    //   <p className="text-white pt-6">PRODUCT LIST</p>
    //   <ul className="max-w-[70vw] mx-auto text-[15px] text-white pl-2 pt-2">
    //     <li>
    //       <h1>Grand Theft Auto V</h1>
    //       <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"></img>
    //       <h2 >Price: 💲16.99</h2>
    //       <h2>Genre: Action Adventure</h2>
    //     </li>
    //     <li>
    //       <h1>The Witcher 3: Wild Hunt</h1>
    //       <img src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Adventure</h2>
    //     </li>
    //     <li>
    //       <h1>Portal 2</h1>
    //       <img src="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Shooter Puzzle</h2>
    //     </li>
    //     <li>
    //       <h1>Tomb Raider (2013)</h1>
    //       <img src="https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Adventure</h2>
    //     </li>
    //     <li>
    //       <h1>Counter-Strike: Global Offensive</h1>
    //       <img src="https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>Portal</h1>
    //       <img src="https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Adventure Puzzle</h2>
    //     </li>
    //     <li>
    //       <h1>Left 4 Dead 2</h1>
    //       <img src="https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>The Elder Scrolls V: Skyrim</h1>
    //       <img src="https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action RPG</h2>
    //     </li>
    //     <li>
    //       <h1>BioShock Infinite</h1>
    //       <img src="https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>Red Dead Redemption 2</h1>
    //       <img src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Adventure</h2>
    //     </li>
    //     <li>
    //       <h1>Life is Strange</h1>
    //       <img src="https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Adventure</h2>
    //     </li>
    //     <li>
    //       <h1>Borderlands 2</h1>
    //       <img src="https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>Half-Life 2</h1>
    //       <img src="https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>BioShock</h1>
    //       <img src="https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>Limbo</h1>
    //       <img src="https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Adventure Indie</h2>
    //     </li>
    //     <li>
    //       <h1>God of War (2018)</h1>
    //       <img src="https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Adventure</h2>
    //     </li>
    //     <li>
    //       <h1>Destiny 2</h1>
    //       <img src="https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>Fallout 4</h1>
    //       <img src="https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action RPG</h2>
    //     </li>
    //     <li>
    //       <h1>DOOM (2016)</h1>
    //       <img src="https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //     <li>
    //       <h1>Team Fortress 2</h1>
    //       <img src="https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"></img>
    //       <h2>Price: 💲16.99</h2>
    //       <h2>Genre: Action Shooter</h2>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default ProductList;

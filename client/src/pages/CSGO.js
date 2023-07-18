import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const GTA5 = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <CategoryMenu categories={categories}/>
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src="https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg" alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[15px] text-white pl-2 pt-2">Counter-Strike: Global Offensive</p>
                    <p className="text-[15px] text-white pl-2 pt-2">🔥Action Shooter</p>
                    <p className="text-[15px] text-white pl-2 pt-2">📖Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists. Arena shooter at its core, CS:GO provides you with various methods of disposing enemies and reliant on cooperation within the team. During the round of the classical clash mode, you will gradually receive currency to purchase different equipment. Each player can carry a primary weapon, secondary pistol, knife and a set of grenades, which all can change the battle if wielded by the skilled player. Objectives are clear and vary from map to map, from game mode to game mode. Stop the terrorists from planting explosives, stop the counter-terrorist from retrieving the hostages, kill everyone who isn’t you and just perform the best with. CS:GO is one of the major cybersport discipline, which makes playing it more exciting to some players. Aside from purchasing the game, CS:GO is infamous for its loot case system, that requires players to purchase keys, in order to open said cases. Customization items consist of weapon skins, weapon stickers, and sprays that do not affect gameplay and have purely visual value to the player.</p>
                    <p className="text-[11px] text-white pl-2 pt-2">💲{getRandomPrice()}</p>
                </div>
            </div>
        </div>
    )
}

export default GTA5;
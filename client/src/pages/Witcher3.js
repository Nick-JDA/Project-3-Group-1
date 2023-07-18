import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const Witcher3 = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <CategoryMenu categories={categories}/>
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg" alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[15px] text-white pl-2 pt-2">🎮Witcher3</p>
                    <p className="text-[15px] text-white pl-2 pt-2">🔥Action Adventure</p>
                    <p className="text-[15px] text-white pl-2 pt-2">📖The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you. CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items. Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.</p>
                    <p className="text-[11px] text-white pl-2 pt-2">💲{getRandomPrice()}</p>
                </div>
            </div>
        </div>
    )
}

export default Witcher3;
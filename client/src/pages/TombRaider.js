import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const TombRaider = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <CategoryMenu categories={categories}/>
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src="https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg" alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[15px] text-white pl-2 pt-2">Tomb Raider 2013</p>
                    <p className="text-[15px] text-white pl-2 pt-2">🔥Action Adventure</p>
                    <p className="text-[15px] text-white pl-2 pt-2">📖A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes. Young Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood. The game will be graphic at times, especially after failed QTE’s during some of the survival scenes, but overall players will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or continuation of existing sub-series within the franchise, but a reboot, setting up Tomb Raider to represent modern gaming experience. The game has RPG elements and has a world, which you can explore during the story campaign and after the completion. As well as multiplayer mode, where 2 teams 4 scavengers and 4 survivors are clashing in 3 game modes while using weapons and environments from the single-player campaign.</p>
                    <p className="text-[11px] text-white pl-2 pt-2">💲{getRandomPrice()}</p>
                </div>
            </div>
        </div>
    )
}

export default TombRaider;
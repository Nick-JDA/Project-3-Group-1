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
                <img className="object-cover w-full " src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[15px] text-white pl-2 pt-2">Grand Theft Auto V</p>
                    <p className="text-[15px] text-white pl-2 pt-2">🔥Action Adventure</p>
                    <p className="text-[15px] text-white pl-2 pt-2">📖Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles including every transport you can operate and the amount is rising with every update. Simultaneous storytelling from three unique perspectives: Follow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. GTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>
                    <p className="text-[11px] text-white pl-2 pt-2">💲{getRandomPrice()}</p>
                </div>
            </div>
        </div>
    )
}

export default GTA5;
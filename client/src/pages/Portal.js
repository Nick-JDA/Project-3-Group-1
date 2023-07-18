import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const Portal = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <CategoryMenu categories={categories}/>
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src="https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg" alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[15px] text-white pl-2 pt-2">Portal</p>
                    <p className="text-[15px] text-white pl-2 pt-2">🔥Adventure Puzzle</p>
                    <p className="text-[15px] text-white pl-2 pt-2">📖Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. Silent template for your adventures, Chell, wakes up in a testing facility. She’s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS. Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see. White environments will guide the player’s portal placement, forcing them to pay attention to the surroundings. Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.</p>
                    <p className="text-[11px] text-white pl-2 pt-2">💲{getRandomPrice()}</p>
                </div>
            </div>
        </div>
    )
}

export default Portal;
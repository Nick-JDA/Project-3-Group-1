import React from "react";
import { useQuery } from "@apollo/client";
import two from "../assets/2.jpg";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const Support = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src={two} alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[100px] text-white pl-2 pt-2">🎮🎮🎮SUPPORT</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Phone: +1 234-567-8901</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Email: smokegame@support.com</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Or Send Us a DM At Discord</p>
        
                </div>
            </div>

        </div>
    )
}

export default Support;
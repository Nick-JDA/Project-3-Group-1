import React from "react";
import { useQuery } from "@apollo/client";
import one from "../assets/1.jpg";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const Store = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src={one} alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[100px] text-white pl-2 pt-2">🎮🎮🎮STORE</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮We are Smoke not Steam, Support us if you are true gamers! Only fake gamers support Steam.</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮We are a online store that looks to expand, support the local! </p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Since we are a new store, we would like to give our customers some offers</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮This Summer, at Smoke!</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Enjoy Buy 1 Get 1 Free for double the price!</p>
                </div>
            </div>

        </div>
    )
}

export default Store;
import React from "react";
import { useQuery } from "@apollo/client";
import one from "../assets/1.jpg";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const About = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src={one} alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[100px] text-white pl-2 pt-2">🎮🎮🎮ABOUT</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮We are a group of Gamers!</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Please Play Games with MEEEEEEEEE</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮We will stay as a team!</p>
        
                </div>
            </div>

        </div>
    )
}

export default About;
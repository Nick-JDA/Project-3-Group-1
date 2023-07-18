import React from "react";
import { useQuery } from "@apollo/client";
import two from "../assets/2.jpg";

import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"
import getRandomPrice from "../utils/price";

const Community = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <div className="max-w-[70vw] mx-auto">
                <img className="object-cover w-full " src={two} alt="" />
                <div className="bg-teal-600 h-[25rem]">
                    <p className="text-[100px] text-white pl-2 pt-2">🎮🎮🎮COMMUNITY</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Sign up today to join our community, we would like to grow with you!</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Become a user today by signing up</p>
                    <p className="text-[20px] text-white pl-2 pt-2"></p>
                    <p className="text-[20px] text-white pl-2 pt-2">🎮🎮🎮Join our Discord: https://discord//not-a-real-link</p>
        
                </div>
            </div>

        </div>
    )
}

export default Community;
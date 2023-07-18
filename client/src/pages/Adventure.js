import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import AdventureList from "../components/AdventureList";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"

const Adventure = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav/>
            <CategoryMenu categories={categories}/>
            <AdventureList />
        </div>
    )
}

export default Adventure;
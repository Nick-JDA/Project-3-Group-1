import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import ActionAdventureList from "../components/ActionAdventureList";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"

const ActionAdventure = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav/>
            <CategoryMenu categories={categories}/>
            <ActionAdventureList />
        </div>
    )
}

export default ActionAdventure;
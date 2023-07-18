import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import ActionShooterList from "../components/ActionShooterList";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"

const ActionShooter = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav/>
            <CategoryMenu categories={categories}/>
            <ActionShooterList />
        </div>
    )
}

export default ActionShooter;
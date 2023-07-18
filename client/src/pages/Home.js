import React from "react";
import { useQuery } from "@apollo/client";

import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Nav from "../components/Nav";


import { QUERY_CATEGORIES } from "../utils/queries";
//import { QUERY_PRODUCTS } from "../utils/queries"

const Home = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);
    
    return (
        <div>
            <Nav />
            <CategoryMenu categories={categories}/>
            <ProductList/>
        </div>
    )
}

export default Home;
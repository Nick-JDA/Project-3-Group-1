import React from "react";
import { useQuery } from "@apollo/client";

import ProductList from "../components/ProductList";

import CategoryMenu from "../components/CategoryMenu";

import { QUERY_CATEGORIES, QUERY_ALL_PRODUCTS } from "../utils/queries";

const Home = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    // const { loading2, data2 } = useQuery(QU) 

    return (
        <div>
            <CategoryMenu categories={categories}/>
            {/* <ProductList /> */}
        </div>
    )
}

export default Home;
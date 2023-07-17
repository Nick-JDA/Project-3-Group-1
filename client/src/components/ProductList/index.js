import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, title }) => {
    return (
        <div>
            <p>
                {products.name}
            </p>
            <p>
                {products.price}
            </p>
            
        </div>
    )
};

export default ProductList;
import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = ({ categories, title }) => {
    return (
        <div>
            {categories.map((category) => (
                <li key={category._id}>{category.name}</li>
            ))}
        </div>
    )
}

export default CategoryMenu;
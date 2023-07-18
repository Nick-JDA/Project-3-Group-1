import React from "react";
import { Link } from "react-router-dom";


const CategoryMenu = ({ categories, title }) => {
    return (
        <div>
            Our Categories
            <div style={{display:"flex",}}>
                {categories.map((category) => (
                    <li style={{border: "2px solid black", textAlign:"center"}}key={category._id}><button style={{backgroundColor:"Red"}}>{category.name}</button></li>
                ))}
            </div>
        </div>
    )
}

export default CategoryMenu;
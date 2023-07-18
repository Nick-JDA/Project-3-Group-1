import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = ({ categories, title }) => {
  return (
    <div>
      <div className="hidden gradient mx-[2rem] pl-4 pr-2 mt-8 lg:flex items-center justify-between rounded-[0.2rem] py-[0.1rem]">
        <ul className="flex items-center py-1.5 text-white text-[14px] gap-10">
          {categories.map((category) => (
            <li key={category._id}>
              <button>{category.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;

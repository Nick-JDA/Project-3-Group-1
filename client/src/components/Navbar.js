import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="hidden gradient mx-[2rem] pl-4 pr-2 mt-8 lg:flex items-center justify-between rounded-[0.2rem] py-[0.1rem]">
      <ul className="flex items-center py-1.5 text-white text-[14px] gap-10">
        <li>
          <p>Your Store</p>
        </li>
        <li>
          <p>New & Noteworthy</p>
        </li>
        <li>
          <p>Categories</p>
        </li>
        <li>
          <p>Points Shop</p>
        </li>
        <li>
          <p>News</p>
        </li>
        <li>
          <p>Labs</p>
        </li>
      </ul>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="search"
          className="pl-4 rounded-[0.2rem] placeholder:text-black"
        />
        <AiOutlineSearch className="ml-1 text-white" />
      </div>
    </div>
  );
};

export default Navbar;
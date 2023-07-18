import React from "react";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Login } from "../../pages/Login";

const Nav = () => {
  return (
    <div className="bg-[#171a21]">
      <div className="flex items-center max-w-[70vw] mx-auto relative">
        {/* Left */}
        <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
          <div className="lg:hidden left-4 absolute text-white">
            <FiMenu className="text-[30px]" />
          </div>

          <div className="flex items-center text-[#c5c3c0] font-semibold text-[26px]">
            <Link to="/">
              <img src={logo} alt="Smoke-logo" className="w-12 h-12 mr-2" />
            </Link>
            <p>SMOKE</p>
          </div>
        </div>
        {/* Middle */}
        <div className="hidden lg:flex pl-10">
          <ul className="text-[#c5c3c0] text-[13px] flex gap-5">
            <li>
              <p className="hover:text-white duration-100 ease-out">STORE</p>
            </li>
            <li>
              <p className="hover:text-white duration-100 ease-out">
                COMMUNITY
              </p>
            </li>
            <li>
              <p className="hover:text-white duration-100 ease-out">ABOUT</p>
            </li>
            <li>
              <p className="hover:text-white duration-100 ease-out">SUPPORT</p>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="absolute text-white right-10 top-0 text-[12px] lg:flex items-center mt-1.5 hidden">
          <div className="flex items-center bg-[#5c7e10] px-2 py-0.5  rounded-[0.2rem]">
            <ImDownload className="mr-2" />
            <p className="">Install Smoke</p>
          </div>
          <div className="ml-3 py-[2px]">
            <Link to="/login" className="text-[#c5c3c0] hover:text-white duration-100 ease-out">
                login
            </Link>
          </div>
          <div className="h-[15px] w-[1px] bg-[#c5c3c0] mx-2"></div>
          <div className="flex items-center">
            <p className="text-[#c5c3c0] hover:text-white duration-100 ease-out">
              language
            </p>
            <BiWorld className="w-3 h-3 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

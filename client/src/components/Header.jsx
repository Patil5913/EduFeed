import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/blacklogo.svg";
import Login from "../pages/login/Login";
const Header = () => {
  return (
    <header class="   mb-1 my-3 ">
      <div class="container mx-auto flex items-center h-[5rem] max-w-full ">
        <a href="/" class="flex items-center justify-center gap-3 px-5 ">
          <img class="h-[5rem] w-[5rem] " src={Logo} alt="logo" />
          <span class=" hidden md:block text-xl ml-2 uppercase font-black text-quaternary ">EduFeed</span>
         
          
        </a>
        <div className="flex w-full justify-end gap-4">
          <Link
            to="/Login"
            class="relative border-2 border-dashed border-quaternary px-4 py-2 lg:px-10 lg:py-3 text-quaternary text-base font-bold overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#E5E3D4] before:to-[#c3ba76] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Login from '../pages/login/Login'
const Header = () => {
  return (
    <header class=" bg-black  text-white shadow-lg hidden md:block top-2 z-10 sticky mb-1 ">
      <div class="container mx-auto flex items-center h-24 ">
        <a href="" class="flex items-center justify-center ">
          <img class="h-24" src={Logo} alt="" />
          <span class="text-xl ml-2 uppercase font-black  ">EduFeed</span>
        </a>
        <div className="flex w-full justify-end gap-4">
          <div>
            {/* <button class="relative border-2 mr-3 border-dashed border-[#588297] py-2 px-5 text-[#588297] text-base font-bold nded-full overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#104d6a] before:to-[#588297] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Admin Login
            </button> */}
            {/* <button class="relative border-2 border-dashed border-[#aec42b] py-2 px-5 text-[#aec42b] text-base font-bold nded-full overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#aec42b] before:to-[#c6d66b] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Mentor Login
            </button> */}
          </div>
          {/* <div
    class="inline-block  min-h-[1em] w-0.5 self-stretch bg-white opacity-100 dark:opacity-50"></div> */}
          
          <Link to="/Login" class="relative border-2 border-dashed border-[#f98d17]  px-10 py-3 text-[#f98d17] text-base font-bold nded-full overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f98d17] before:to-[#c6d66b] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            Login
            </Link>
        </div>
        {/* <ul class="mx-auto flex items-center bg-white">
            <li class="p-5 xl:p-8 active">
              <a href="">
                <span>Student</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>Mentor</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>University</span>
              </a>
            </li>
          </ul> */}
      </div>
    </header>
  );
};

export default Header;

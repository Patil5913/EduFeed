import React from "react";
import Logo from "../assets/Logo.jpg"
const Header = () => {
  return (
    <header class="bg-black bg-opacity-5 text-white shadow-lg hidden md:block">
      <div class="container mx-auto flex items-center h-24">
        <a href="" class="flex items-center justify-center">
          <img
            class="h-24"
            src={Logo}
            alt=""
          />
          <span class="text-xl ml-4 uppercase font-black">
            EduFeed
          </span>
        </a>
        <nav class="contents font-semibold text-base lg:text-lg">
          <ul class="mx-auto flex items-center">
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
          </ul>
        </nav>
        <button class="border border-white rounded-full font-bold px-8 py-2">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;

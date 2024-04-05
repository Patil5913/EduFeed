import React from "react";
import { Link } from "react-router-dom";

const forgotbody = () => {
  return (
    <div className=" flex-grow  w-full my-5 p-8 rounded-lg  flex justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center  w-full sm:w-fit px-8 pb-6 "
      >
        <div className=" ">
          <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width='40'
                      height='40'
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path>
          </svg>
        </div>

        <div className=" p-3">
          <h1 className="text-xl lg:text-2xl font-serif text-quaternary font-bold">
            Reset Password
          </h1>
        </div>

        <div className=" mt-2">
          <p className="  text-xs sm:text-sm lg:text-base font-medium">
            Please enter your Email and your Password
          </p>
        </div>

        <div class="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5  ">
          <div class="relative">
            <input
              autocomplete="off"
              id="Prn"
              name="Prn"
              type="text"
              class=" bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Prn.no"
            />
            <label
              for="email"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Prn.no
            </label>
          </div>

          <div class="relative">
            <input
              autocomplete="off"
              id="email"
              name="email"
              type="text"
              class=" bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Email address"
            />
            <label
              for="email"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>
          <div class="relative">
            <input
              autocomplete="off"
              id="NewPassword"
              name="NewPassword"
              type="password"
              class=" bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Password"
            />
            <label
              for="NewPassword"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
               New Password
            </label>
          </div>
         
        </div>
        <Link
          to=""
          className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
        >
          Reset
        </Link>
      </form>
    </div>
  );
};

export default forgotbody;

import React from "react";
import { Link } from "react-router-dom";

const Loginform = () => {
  return (
    <>
      <div className=" flex-grow  w-full my-5 p-8 rounded-lg  flex justify-center items-center">
        <form
          action=""
          className="flex flex-col justify-center items-center  w-full sm:w-fit px-8 pb-6 "
        >
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </div>

          <div className=" p-3">
            <h1 className="text-xl lg:text-2xl font-serif text-quaternary font-bold">
              Login
            </h1>
          </div>

          <div className=" mt-2">
            <p className="  text-xs sm:text-sm lg:text-base font-medium">
              Please enter your Email and your Password
            </p>
          </div>

          <div class="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
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
                id="password"
                name="password"
                type="password"
                class=" bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Password"
              />
              <label
                for="password"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Password
              </label>
            </div>
            <a
              href="#"
              className=" justify-end flex text-xs text-quaternary hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
          <Link
            to=""
            className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default Loginform;
//flex and div exchange karna hai

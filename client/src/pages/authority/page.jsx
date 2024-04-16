import React from "react";
import { Link } from "react-router-dom";

const Authority = () => {
  return (
    <>
      <h1 className="text-center mt-5 text-3xl font-serif">Welcome _NAME_</h1>
      <div className="flex justify-center">
        <div className="w-[70%]  border-2 border-solid border-black py-5 px-5 md:px-0 mt-10 rounded-3xl">
          <div className="flex justify-center space-x-4 mt-7">
            <div className="h-1 w-10  rounded-full bg-black"></div>
            <div className="h-1 w-10 rounded-full bg-tertiary"></div>
            <div className="h-1 w-10 rounded-full bg-tertiary"></div>
            <div className="h-1 w-10 bg-tertiary"></div>
            <div className="h-1 w-10 rounded-full bg-tertiary"></div>
          </div>

          <div className="flex justify-center mt-7 md:px-12">
            <div className="w-5 h-5 flex mr-5 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              </svg>
            </div>
            <p className="md:text-xl  font-para font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              sed necessitatibus aut nesciunt, dolores reiciendis. Fugiat
              perferendis officia magni culpa placeat, suscipit dolor earum
              itaque?
            </p>
          </div>

          <div className="mt-12 md:ml-24 ml-11 space-y-5">
            <div class="flex items-center ps-4 border-2 border-gray-200  dark:border-gray-700  w-32 rounded-full px-2">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-5 h-5 text-black  "
              />
              <label
                for="bordered-radio-1"
                class="font-serif uppercase py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
               good
              </label>
            </div>

            <div class="flex items-center ps-4 border-2 border-gray-200  dark:border-gray-700  w-32 rounded-full px-2">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-5 h-5 text-black  "
              />
              <label
                for="bordered-radio-1"
                class=" font-serif uppercase py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
               good
              </label>
            </div>

            <div class="flex items-center ps-4 border-2 border-gray-200  dark:border-gray-700  w-32 rounded-full px-2">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-5 h-5 text-black  "
              />
              <label
                for="bordered-radio-1"
                class="font-serif uppercase py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
               good
              </label>
            </div>

            <div class="flex items-center ps-4 border-2 border-gray-200  dark:border-gray-700 w-32  rounded-full px-2">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-5 h-5 text-black  "
              />
              <label
                for="bordered-radio-1"
                class="font-serif uppercase py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Default 
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-10 flex justify-end w-[70%] space-x-6">
          <Link
            to=""
            className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Submit
          </Link>

          <Link
            to=""
            className="hover:brightness-110  font-bold py-3 px-8 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Next  
          </Link>
        </div>
      </div>
    </>
  );
};

export default Authority;

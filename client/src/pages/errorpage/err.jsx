import React from "react";
import { Link } from "react-router-dom";

const err = () => {
  return (
    <div className="text-white h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col">
        <h2>404: Page not found</h2>
        <p>Sorry, the page you requested does not exist</p>
        <Link
          to="/"
          class="relative text-center border-2 border-dashed border-[#f98d17] mt-5 px-10 py-3 text-[#f98d17] text-base font-bold nded-full overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f98d17] before:to-[#fbaf5d] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default err;

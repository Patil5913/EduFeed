import React from "react";
// import Img1 from "../../../assets/educator.svg";

import ff from "../../../assets/ff.svg";
const Details = () => {
  return (
    <>
      <div className="max-h-full flex flex-col justify-evenly items-center sm:flex-row">
        <div className="w-1/2 ">
        <img  src={ff} alt="" className="w-3/4 ml-10 "/>
        </div>
        
        <div className="text-white w-1/2 mx-5 ">
            <p className="text-4xl font-bold ">About</p>
            <p className="text-s pt-5">EduFeed is an academic feedback system designed to provide students with effective and actionable feedback regarding the faculty members as well as the facilities lacking in the institute. Also our feedback system will provide an extra hand to students to give feedback on the courses and the curriculum they are offered during their semester learning.</p>
        </div>
      </div>
      {/* <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
      <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
        <span class="text-5xl font-bold">Jr</span>
        <p class="text-amber-300 font-thin">- Frontend Developer -</p>
      </div>
    </div> */}
    </>
  );
};

export default Details;


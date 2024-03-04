import React from "react";
import { Link } from "react-router-dom";
const Student = () => {
  return (
    <div className="text-black">
     
      {/* add two buttons that redirects to /academic and /non-academic */}
      {/* <Link to="/academic">Academic</Link>
      <Link to="/non-academic">Non Academic</Link> */}
      {/* This is student page
      <Link to="/academic">Academic</Link>
      <Link to="/non-academic">Non Academic</Link> */}
      <div class="flex flex-col bg-white py-4 px-12">
        <div class="py-4">
          <div class="pl-[116px] pr-[205px] py-8">
            <div class="text-7xl text-black mx-10 flex justify-center">Student Feedback</div>
          </div>
        </div>
        <div class="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
          <div>
            <div class="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
              <div class="text-white space-y-4">
                <h3 class="text-xl font-bold lead-xl bold">Academic</h3>
                <div class="text-lg font-light">
                Empowerment through Feedback: Nurturing Excellence, Inspiring Growth
                </div>
              </div>
              <div class="flex justify-between pt-8">
                
                <div class="flex flex-col justify-end">
                <button
                type="submit"
                class="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
              feedback
              </button>
                </div>
              </div>
            </div>
          </div>
          <div class="">
        
            <div class="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
              <div class="text-white space-y-4">
                <h3 class="text-xl font-bold lead-xl bold">Non Academic</h3>
                <div class="text-lg font-light">
                Feedback Fuels Success : Cultivating Potential, Fostering Progress,Inspire .
                </div>
              </div>
              <div class="flex justify-between pt-8">
                
                <div class="flex flex-col justify-end">
                <button
                type="submit"
                class="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
              feedback
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;

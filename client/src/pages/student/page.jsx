import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Student = () => {
  const handleSubmit = async () => {
    try {
      
    } catch (error) {
      console.log(response.status);
      console.error("Error :", error);
    }
  };
  return (
    <>
      <div className=" w-full h-[5rem] flex justify-center items-center ">
        <h1 className="font-serif font-bold text-3xl ">FeedBack</h1>
      </div>
      <div className="flex  m-10 justify-center  gap-20 ">
        <div class=" w-[300px] rounded-3xl  overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-primary flex flex-col items-center justify-center gap-3 transition-all duration-300 group border-2 border-black">
          <div class=" uppercase text-center  z-40 ">
            <p class="text-black font-bold text-2xl font-serif  px-5">
              Academic{" "}
            </p>
            <p className="text-sm font-semibold font-serif"> FeedBack</p>
          </div>

          <div className=" z-40 grid space-y-2.5 mt-8">
            <button  onSubmit={handleSubmit}>
              <div class="flex items-center space-x-4 p-2 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="mortarboard"
                  >
                    <path d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"></path>
                  </svg>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">Faculty Feedback</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </button>
            <button  onSubmit={handleSubmit}>
              <div class="flex items-center space-x-4 p-2 rounded-full bg-secondary">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="wifi-off"
                  >
                    <path d="M6.92,5.51h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.56,6A15.21,15.21,0,0,0,1.4,8.39a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.7-.29A13.07,13.07,0,0,1,6.05,7.46L7.54,9a10.78,10.78,0,0,0-3.32,2.27,1,1,0,1,0,1.42,1.4,8.8,8.8,0,0,1,3.45-2.12l1.62,1.61a7.07,7.07,0,0,0-3.66,1.94,1,1,0,1,0,1.42,1.4A5,5,0,0,1,12,14a4.13,4.13,0,0,1,.63.05l7.66,7.66a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,16a3,3,0,1,0,3,3A3,3,0,0,0,12,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,20ZM22.61,8.39A15,15,0,0,0,10.29,4.1a1,1,0,1,0,.22,2A13.07,13.07,0,0,1,21.2,9.81a1,1,0,0,0,1.41-1.42Zm-4.25,4.24a1,1,0,0,0,1.42-1.4,10.75,10.75,0,0,0-4.84-2.82,1,1,0,1,0-.52,1.92A8.94,8.94,0,0,1,18.36,12.63Z"></path>
                  </svg>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">Facilities</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </button>
          </div>

          <div class="absolute rounded-full bg-gray-400 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
        </div>

        <div class=" w-[300px] rounded-3xl  overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0  px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group border-2 border-black">
          <div class=" uppercase text-center  z-40 ">
            <p class="text-black font-bold text-2xl font-serif ">
              Non-Academic{" "}
            </p>
            <p className="text-sm font-semibold font-serif"> FeedBack</p>
          </div>

          <div className=" z-40 grid space-y-2.5 mt-8">
            <a href="#">
              <div class="flex items-center space-x-4 p-2 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 16a3 3 0 0 1 -3 3"></path>
                    <path d="M16 16a3 3 0 0 0 3 3"></path>
                    <path d="M12 16v4"></path>
                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                  </svg>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">Air Conditioner</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </a>
            <a href="#">
              <div class="flex items-center space-x-4 p-2 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 16a3 3 0 0 1 -3 3"></path>
                    <path d="M16 16a3 3 0 0 0 3 3"></path>
                    <path d="M12 16v4"></path>
                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                  </svg>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">Air Conditioner</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </a>
          </div>

          <div class="absolute rounded-full bg-gray-400 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
        </div>
      </div>
    </>
  );
};

export default Student;
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const Student = () => {
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:6969/getacademicdetails"
//       );
//       console.log(response);

//       if (response.status === 201) {
//         toast.success("User added successfully!");
//       } else if (response.status === 208) {
//         console.log("hehe");
//         toast.error("User already exists!");
//       }
//     } catch (error) {
//       console.log(response.status);
//       console.error("Error adding user:", error);
//       toast.error("Error adding user. Please try again.");
//     }
//   };
//   return (
//     <div>
//       <div class="flex flex-col  text-white bg-black h-screen py-4 px-12">
//         <div class="py-4">
//           <div class="pl-[116px] pr-[205px] py-8">
//             <div class="text-7xl text-white mx-10 flex justify-center">
//               Student Feedback
//             </div>
//           </div>
//         </div>
//         <div class="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
//           <div>
//             <div class="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
//               <div class="text-white space-y-4">
//                 <h3 class="text-xl font-bold lead-xl bold">Academic</h3>
//                 <div class="text-lg font-light">
//                   Empowerment through Feedback: Nurturing Excellence, Inspiring
//                   Growth
//                 </div>
//               </div>
//               <div class="flex  justify-between pt-8">
//                 <div class="flex flex-col justify-end">
//                   <Link
//                     to="/academic"
//                     class="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                   >
//                     Academic Feedback
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="">
//             <div class="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
//               <div class="text-white space-y-4">
//                 <h3 class="text-xl font-bold lead-xl bold">Non Academic</h3>
//                 <div class="text-lg font-light">
//                   Feedback Fuels Success : Cultivating Potential, Fostering
//                   Progress,Inspire .
//                 </div>
//               </div>
//               <div class="flex justify-between pt-8">
//                 <div class="flex flex-col justify-end">
//                   <form onSubmit={handleSubmit}>
//                     <button
//                       type="submit"
//                       className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                     >
//                       Non Academic Feedback
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Student;

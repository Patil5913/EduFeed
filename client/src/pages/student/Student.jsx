import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import FeedSection from "./components/FeedSection.jsx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Student = () => {
  
  return (
    <div>
      <Header />
    <FeedSection />
      <Footer />
    </div>
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

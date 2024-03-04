import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {useAuth} from '../../store/auth'
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    prn: "",
    email: "",
    password: "",
    branch: "",
    yearofjoining: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const {storeTokenInLs}=useAuth();
    try {
      const response = await axios.post(
        "http://localhost:6969/register",
        formData
      );
      
      console.log(formData);
      console.log(response.data); // Assuming the server sends a response message
      // const err= response.status
      // console.log(err)
      if (response.status === 201) {
        // storeTokenInLs(response.data.token);
        toast.success("User added successfully!");
      } else if (response.status === 208) {
        console.log("hehe");
        toast.error("User already exists!");
      }
    } catch (error) {
      console.log(response.status);
      console.error("Error adding user:", error);
      toast.error("Error adding user. Please try again.");
    }
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div class="bg-gray-100 flex items-center justify-center h-screen">
          <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div class="flex justify-center mb-6">
              <span class="inline-block bg-gray-200 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  heclientight="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                  />
                </svg>
              </span>
            </div>
            <h2 class="text-2xl font-semibold text-center mb-4">
          Registration
            </h2>  
              <div class="mb-3">
                <label
                  htmlFor="name"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="prn"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                  PRN
                </label>
          <input
                id="prn"
                type="prn"
                name="prn"
                value={formData.prn}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="email"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
          <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="password"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                 Password
                </label>
          <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="branch"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                 Branch
                </label>
          <input
                id="branch"
                type="text"
                name="branch"
                value={formData.branch}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="yearofjoining"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                 Year Of Joining
                </label>
          <input
                id="yearofjoining"
                type="text"
                name="yearofjoining"
                value={formData.yearofjoining}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              <div class="mb-3">
                <label
                  htmlFor="role"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                 Role
                </label>
                <select
                id="role"
                type="text"
                name="role"
                value={formData.role}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                >
                   <option value="">Select</option>
            <option value="STUDENT">Student</option>
            <option value="MENTOR">Mentor</option>
            <option value="AUTHORITY">Authority</option>

                </select>
               
              </div>
              
              <button
                type="submit"
                class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                login
              </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;

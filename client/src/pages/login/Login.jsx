import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../store/auth";
const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:6969/login",
        formData
      );

      // console.log(response.data.role);

      if (response.status === 201) {
        storeTokenInLs(response.data.token);
        toast.success("Login successful");
        console.log(response.data.role);
        if (response.data.role == "STUDENT") {
          navigate("/student");
        } else if (response.data.role == "MENTOR") {
          navigate("/mentor");
        } else if (response.data.role == "AUTHORITY") {
          navigate("/authority");
        }
        
      } else {
        toast.error("Login failed");
      }
      storeTokenInLs(response.data.token);
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.status === 401) {
        toast.error("Invalid credentials");
      } else {
        toast.error(`Error: ${error.message}`);
      }
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
                  height="24"
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
            Student Login
            </h2>  
              <div class="mb-4">
                <label
                  htmlFor="email"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email Address *
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
              <div class="mb-6">
                <label
                  for="password"
                  class="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password *
                </label>
          <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                required
                onChange={handleChange}
                class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="••••••••"
                />
                
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

export default Login;

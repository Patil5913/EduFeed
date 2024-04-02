import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <div className=" w-full  py-2  flex justify-center flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
          </svg>
          <h1 className="text-xl lg:text-2xl font-serif text-quaternary font-bold">
            Register
          </h1>
        </div>
        <form
          action=""
          className="  w-full flex flex-col sm:flex-row justify-center items-center  sm:w-3/4 px-8 pb-5 sm:pb-10 sm:gap-5"
        >
          <div class="  py-8 px-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
            <div class="relative">
              <input
                autocomplete="off"
                id="Name"
                name="Name"
                type="text"
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs  text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="Name"
              />
              <label
                for="Name"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
            <div class="relative">
              <input
                autocomplete="off"
                id="Prn.no"
                name="Prn.no"
                type="text"
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs  text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="Prn.no"
              />
              <label
                for="Prn.no"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Prn.no
              </label>
            </div>
          </div>

          <div class="  sm:pt-14 px-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
            <div class="relative">
              <input
                autocomplete="off"
                id="email"
                name="email"
                type="text"
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-secondary"
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
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs  text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="Password"
              />
              <label
                for="password"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Password
              </label>
            </div>

            {/* <div class="relative">
              <select
                id="Role"
                name="Role"
                class="bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-xs text-gray-900 focus:outline-none focus:border-quaternary"
              >
                <option value="" className="font-bold">
                  Role
                </option>
                <option value="password1">Password 1</option>
                <option value="password2">Password 2</option>
                <option value="password3">Password 3</option>
              </select>
              <label
        for="password"
        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
    >
        Password
    </label>
            </div> */}

            <div class="relative inline-flex w-full">
              <svg
                class="w-4 h-3 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                id="Role"
                name="Role"
                class="border-b-2 text-gray-600 h-10  pr-10 bg-transparent hover:border-gray-400 focus:outline-none focus:border-secondary appearance-none w-full"
              >
                <option className="font-bold text-xl">Role</option>
                <option>Student</option>
                <option>Mentor</option>
                <option>Authority</option>
                
              </select>
            </div>
          </div>

          <div class="  py-8 px-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
            <div class="relative inline-flex w-full">
              <svg
                class="w-4 h-3 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                id="Role"
                name="Role"
                class="border-b-2 text-gray-600 h-10  pr-10 bg-transparent hover:border-gray-400 focus:outline-none focus:border-secondary appearance-none w-full"
              >
                <option className="font-bold text-xl ">Branch</option>
                <option>CE</option>
                <option>IT</option>
                <option>AIDS</option>
                <option>ME</option>
                <option>EE</option>
                <option> Civil eng</option>
                
              </select>
            </div>
            <div class="relative inline-flex w-full">
              <svg
                class="w-4 h-3 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                id="Role"
                name="Role"
                class="border-b-2 text-gray-600 h-10  pr-10 bg-transparent hover:border-gray-400 focus:outline-none focus:border-secondary appearance-none w-full"
              >
                <option className="font-bold"> currentsem</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
            
          </div>
          
        </form>
        <div className=" sm:w-3/4 flex justify-center pb-16 sm:pb-0">
        <Link
            to=""
            className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Submit
          </Link>
          </div>
      </div>
    </>
  );
};

export default RegisterForm;

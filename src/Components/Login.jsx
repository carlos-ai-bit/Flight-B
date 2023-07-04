// import SignUp from "./SignUp";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
function Login() {
  // {
  //   const Login = () => {
  //     const [] = useState("");
  //     const [] = useState("");
  //     const navigate = useNavigate();
  //   };
  // }
  return (
    <div className="text-center min-h-screen p-7 items-center">
      <h1 className=" font-semibold text-center">It is time to fly</h1>
      <h1 className="mt-8 font-semibold ">Login</h1>
      <div className="flex flex-wrap items-center justify-center">
        <input
          className=" text-center font-semibold flex justify-center mb-6 border-solid border-2 border-sky-300 rounded-full "
          type="text"
          placeholder="Email"
        />
        <input
          className=" text-center font-semibold flex items-start mb-6 border-solid border-2 border-sky-300 rounded-full"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <button
          type="button"
          className="cursor-pointer mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div>
          <h1>
            Dont have an account{" "}
            <a className="mr-4 hover:underline md:mr-6 " href="">
              {" "}
              Sign Up
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;

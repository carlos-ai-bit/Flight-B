// import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/Home");
  }
  return (
    <div>
      <form className="text-center ">
        <div className="mt-7 ">
          <input
            type="firstname"
            name="firstname"
            id="firstname"
            value={firstname}
            required
            onChange={(e) => setFirstname(e.target.value)}
            className="cursor-pointer  text-center  border-solid border-2 border-sky-300 rounded-full"
            placeholder="First Name"
          ></input>
          <input
            type="secondname"
            name="secondname"
            id="secondname"
            value={secondname}
            required
            onChange={(e) => setSecondname(e.target.value)}
            className="cursor-pointer  text-center  border-solid border-2 border-sky-300 rounded-full"
            placeholder="Second Name"
          ></input>
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="cursor-pointer  text-center  border-solid border-2 border-sky-300 rounded-full"
            placeholder="Email Address"
          ></input>
          <input
            className="cursor-pointer  mt-4 text-center  border-solid border-2 border-sky-300 rounded-full"
            placeholder="Phone Number"
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="cursor-pointer  mt-3 text-center  border-solid border-2 border-sky-300 rounded-full"
            placeholder="Enter your 8 digit password  "
          ></input>
          <button
            type="submit"
            onClick={navigateHome}
            className="flex-col justify-center cursor-pointer  mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

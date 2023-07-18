// import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SignUp = () => {
  const SignUp = () => {
    useEffect(() => {
      fetch("http://localhost:3000/users", { method: "POST", headers: {} })
        .then((response) => response.json)
        .then((data) => data)
        .catch((err) => console.log(err));
    }, []);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    SignUp("");

    setEmail("");

    setPassword("");
    console.log(`already a user`);
  };

  const navigate = useNavigate();
  function navigateHome() {
    navigate("/Home");
  }
  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
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
            placeholder="Enter your 8[HTTP/1.1 404 Not Found 0ms] digit password  "
          ></input>
          <button
            onSubmit={handleSubmit}
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

// import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState();
  const [users, fetchUsers] = useState(false);
  // useEffect(() => {
  //   fetch("http://localhost:3000/users", {

  //   })
  //     .then((response) => response.json)
  //     .then((data) => fetchUsers(data))
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        fetchUsers(res);
        console.log(res);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });
    // setPassword("");
    // setEmail("");
    console.log(`successfuly signed${users}`);
  };
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/Home");
  }
  function navigateSignUP() {
    navigate("/SignUp");
  }

  return (
    <div className="bg-gray-400 text-center min-h-screen p-7 items-center">
      <h1 className=" font-semibold text-center">It is time to fly</h1>
      <h1 className="mt-8 font-semibold ">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        {" "}
        <div className="flex flex-wrap items-center justify-center">
          <input
            onSubmit={handleSubmit}
            className=" text-center flex justify-center mb-6 border-solid border-2 border-sky-300 rounded-full "
            type="text"
            id="email"
            name="email"
            // value={email}
            required
            placeholder="Email"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            minLength={8}
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className=" text-center flex items-start mb-6 border-solid border-2 border-sky-300 rounded-full"
            placeholder="password"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          onChange={navigateHome}
          className="cursor-pointer mt-3 text-white bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600"
        >
          Login
        </button>
        <h1>
          Dont have an account{" "}
          <a
            className="mr-4 hover:underline md:mr-6 "
            href="#"
            onClick={navigateSignUP}
          >
            {" "}
            Sign Up
          </a>
        </h1>
      </form>
      <div></div>
    </div>
  );
};

export default Login;

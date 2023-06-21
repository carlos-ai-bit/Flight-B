export default function SignUp() {
  return (
    <div>
      <form className="text-center ">
        <div className="mt-7 ">
          <input
            className="cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            name="floating_first_name"
            placeholder="First Name"
          ></input>
          <input
            className="cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            name="floating_second_name"
            placeholder="Second Name"
          ></input>
        </div>
        <div>
          <input
            className="cursor-pointer  text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            placeholder="Email Address"
          ></input>
          <input
            className="cursor-pointer  mt-4 text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            placeholder="Phone Number"
          ></input>
        </div>
        <div>
          <input
            className="cursor-pointer  mt-3 text-center font-semibold border-solid border-2 border-sky-300 rounded-full"
            placeholder="Enter your 8 digit password  "
          ></input>
          <button
            type="submit"
            className="flex-col justify-center cursor-pointer  mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

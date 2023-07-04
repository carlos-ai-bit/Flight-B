// import React from 'react'

export const Payment = () => {
  return (
    <div>
      {" "}
      <input
        className=" text-center font-semibold flex justify-center mb-6 border-solid border-2 border-sky-300 rounded-full "
        type="text"
        placeholder=""
      />
      <div className="inline-flex rounded-md shadow-sm text-">
        <p
          aria-current="page"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Date
        </p>
        <p className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Passenger
        </p>
        <p className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Class
        </p>
      </div>
      <div>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
      </div>
      <div className="">
        <button className=" cursor-pointer mt-3 text-black bg-sky-700 hover:bg-sky-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 ">
          Search
        </button>
      </div>
      <div className="h-auto max-w-lg mx-auto mt-9">
        <img
          className="relative max-w-sm transition-all duration-300  filter grayscale hover:grayscale-0"
          src="https://a.travel-assets.com/travel-assets-manager/cread-841/POSa-LP-Hero-M-551x413.jpg"
          alt=""
          title="img2"
        />
      </div>
      <div className="inline-flex rounded-md shadow-sm text-">
        <p
          aria-current="page"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <img src="Img/clock.svg" />
        </p>
        <p className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Price
        </p>
        <p className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          More
        </p>
      </div>
      <div>
      <button className=" cursor-pointer mt-3 text-black bg-sky-700 hover:bg-sky-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 ">
          
        </button>
      </div>
    </div>
  );
};

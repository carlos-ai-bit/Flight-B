// import React from "react";

export default function Home() {
  return (
    <div className="">
      <ul className="flex flex-wrap items-center justify-center mb-6">
        <a href="#" className="mr-4 hover:underline md:mr-6 ">
          All Flights
        </a>
        <a href="#" className="mr-4 hover:underline md:mr-6 ">
          Schedule
        </a>
        <a href="#" className="mr-4 hover:underline md:mr-6 ">
          Passengers
        </a>
      </ul>
      <h1 className="flex flex-wrap items-center justify-center">
        Ready to take off?
      </h1>
      <div className="h-auto max-w-lg mx-auto mt-9">
        {" "}
        <img
          className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
          src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSuIt5HNuhOfr1FReHKBPKqbD3m7fhy4PsRY364HIhhs026Gk1FwuQZpEfrPbIeusdO"
          alt="flight-img"
          title=""
        />
      </div>
      <div className=" mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
        {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}

        <section>
          <div>
            <h2 className="tmt-8 fon flex flex-wrap ">Search Flight</h2>
          </div>
          <hr className="w-48 h-1 mr-auto my-4 bg-gray-100 rounded-full md:my-10 dark:bg-gray-600"></hr>
          <div className="">
            <h1>Departure City</h1>
            <h1> DXB, Dubai-UAE</h1>
          </div>
          <div>
            {/* className="flex flex-col flex-wrap items-center justify-center" */}
            <h1>Arrival City</h1>
            <h1>RUH, Riyadh-Saudi</h1>
          </div>
          <div>
            <h1>Departure-Arrival</h1>
            <h1>28 Feb - One Way</h1>
          </div>
          <div>
            <h1>Passenger</h1>
            <h1>3 Adults - 2 Childs</h1>
          </div>
          <div>
            <button className="cursor-pointer mt-3 text-black bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 ">
              Search
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

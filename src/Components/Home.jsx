// import React from "react";
// import { useEffect, useState } from "react";
import { useState } from "react";
import { data } from "/data.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  function searchForm(e) {
    e.preventDefault();
    console.log("submited", search);
  }
  const navigate = useNavigate();
  function navigateTicket() {
    navigate("/Ticket");
  }
  const [search, setSearch] = useState("");
  console.log(data);

  function addTicket(
    flight_number,
    airline,
    departure_airport,
    arrival_airport,
    departure_date,
    arrival_date,
    departure_time,
    arrival_time,
    duration_minutes,
    price
  ) {
    // Create a new ticket object.
    const ticket = {
      flight_number,
      airline,
      departure_airport,
      arrival_airport,
      departure_date,
      arrival_date,
      departure_time,
      arrival_time,
      duration_minutes,
      price,
    };
    ticket.slice(ticket);
    window.location.href = "ticketdata";
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(addTicket);
  };
  return (
    <div className="bg-sky-300">
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
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
        <section>
          <div>
            <form className="text-center m-6" onSubmit={searchForm}>
              {" "}
              <input
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                className="text-center mt-4 rounded-md border-sky-700 border-2"
                placeholder="Search Flight"
              ></input>
            </form>
            <table className="border border-gray-300 w-full p-2 rounded">
              <thead>
                <tr className="border border-gray-400 p-2 rounded  text-center">
                  <th>Flight number</th>
                  <th>Airline</th>
                  <th>Departure airport</th>
                  <th>Arrival airport</th>
                  <th>Departure date</th>
                  <th>Arrival date</th>
                  <th>Departure time</th>
                  <th>Arrival time</th>
                  <th>Duration minutes</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="border border-gray-400 p-2 rounded  text-center">
                {data
                  .filter((allItem) =>
                    allItem.flight_number.toString().includes(search)
                  )
                  .map((item) => (
                    <tr key={item.flight_number}>
                      <td>{item.flight_number} </td>
                      <td>{item.airline} </td>
                      <td>{item.departure_airport}</td>
                      <td>{item.arrival_airport}</td>
                      <td>{item.departure_date}</td>
                      <td>{item.arrival_date}</td>
                      <td>{item.departure_time}</td>
                      <td>{item.arrival_time}</td>
                      <td>{item.duration_minutes}</td>
                      <td>
                        {item.price}{" "}
                        <button
                          onClick={handleSubmit}
                          className="bg-red-400 rounded-full px-2 py-2 my-3"
                        >
                          Add to Ticket
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            {" "}
            <button
              onClick={navigateTicket}
              className="border-solid border border-black cursor-pointer mt-3 text-blue-900  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Next Page
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
// <div className="">
// <h1>Departure City</h1>
// <h1> DXB, Dubai-UAE</h1>
// </div>
// <div>
// {/* className="flex flex-col flex-wrap items-center justify-center" */}
// <h1>Arrival City</h1>
// <h1>RUH, Riyadh-Saudi</h1>
// </div>
// <div>
// <h1>Departure-Arrival</h1>
// <h1>28 Feb - One Way</h1>
// </div>
// <div>
// <h1>Passenger</h1>
// <h1>3 Adults - 2 Childs</h1>
// </div>
// const [details, setDetails] = useState([]);
// useEffect(() => {
//   fetch("http://localhost:3000/plane_details", {
//     method: "GET",
//     headers: {},
//   })
//     .then((response) => response.json)
//     .then((data) => setDetails(data.details))
//     .catch((err) => console.log(err));
// }, []);
// console.log(setDetails);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(`successfuly signed${details}`);
// };
{
  /* <div className="text-center">
            {" "}
            <input
              name="search"
              placeholder="Flight details"
              className=" border-2 mt-4 py-9 ml-12 text-center mb-2 border-solid  border-sky-600 rounded-full"
            ></input>{" "}
            <input
              name="search"
              placeholder="Flight details"
              className=" border-2 mt-4 py-9 ml-12 text-center mb-2 border-solid  border-sky-600 rounded-full"
            ></input>{" "}
            <input
              name="search"
              placeholder="Flight details"
              className=" border-2 mt-4 py-9 ml-12 text-center mb-2 border-solid  border-sky-600 rounded-full"
            ></input>
          </div> */
}
{
  /* <hr className="w-48 h-1 mr-auto my-4 bg-gray-100 rounded-full md:my-10 dark:bg-gray-600"></hr> */
}

{
  /* <div className="text-center">
            <button
              onSubmit={handleSubmit}
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              type="submit"
              className="cursor-pointer mt-3 text-black bg-orange-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Search
            </button>
          </div> */
}
{
  /* <div className="text-center">
            <input
              name="search"
              className="text-center mt-4 fon  rounded-md border-sky-700 border-2"
              placeholder="Search Flight "
            ></input>
          </div> */
}
{
  /* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */
}

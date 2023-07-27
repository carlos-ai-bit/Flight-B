// import React from 'react'
import { ticketdata } from "../../ticketdata";
import { useState } from "react";
import { useZxing } from "react-zxing";
export const Ticket = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });
  function searchForm(e) {
    e.preventDefault();
    console.log("submited", search);
  }

  const [search, setSearch] = useState("");
  console.log(ticketdata);
  return (
    <div className="text-center bg-gray-100">
      {" "}
      <div className="h-auto max-w-lg mx-auto mt-9">
        <img
          className="relative max-w-sm transition-all duration-300  filter grayscale hover:grayscale-0"
          src="https://a.travel-assets.com/travel-assets-manager/cread-841/POSa-LP-Hero-M-551x413.jpg"
          alt=""
          title="img2"
        />
      </div>
      <section className="">
        {" "}
        <div className="bg-blue-400 mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
          <div className=" mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
            <form action="" className="text-center m-6" onSubmit={searchForm}>
              {" "}
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="mt-5 border-sky-900 border-2 rounded-full text-center"
                placeholder="Passenger Name"
              ></input>
            </form>
            <table className="border border-gray-300 w-full p-2 rounded">
              <thead>
                <tr className="border border-gray-400 p-2 rounded  text-center">
                  <th>Passenger Name</th>
                  <th>Ticket Number</th>
                  <th>Flight number</th>
                  <th>Departure date</th>
                  <th>Departure time</th>
                  <th>Arrival date</th>
                  <th>Arrival time</th>
                  <th>Departure airport</th>
                  <th>Arrival airport</th>
                  <th>Seat Number</th>
                </tr>
              </thead>
              <tbody className="border border-gray-400 p-2 rounded  text-center">
                {ticketdata
                  .filter((allItem) =>
                    allItem.passenger_name.toString().includes(search)
                  )
                  .map((item) => (
                    <tr key={item.passenger_name}>
                      <td>{item.passenger_name}</td>
                      <td>{item.ticket_number}</td>
                      <td>{item.flight_number}</td>
                      <td>{item.departure_date}</td>
                      <td>{item.departure_time}</td>
                      <td>{item.arrival_date}</td>
                      <td>{item.arrival_time}</td>
                      <td>{item.departure_airport}</td>
                      <td>{item.arrival_airport}</td>
                      <td>{item.seat_number}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="h-auto max-w-lg ml-auto text-center ">
            <button className="border-solid border border-black cursor-pointer mt-3 text-black  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Scan Me
              <>
                <video ref={ref} />
                <p>
                  <span>{result}</span>
                </p>
              </>
            </button>

            {/* <img
              src="data:image/png;base64,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"
              alt=""
              title=""
            /> */}
          </div>
          <div className="text-center">
            {" "}
            <button className="border-solid border border-black cursor-pointer mt-3 text-blue-900  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

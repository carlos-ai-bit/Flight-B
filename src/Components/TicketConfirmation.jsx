// import React from 'react'
import { useNavigate } from "react-router-dom";
const TicketConfirmation = () => {
  const navigate = useNavigate();
  function navigatePayment() {
    navigate("/Payment");
  }
  return (
    <div>
      <section>
        {" "}
        <div className="bg-gray-800 mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
          <div className="mb-4 text-center">
            {" "}
            <input
              className="rounded-md mt-2"
              placeholder="Flight Status"
            ></input>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900"></hr>
          <div className="mb-4 text-center">
            {" "}
            <input className="rounded-md" placeholder="More Status"></input>
          </div>
          <div className="text-center">
            <p className="text-blue-900">Refundable</p>
            <p className="">Baggage Included</p>
          </div>
          <div className="text-center">
            {" "}
            <button className="cursor-pointer mt-3 text-white bg-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600">
              Flight Details
            </button>
          </div>
          <div className=" bg-gray-500 h-auto max-w-lg ml-auto text-center  mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
            <div className="text-center">
              <p>Booking Details</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900"></hr>
              <img
                className="h-auto  ml-auto text-center  shadow  mb-4 border flex flex-col justify-center item-center max-w-lg mx-auto mt-9"
                src="Img/usersicon.svg"
                alt=""
                title=""
              />
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900"></hr>
            <div className="h-auto max-w-lg ml-auto text-center mb-4 ">
              {" "}
              <input
                className="rounded-md border-sky-600 border-2"
                placeholder="Airlines"
              ></input>
              <input
                className="rounded-md border-sky-600 border-2"
                placeholder="Flight"
              ></input>
              <input
                className="rounded-md border-sky-600 border-2"
                placeholder="Flight Class"
              ></input>
              <input
                className="rounded-md border-sky-600 border-2"
                placeholder="Passenger"
              ></input>
            </div>
          </div>
          <div className="h-auto max-w-lg ml-auto text-center  mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
            <div className=" bg-gray-500 text-center">
              <p>Price Details</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900"></hr>
              <div className=" h-auto max-w-lg ml-auto text-center mb-4">
                {" "}
                <input
                  className="rounded-md border-sky-600 border-2"
                  placeholder="///"
                ></input>
                <input
                  className="rounded-md border-sky-600 border-2"
                  placeholder="Total"
                ></input>
                <input
                  className="rounded-md border-sky-600 border-2"
                  placeholder="Total"
                ></input>
                <input
                  className="rounded-md border-sky-600 border-2"
                  placeholder="Passenger"
                ></input>
                <div className="text-center">
                  {" "}
                  <button
                    onClick={navigatePayment}
                    className="cursor-pointer mt-3 text-white bg-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600"
                  >
                    Continue Booking{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketConfirmation;

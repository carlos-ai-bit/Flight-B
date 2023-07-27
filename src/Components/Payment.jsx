// import React from 'react'
import { useState } from "react";
const Payment = () => {
  const [payment, setPayment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Payment Successful: ${payment}`);
  };
  return (
    <div className="bg-gray-400 ">
      <section>
        <div className="bg-teal-300 mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
          <p className="text-center my-2">Card Number</p>
          <p>
            Enter the 16 digit card number on the card{" "}
            <input
              className="ml-2 text-center mb-2 border-solid border-2 border-sky-600 rounded-full py-2 px-2"
              type="text"
              placeholder=""
            ></input>
          </p>
          <p>
            Full Name
            <input
              placeholder="Enter Cardholder Name"
              className="ml-3 text-center mb-2  border-2 border-sky-600 rounded-full py-2 px-2"
            ></input>
          </p>
          <p>
            CVV Number{" "}
            <input
              placeholder="Enter the 3 digit on application"
              className="ml-2 text-center mb-2 border-solid border-2 border-sky-600 rounded-full py-2 px-2"
            ></input>
          </p>
          <p>
            Expiry Date{" "}
            <input
              placeholder=""
              className="p-autO text-center mb-2 border-solid border-2 border-sky-600 rounded-full py-2 px-2"
            ></input>
            <input
              placeholder=""
              className="ml-1 text-center mb-2 border-solid border-2 border-sky-600 rounded-full py-2 px-2"
            ></input>
          </p>
        </div>
      </section>
      <section>
        <div className=" mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
          <div className=" mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
            <p>
              {" "}
              <input
                placeholder="passengers name"
                className="mt-4 ml-12 text-center mb-2 border-solid border-2 border-sky-600 rounded-full py-2 px-2"
              ></input>
            </p>
            <p>
              {" "}
              <input
                placeholder="payment details"
                className="mt-4 py-9 ml-12 text-center mb-2 border-solid  border-sky-600 rounded-full"
              ></input>
            </p>
          </div>
          <div>
            <input
              placeholder="Destination and ticket number"
              className="mt-4 py-9 ml-12 text-center border-solid border-2 border-sky-600 rounded-full"
            ></input>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900"></hr>
          <div className="h-auto max-w-lg text-center mb-4">
            <input
              className="rounded-md border-2 border-sky-600"
              placeholder="///"
            ></input>
            <input
              className="rounded-md border-2 border-sky-600"
              placeholder="Total"
            ></input>
            <input
              className="rounded-md border-2 border-sky-600"
              placeholder="Total"
            ></input>
            <input
              className="rounded-md border-2 border-sky-600"
              placeholder="Passenger"
            ></input>
          </div>
          <div className="text-center">
            {" "}
            <button
              onChange={(e) => setPayment(e.target.value)}
              onSubmit={handleSubmit}
              className="cursor-pointer mt-3 text-white bg-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600"
            >
              Confirm Payment{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;

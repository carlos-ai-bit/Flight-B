// import React from 'react'

const Payment = () => {
  return (
    <div>
      <section>
        <div className=" mt-8 shadow mx-8 mb-4 border flex flex-col justify-center item-center">
          <p className="">Card Number</p>
          <h2>Enter the 16 digit card number on he card</h2>
          <div>
            
          </div>
          <div>
            <input
              className=" text-center font-semibold flex justify-center mb-6 border-solid border-2 border-sky-300 rounded-full "
              type="text"
              placeholder=""
            ></input>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;

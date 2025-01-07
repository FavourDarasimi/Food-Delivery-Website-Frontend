import React, { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Order = () => {
  const [page, setPage] = useState("personal");
  const { getTotalAmount, getDeliveryFee, getGrandTotal } = useContext(StoreContext);
  return (
    <div className="lg:flex  md:flex md:justify-center my-10 pt-5 sm:pb-2">
      <div className=" lg:flex lg:justify-between lg:w-80% md:flex md:gap-8 md:w-100%">
        <div className="flex flex-col   ">
          <h1 className="text-center text-3xl font-bold">Delivery Information</h1>
          <div className="flex lg:gap-72 md:gap-14 sm:gap-6 justify-center pb-12 pt-5 ">
            <h1
              className={`cursor-pointer font-semibold   ${
                page === "personal"
                  ? "border-b-4  border-b-myGrey rounded-lg  animate-2smoothfade shadow focus:shadow-custom-strong p-2"
                  : ""
              }`}
              onClick={() => setPage("personal")}
            >
              1. Personal Information
            </h1>
            <h1
              className={`cursor-pointer font-semibold  ${
                page === "address"
                  ? "border-b-4 border-b-myGrey rounded-lg  animate-2smoothfade shadow focus:shadow-custom-strong p-2"
                  : ""
              }`}
              onClick={() => setPage("address")}
            >
              2. Address
            </h1>
          </div>

          <div
            className={`${
              page === "personal" ? "block sm:flex sm:flex-col sm:items-center lg:grid" : "hidden"
            }  lg:grid-cols-2 gap-y-5 gap-x-5 animate-2smoothfade `}
          >
            <input
              type="text"
              placeholder="First Name"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="Alternate Contact Number"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="Email"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
          </div>

          <div
            className={`${
              page === "address" ? "block sm:flex sm:flex-col sm:items-center lg:grid" : "hidden"
            }  lg:grid-cols-2 gap-y-5 gap-x-5 cursor-pointer animate-2smoothfade`}
          >
            <input
              type="text"
              placeholder="Country"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="House Number (Optional)"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="Street"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="City"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="State"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
            <input
              type="text"
              placeholder="Zip/Postal Code"
              className="rounded-xl w-80 p-3 border-1 border-bordercol"
            />
          </div>
        </div>

        <div className="lg:w-100 md:w-fit sm:w-fit bg-grey h-fit p-7 rounded-md md:mt-6 sm:mt-10 ">
          <h1 className="flex justify-start text-1xl font-bold">Summary</h1>
          <div className="flex justify-between py-5 items-center">
            <h3 className="text-xssl font-medium">Subtotal</h3>
            <h3 className="flex justify-end text-xssl">${getTotalAmount()}</h3>
          </div>
          <hr className="" />
          <div className="flex justify-between items-center py-5">
            <h3 className="text-xssl font-medium">Delivery fee</h3>
            <h3 className="flex justify-end text-xssl">${getDeliveryFee()}</h3>
          </div>
          <hr className="" />
          <div className="flex justify-between items-center py-5">
            <h3 className="text-xssl font-medium">Grand Total</h3>
            <h2 className="flex justify-end text-1xl font-medium">${getGrandTotal()}</h2>
          </div>
          <div className="flex justify-center pt-5">
            <button className="border-1 border-bordercol w-60 p-2 rounded-md text-white bg-black ">
              Place Order
            </button>
          </div>
          <p className="text-center pt-3">
            Upon Clicking 'Place Order', I confirm I have read and acknowledged{" "}
            <span className="text-blue-500">all terms and polices</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;

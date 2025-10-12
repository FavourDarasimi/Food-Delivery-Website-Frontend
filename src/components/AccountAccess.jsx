import React, { useState } from "react";
import { assets } from "../assets/assets";

const AccountAccess = ({ setShowLogin }) => {
  const [currentStatus, setCurrentStatus] = useState("login");
  return (
    <div className=" fixed z-1 inset-0  bg-black w-100%  bg-dark grid place-items-center  ">
      <form className=" rounded-3xl  bg-white w-fit h-fit animate-2smoothfade fixed">
        <div className="w-full flex justify-end pt-4 pr-4 ">
          <img
            src={assets.cross_icon}
            alt=""
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="flex flex-col gap-3 pl-10 pr-10 pb-10">
          <div className="flex flex-col">
            <h1 className="text-center text-2xl font-semibold">
              {currentStatus === "login" ? "Sign in" : "Sign up"}
            </h1>
            <div className="flex gap-2 text-xsl justify-center">
              <img src={assets.lock} alt="" className="w-6" />
              <p className="flex items-center text-locktext">All data will be encrypted</p>
            </div>
          </div>
          {currentStatus === "signup" ? (
            <div className="flex flex-col">
              <label className="text-xsl font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className="  border-1 rounded-xl p-2 lg:w-96 md:w-80 sm:w-72 h-12 outline-none border-bordercol"
              />
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-col">
            <label className="text-xsl font-semibold mb-1">Email</label>
            <input
              type="email"
              className="  border-1 rounded-xl p-2 lg:w-96 md:w-80 sm:w-72 h-12 outline-none border-bordercol"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xsl font-semibold mb-1">Password</label>
            <input
              type="password"
              className="  border-1 rounded-xl p-2 lg:w-96 md:w-80 sm:w-72 h-12 outline-none border-bordercol"
            />
          </div>
          <button className="border-bordercol border-1 py-3 sm:w-72 md:w-80 rounded-full bg-dark-yellow text-xssl">
            {currentStatus === "login" ? "Sign in" : "Sign up"}
          </button>
          <div className="flex place-items-start  gap-3 lg:w-96 sm:w-72 md:w-80">
            <input type="checkbox" className="mt-2" />
            <p className="text-myGrey text-xssl">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>

          {currentStatus === "login" ? (
            <p className="text-center">
              Create an Account?
              <span
                onClick={() => setCurrentStatus("signup")}
                className="cursor-pointer ml-1 text-dark-yellow font-semibold"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="text-center">
              Already have an Account?
              <span
                onClick={() => setCurrentStatus("login")}
                className="cursor-pointer ml-1 text-dark-yellow font-semibold"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AccountAccess;

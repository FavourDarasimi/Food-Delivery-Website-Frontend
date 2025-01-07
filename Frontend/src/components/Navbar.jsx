import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [isActive, setIsActive] = useState("home");
  const { getTotalCartItem } = useContext(StoreContext);

  return (
    <nav className="flex justify-between  py-2 items-center sm:flex  ">
      <Link to="/">
        <h1 className="lg:text-5xl md:text-4xl sm:text-2xl font-bold text-yellow-600">BLOSSOM</h1>
      </Link>
      <div className="lg:flex   lg:items-center   gap-10  sm:flex ">
        <ul className="lg:flex gap-10 lg:flex-row md:hidden sm:hidden">
          <Link
            to="/"
            className={`${
              isActive === "home"
                ? "border-b-2 border-yellow-600 text-xxl font-medium"
                : "text-xxl font-medium"
            } cursor-pointer`}
            onClick={() => setIsActive("home")}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`${
              isActive === "menu"
                ? "border-b-2 border-yellow-600 text-xxl font-medium"
                : "text-xxl font-medium"
            } cursor-pointer`}
            onClick={() => setIsActive("menu")}
          >
            Menu
          </Link>
          <a
            href="#contact-us"
            className={`${
              isActive === "contact"
                ? "border-b-2 border-yellow-600 text-xxl font-medium"
                : "text-xxl font-medium"
            } cursor-pointer`}
            onClick={() => setIsActive("contact")}
          >
            Contact Us
          </a>
        </ul>
        <div className="lg:flex lg:gap-10 md:gap-10 lg:items-center md:flex sm:flex sm:gap-5 sm:items-center">
          <img src={assets.search_icon} alt="" className="lg:w-6 sm:w-5" />
          <div className="relative">
            <Link to="/cart">
              <img
                src={assets.cart}
                alt=""
                className="lg:w-6 sm:w-5"
                onClick={() => setIsActive("cart")}
              />

              <div className="w-4 h-4 bg-red-600 rounded-full absolute bottom-4 lg:right-6 md:right-5 sm:right-5">
                <p className="text-white flex justify-center  text-xs font-extrabold ">
                  {getTotalCartItem()}
                </p>
              </div>
            </Link>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="border-2  lg:w-36 lg:py-2 rounded-full lg:text-xxl font-medium hover:bg-dark-yellow sm:w-20 sm:py-2"
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

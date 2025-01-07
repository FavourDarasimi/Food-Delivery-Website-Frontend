import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-myGray text-white py-10 sm:hidden  md:block lg:block " id="contact-us">
      <div className="flex justify-center gap-16 lg:px-10 md:px-10 sm:px-7  md:grid md:grid-cols-3 md:gap-10 lg:grid-cols-5 ">
        <h1 className="  text-5xl  text-dark-yellow font-bold md:grid-cols-1">BLOSSOM</h1>
        <div className="sm:hidden  lg:block grid-cols-1">
          <h1 className="text-3xl text-gray-300">Why Choose Us?</h1>
          <ol className=" pl-8">
            <li className="pt-4 text-dark-yellow">Wide Varety of Cuisines</li>
            <li className="pt-4 text-dark-yellow">Fast and Reliable Delivery</li>
            <li className="pt-4 text-dark-yellow">Easy Ordering</li>
            <li className="pt-4 text-dark-yellow">Quality Ingredients</li>
          </ol>
        </div>
        <div className="sm:hidden lg:block grid-cols-1">
          <h1 className="text-3xl text-gray-300">How it Works</h1>
          <ol className=" pl-8">
            <li className="pt-4 text-dark-yellow">Browse the Menu</li>
            <li className="pt-4 text-dark-yellow">Place your Order</li>
            <li className="pt-4 text-dark-yellow">Track your Delivery</li>
            <li className="pt-4 text-dark-yellow">Enjoy your meal</li>
          </ol>
        </div>
        <div className="grid-cols-1">
          <h1 className="lg:text-3xl md:text-2xl sm:text-2xl sm:font-bold text-gray-300">
            JOIN OUR COMMUNITY
          </h1>
          <h3 className=" text-dark-yellow pt-3 ">
            Follow us on Social media for the latest updates,promotions and mouth watering food
            photos. Share your dining experience with us using{" "}
            <span className="text-gray-300">#blossom2024</span>
          </h3>
          <ol className="  flex gap-x-5 pt-3 justify-center">
            <img src={assets.instagram} className="w-8" />
            <img src={assets.tiktok} className="w-8" />
            <img src={assets.twitter} className="w-8" />
            <img src={assets.youtube} className="w-8" />
          </ol>
        </div>
        <div className=" grid-cols-1 ">
          <h1 className="lg:text-3xl md:text-2xl sm:text-2xl sm:font-bold text-gray-300">
            CONTACT US
          </h1>
          <h3 className=" text-dark-yellow pt-3">
            Have any questions or need assistance? Our Customer Support team is here o help. Reach
            out to us anytime at:
          </h3>
          <ol className=" pl-3 pt-4 flex  text-gray-300 sm:flex sm:flex-col sm:pt-2">
            <li>blossom25@gmail.com</li>
            <li className="sm:pt-2">+2348064275981</li>
          </ol>
        </div>
      </div>
      <hr className="my-5 mx-20" />
      <p className="text-center sm:px-7 text-gray-300">
        Copyright2024 @ Blossom.com - All Rights Reserverd
      </p>
    </div>
  );
};

export default Footer;

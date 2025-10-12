import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";

const MealItem = ({ Meals }) => {
  const { cartItems, addToCart, removeFromCart, setCheckCart } = useContext(StoreContext);
  const add = (id) => {
    addToCart(id), setCheckCart(false);
  };

  return (
    <div className="pb-5 grid lg:grid-cols-4 lg:gap-x-5 lg:px-10 gap-y-10  pt-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-2 md:gap-x-4 md:pl-2 ">
      {Meals.map((food, index) => (
        <div className=" border-2 rounded-xmd grid-cols-1 " key={index}>
          <div className="relative">
            <img src={food.image} alt="" className="rounded-t-xmd w-full" />

            {!cartItems[food._id] ? (
              <div className="absolute right-2 bottom-2 bg-grey rounded-full p-2">
                <img
                  src={assets.add_to_cart}
                  alt=""
                  className="lg:w-7 lg:h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 cursor-pointer "
                  onClick={() => add(food._id)}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between sm:gap-1 lg:px-8 pt-5 items-center md:px-5 sm:px-3 ">
            <p className="lg:text-2xl  font-semibold md:text-xl sm:text-xsl">{food.name}</p>
            <p className="lg:text-xl sm:text-xsl">${food.price}.00</p>
          </div>
          <div className="flex justify-between lg:px-8 lg:py-5 md:px-5 sm:px-3 sm:py-2">
            <div className="flex">
              {[...Array(food.starRating)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#B59410"
                  stroke="#B59410"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-star lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4"
                >
                  {" "}
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />{" "}
                </svg>
              ))}

              {food.starRating < 5 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B59410"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-star lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4"
                >
                  {" "}
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />{" "}
                </svg>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="lg:px-8 pb-7  md:px-5 sm:px-3 lg:text-xssl md:text-xssl sm:text-xs ">
            <p className="text-myGrey">{food.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealItem;

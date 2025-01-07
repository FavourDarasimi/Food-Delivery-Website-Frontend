import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    getTotalAmount,
    addToCart,
    removeFromCart,
    getTotalCartItem,
    getDeliveryFee,
    getGrandTotal,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="lg:w-80% md:w-80% sm:w-100% mx-auto pb-2 ">
      <h1 className="text-center font-bold text-3xl py-5">
        YOUR CART ({getTotalCartItem()} items)
      </h1>
      <div className="grid grid-cols-5 pb-3">
        <p className="font-medium text-xssl sm:text-xsl">Item</p>
        <p className="font-medium text-xssl sm:text-xsl"></p>
        <p className="font-medium text-xssl sm:text-xsl">Price</p>
        <p className="font-medium text-xssl sm:text-xsl">Quantity</p>
        <p className="flex font-medium text-xssl sm:text-xsl  ">Total Price</p>
      </div>
      <hr className="w-90%" />
      {food_list.map((item, index) =>
        cartItems[item._id] ? (
          <div>
            <div className="grid grid-cols-5 pt-3 pb-3">
              <div className="flex lg:gap-5 md:gap-5 sm:gap-2 items-center">
                <img src={item.image} alt="" className="w-16 h-16" />
                <p className="font-semibold lg:text-xssl md:text-xssl sm:text-xsl">{item.name}</p>
              </div>
              <p></p>
              <p className="flex items-center font-light lg:text-xssl md:text-xssl sm:text-xsl">
                ${item.price}.00
              </p>
              <div className="flex items-center">
                <div className="flex lg:space-x-3 md:space-x-2 sm:space-x-1 sm:p-1 items-center border-1 border-bordercol rounded-full p-2 h-fit w-fit">
                  <img
                    src={assets.remove_icon_red}
                    alt=""
                    className="w-6 h-6 cursor-pointer sm:w-5 sm:h-5"
                    onClick={() => removeFromCart(item._id)}
                  />
                  <p className="font-bold lg:text-xssl md:text-xssl sm:text-xs">
                    {cartItems[item._id]}
                  </p>
                  <img
                    src={assets.add_icon_green}
                    alt=""
                    className="lg:w-6 lg:h-6  md:w-6 md:h-6 sm:w-5 sm:h-5 cursor-pointer"
                    onClick={() => addToCart(item._id)}
                  />
                </div>
              </div>
              <p className="flex items-center font-bold justify-end w-16 text-xl sm:text-xssl">
                ${cartItems[item._id] * item.price}.00
              </p>
            </div>
            <hr className="w-90%" />
          </div>
        ) : (
          ""
        )
      )}
      <div className="flex lg:flex-row lg:justify-between pt-10 h-fit md:flex-col md:items-center md:justify-center md:gap-x-10 sm:flex-col sm:space-y-10 ">
        <div className="flex lg:items-center md:items-center md:h-16">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="border-1 border-bordercol p-3 w-96 md:w-80 rounded-l-md"
          />
          <button className=" bg-black text-white p-3 lg:w-40 md:w-20 rounded-r-md text-xssl">
            Apply
          </button>
        </div>
        <div className="flex flex-col lg:items-end md:items-end  sm:items-center ">
          <div className="lg:w-100 md:w-100 sm:w-72">
            <h1 className="flex justify-start text-1xl font-bold">CART TOTAL</h1>
            <div className="flex justify-between py-5">
              <h3 className="text-xssl font-medium">Subtotal</h3>
              <h3 className="flex justify-end text-xssl">${getTotalAmount()}</h3>
            </div>
            <hr className="" />
            <div className="flex justify-between py-5">
              <h3 className="text-xssl font-medium">Delivery fee</h3>
              <h3 className="flex justify-end text-xssl">${getDeliveryFee()}</h3>
            </div>
            <hr className="" />
            <div className="flex justify-between py-5">
              <h3 className="text-xssl font-medium">Grand Total</h3>
              <h2 className="flex justify-end text-1xl font-medium">${getGrandTotal()}</h2>
            </div>
            <div className="flex justify-end pt-5">
              <button
                className="border-1 border-bordercol w-60 p-2 rounded-md text-white bg-black "
                onClick={() => navigate("/order/")}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

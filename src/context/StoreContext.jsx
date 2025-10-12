import { createContext, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    if (cartItems[id]) {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    }
  };

  const removeFromCart = (id) => {
    if (cartItems[id] === 1) {
      setCheckCart(false);
    }
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalAmount = () => {
    var totalAmount = 0;
    food_list.map((food) => {
      if (cartItems[food._id]) {
        totalAmount += food.price * cartItems[food._id];
      }
    });
    return totalAmount.toFixed(2);
  };

  const getTotalCartItem = () => {
    var totalCartItem = 0;
    food_list.map((food) => {
      if (cartItems[food._id]) {
        totalCartItem += 1;
      }
    });
    return totalCartItem;
  };

  const getDeliveryFee = () => {
    var deliveryFee = getTotalCartItem() * 0.5;
    return deliveryFee.toFixed(2);
  };

  const getGrandTotal = () => {
    var grandTotal = parseInt(getTotalAmount()) + parseInt(getDeliveryFee());
    return grandTotal.toFixed(2);
  };

  const contextValue = {
    food_list,
    menu_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalCartItem,
    getDeliveryFee,
    getGrandTotal,
  };

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;

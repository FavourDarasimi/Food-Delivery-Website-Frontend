import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import MealItem from "./MealItem";

const MenuList = ({ isActive }) => {
  const { food_list } = useContext(StoreContext);
  const filteredMenu = food_list.filter((meal) => meal.category === isActive);

  return (
    <div className="">
      {isActive == "All" ? <MealItem Meals={food_list} /> : <MealItem Meals={filteredMenu} />}
    </div>
  );
};

export default MenuList;

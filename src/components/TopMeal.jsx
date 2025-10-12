import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import MealItem from "./MealItem";
import { Link } from "react-router-dom";

const TopMeal = () => {
  const { food_list } = useContext(StoreContext);
  const topMeals = food_list.filter((meal) => meal.top == true);
  return (
    <div className="pt-10">
      <div className="sm:block md:block lg:hidden pb-5">
        <h1 className="font-bold  text-4xl">
          Eat what makes you happy by Exploring our Menu
          <Link to="/menu">
            <span className="font-bold  text-yellow-600"> here</span>
          </Link>
        </h1>
      </div>
      <h1 className="lg:text-5xl lg:pl-10 md:text-5xl md:pl-5 font-bold  text-dark-yellow sm:text-3xl sm:pl-0 ">
        Top Meals For You
      </h1>
      <MealItem Meals={topMeals} />
    </div>
  );
};

export default TopMeal;

import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import MenuList from "./MenuList";

const MenuCategories = () => {
  const { menu_list } = useContext(StoreContext);
  const [isActive, setIsAtive] = useState("All");
  return (
    <div className="">
      <div className="flex gap-x-10 sm:gap-x-4 lg:justify-center overflow-x-auto pt-5 ">
        {menu_list.map((category, index) => (
          <div key={index} className="shrink-0 animate-2smoothfade">
            <img
              src={category.menu_image}
              alt=""
              className={`lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-20 sm:h-20 ${
                isActive === category.menu_name
                  ? "lg:border-6 md:border-5 sm:border-4 border-yellow-600 p-1 rounded-full "
                  : ""
              }`}
              onClick={() => {
                isActive !== category.menu_name
                  ? setIsAtive(category.menu_name)
                  : setIsAtive("All");
              }}
            />
            <p className="text-center text-xl sm:text-xsl">{category.menu_name}</p>
          </div>
        ))}
      </div>

      <MenuList isActive={isActive} />
    </div>
  );
};

export default MenuCategories;

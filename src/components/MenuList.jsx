import React from "react";
import { useState } from "react";
import { foods } from "../data";
import { useEffect } from "react";
import { MyModal } from "./MyModal";


const MenuList = ({selectedcateg}) => {
  const [menu, setMenu] = useState(foods);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedFood, SetselectedFood] = useState(null);

  useEffect(() => {
    setMenu(() =>selectedcateg == 'all' ? foods : foods.filter((obj) => obj.category == selectedcateg))

  },[selectedcateg])

  const toggle =({title,img}) => {
    setIsOpen(!isOpen)
    console.log(title,img);
    SetselectedFood({title,img})
  }



  return (
    <div className="flex flex-wrap gap-4">
      {menu.map(({ id, title, category, price, img, desc }) => (
        <div
          key={id}
          className="flex flex-col brp500:flex-row gap-4 basis-full brp900:basis-[calc(50%-20px)] border border-blue-600 p-3 rounded-2xl "
        >
          <div className="flex flex-1">
            <img
              src={"images/" + img}
              alt={title}
              className="w-full h-48 object-cover border-2 border-white"
              onClick={() => toggle({title,img})}
            ></img>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-row w-full justify-between border-b-2 border-amber-300">
              <span className="font-bold text-amber-300">{title}</span>
              <span>{price}</span>
            </div>
            <div>{desc}</div>
          </div>
        </div>
      ))}
      {isOpen && <MyModal isOpen = {isOpen} setIsOpen = {setIsOpen} selectedFood = {selectedFood}/>}
    </div>
  );
};

export default MenuList;

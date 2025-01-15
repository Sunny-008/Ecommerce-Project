import React from "react";
import manshoping from "../assets/Images/manshoping.jpg";
import womanshoping from "../assets/Images/womanshoping.webp";
import kidshoping from "../assets/Images/kidshoping.jpg";

const CategorySecton = () => {
  const categories = [
    {
      title: "Man",
      imageUrl: manshoping,
    },
    {
      title: "Women",
      imageUrl: womanshoping,
    },
    {
      title: "Kids",
      imageUrl: kidshoping,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((item, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={item.imageUrl}
            className="h-full w-full object-cover rounded-lg shadow-md"
            alt=""
          />
          <div className="absolute top-48 left-44 ">
            <p className="text-2xl text-white font-bold">{item.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySecton;

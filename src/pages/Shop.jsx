import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.product);
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm-grid-cole-2 md:grid-cols-5 gap-6 cursor-pointer">
        {products.products.map((items) => (
          <ProductCard nam={items} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

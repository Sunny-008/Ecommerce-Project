import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/Images/NoProduct.png";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm-grid-cole-2 md:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((items) => (
              <ProductCard nam={items} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-96">
          <img src={NoProduct} alt="" />
        </div>
      )}
    </div>
  );
};

export default FilterData;

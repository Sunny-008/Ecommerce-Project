import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import Heroimage from "../assets/Images/shoppnig.jpg";
import InfoSection from "../components/InfoSection";
import CategorySecton from "../components/CategorySecton";
import { setProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div>
      <div className="bg-white mt-2 px-4  md:px-16 lg:px-24 max-h-fit shadow-md">
        <div className="  container ">
          <div className="  w-full mx-auto py-4   space-x-4 px-4  flex flex-col md:flex-row">
            <div className="w-3/12">
              <div className=" bg-red-600 text-white text-xs font-bold px-2 py-2.5">
                SHOP BY CATEGORIES
              </div>
              <ul className="space-y-4 bg-gray-100 p-3 border">
                {Categories.map((Categories, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm font-medium"
                  >
                    <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                    {Categories}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" relative  w-full md:w-10/12 mt-8 md:mt-0 h-[30rem] border-2 text-white">
              <img className="w-full h-full" src={Heroimage} alt="" />
              <div className="absolute top-32 left-8">
                <h2 className="text-5xl font-bold">WELCOME TO E-SHOP</h2>
                <p className="text-3xl mt-5 font-bold text-white">
                  MILLIONS+ PRODUCT
                </p>
                <button className="bg-red-600 w-52 px-8 py-1.5 text-white mt-10 font-bold rounded-sm hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySecton />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm-grid-cole-2 md:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((items) => (
              <ProductCard nam={items} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;

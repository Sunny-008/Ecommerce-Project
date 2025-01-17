import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
// import { selectFilteredProducts } from "../redux/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const MdAddCard = (product) => {
    dispatch(addToCart(product));
    alert("Product added to cart in successfully");
  };

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    console.log(foundProduct);

    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* product image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className=" h-full object-contain"
          />
        </div>
        {/* product details */}
        <div className="md:w-1/2 md:p-16 flex flex-col item-center gap-y-2 p-4 shadow-md ">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            ₹{product.price}
          </p>

          <div className="flex items-center gap-x-2 mb-4">
            {/* <input
              type="number"
              id="quantity"
              min="1"
              className="border p-1 w-16"
            /> */}
            <button
              className="bg-red-600 hover:bg-red-800 text-white px-4 py-2"
              onClick={() => MdAddCard(product)}
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask about this product
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>
        Your Order has been placed successfully you will recieve an email
        confirmation shortly
      </p>
      <div className="mt-6 p-4 border bg-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Order Details</h3>
        {/* <p>Order ID: {order.id}</p>/ */}
        <p>Order Number: {order.orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
          <p> Name: {order.shippingInformation.name}</p>
          <p> Address: {order.shippingInformation.address}</p>
          <p> City: {order.shippingInformation.city}</p>
          {/* <p>Country: {order.shippingInfo.country}</p> */}
          <p>Pin Code: {order.shippingInformation.pincode}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">Product Ordered</h3>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>
                ₹{product.price} * {product.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">₹{order.totalPrice}</span>
        </div>
      </div>
      <div className="mt-4 flex ">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 rounded">
          Order Tracking
        </button>
        <button
          className="bg-red-500 ml-4 text-white py-2 px-4 hover:bg-red-600 rounded"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;

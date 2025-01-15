import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setorder }) => {
  const [BillingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setshippingToggle] = useState(true);
  const [paymentToggle, setpaymentToggle] = useState(true);
  const [paymenMethod, setpaymenMethod] = useState("cod");
  // const [order, setOrder] = useState(null);
  const [shippingInfo, setshippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 1000000),
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setorder(newOrder);
    navigate("/order-confirmation");
  };
  return (
    <div className="container mx-auto px-4 min-h-96 md:px-16 lg:px-24 py-8">
      <h1 className="text-2xl font-semibold mb-4">CHECKOUT</h1>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8 ">
        <div className=" md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex justify-between items-center"
              onClick={() => setBillingToggle(!BillingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {BillingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${BillingToggle ? "hidden" : "block"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="border py-2 px-3 w-full"
                  onChange={(e) =>
                    setshippingInfo({ ...shippingInfo, name: e.target.value })
                  }
                />
              </div>

              <div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="border py-2 px-3 w-full"
                    onChange={(e) =>
                      setshippingInfo({
                        ...shippingInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Phone No.</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone number"
                    className="border py-2 px-3 w-full"
                    onChange={(e) =>
                      setshippingInfo({
                        ...shippingInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* shippingToggle */}
          <div className="border p-2 mb-6">
            <div
              className="flex justify-between items-center"
              onClick={() => setshippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "hidden" : "block"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="Address"
                  placeholder="Enter Address"
                  className="border py-2 px-3 w-full"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="City"
                    placeholder="Enter City"
                    className="border py-2 px-3 w-full"
                    onChange={(e) =>
                      setshippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Pin Code</label>
                  <input
                    type="text"
                    name="Pin Code"
                    placeholder="Enter Pin Code"
                    className="border py-2 px-3 w-full"
                    onChange={(e) =>
                      setshippingInfo({
                        ...shippingInfo,
                        pincode: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* payment method  */}
          <div className="border p-2">
            <div
              className="flex justify-between items-center"
              onClick={() => setpaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "hidden" : "block"}`}>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  checked={paymenMethod === "cod"}
                  onChange={() => setpaymenMethod("cod")}
                  className="border"
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="payment"
                  id="card"
                  checked={paymenMethod === "card"}
                  onChange={() => setpaymenMethod("card")}
                  className="border"
                />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
              {paymenMethod === "card" && (
                <div className="space-y-4 bg-gray-300 p-2 rounded-lg">
                  <h1 className="font-semibold text-xl">Card Information</h1>
                  <div className=" flex space-x-8 flex-wrap">
                    <div className=" ml-8">
                      <label className="block text-gray-700 ">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="card"
                        placeholder="Enter Card Number"
                        className="border py-2 px-3 w-60 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        name="cardHoldername"
                        placeholder="Enter Card Holder Name"
                        className="border py-2 px-3 w-60 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        placeholder="Enter Expiry Date"
                        className="border py-2 px-3 w-60 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="Enter CVV"
                        className="border py-2 px-3 w-60 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="payment"
                  id="upi"
                  checked={paymenMethod === "upi"}
                  onChange={() => setpaymenMethod("upi")}
                  className="border"
                />
                <label htmlFor="upi">UPI</label>
              </div>
              {paymenMethod === "upi" && (
                <div>
                  <div>
                    <label className="block text-gray-700">UPI ID</label>
                    <input
                      type="text"
                      name="upi"
                      placeholder="Enter UPI ID"
                      className="border py-2 px-3 w-60 rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-sm text-gray-500">
                      ₹{product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ₹{product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ₹{cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded-lg mt-4"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

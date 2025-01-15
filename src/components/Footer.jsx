import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-shop</h3>
          <p className="mt-4">
            Your one-step fot all your needs. Shop with use experience the best
            online shopping experiences.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold"> Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-blue-500">
              <FaTwitter />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600">
              subscription
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

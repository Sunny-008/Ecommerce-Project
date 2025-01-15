import React from "react";
// import ChangeAddress from "./ChangeAddress";

const Model = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full inset-0 h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-w-md">
        <button
          className="absolute top-4 right-4 text-gray-300 text-3xl"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        {children}
        {/* <ChangeAddress /> */}
      </div>
    </div>
  );
};

export default Model;

import React from "react";
import { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newaddress, setnewAddress] = useState("");
  const onclose = () => {
    setAddress(newaddress);
    setIsModelOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setnewAddress(e.target.value)}
      />
      <div className="flex justify-end space-x-4">
        <button
          className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded "
          onClick={onclose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;

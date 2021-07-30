import React from "react";

const InputSearch = ({placeholder}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="mr-5 w-1/2 p-2 text-white rounded-md focus:outline-none bg-gray-500"
    />
  );
};

export default InputSearch;

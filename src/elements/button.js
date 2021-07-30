import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label }) => {
  return (
    <Link
      className="btn bg-gray-500 hover:bg-gray-400 px-6 py-2 rounded-md text-white text-xl"
      to="/"
    >
      {label}
    </Link>
  );
};

export default Button;

import React from "react";
import Logo from "../assets/icons/uweb.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between sticky"
      style={{ height: 80 }}
    >
      <div className="flex items-center">
        <img src={Logo} width={30} alt="navbar logo" />
        <div className="ml-10">
          <Link
            className="mx-6 text-white text-xl hover:text-green-400 hover:underline"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-6 text-white text-xl hover:text-green-400 hover:underline"
            to="/"
          >
            About
          </Link>
          <Link
            className="mx-6 text-white text-xl hover:text-green-400 hover:underline"
            to="/"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex justify-end w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="mr-5 w-1/2 p-2 text-white rounded-md focus:outline-none bg-gray-500"
        />
        <Link
          className="btn bg-gray-500 hover:bg-gray-400 px-6 py-2 rounded-md text-white text-xl"
          to="/"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;

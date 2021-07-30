import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({label, path}) => {
  return (
    <Link
      className="mx-6 text-white text-xl hover:text-green-400 hover:underline"
      to={path}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;

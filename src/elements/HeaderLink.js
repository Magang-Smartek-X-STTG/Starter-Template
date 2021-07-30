import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({label, path, getNavLink}) => {
  return (
    <Link
      className={["mx-6 text-xl hover:text-green-400 hover:underline", getNavLink(path)].join(' ')}
      to={path}
    >
      {label}
    </Link>
  );
};

export default HeaderLink;

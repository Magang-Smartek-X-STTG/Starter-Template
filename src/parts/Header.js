import React from "react";
import { withRouter } from "react-router-dom";

import Logo from "../assets/icons/uweb.jpg";

import Button from "../elements/button";
import InputSearch from "../elements/inputSearch";
import HeaderLink from "../elements/HeaderLink";

const Header = ({ match }) => {
  const getNavLink = (path) => (match.path === path ? "text-green-400" : "text-white");
  return (
    <header
      className="flex items-center justify-between sticky container mx-auto"
      style={{ height: 80 }}
    >
      <div className="flex items-center">
        <img src={Logo} width={30} alt="navbar logo" />
        <div className="ml-10">
          <HeaderLink label="Home" getNavLink={getNavLink} path="/" />
          <HeaderLink label="About" getNavLink={getNavLink} path="/about" />
          <HeaderLink label="Contact" getNavLink={getNavLink} path="/contact" />
        </div>
      </div>
      <div className="flex justify-end w-1/3">
        <InputSearch placeholder="Search..." />
        <Button label="Daftar" />
      </div>
    </header>
  );
};

export default withRouter(Header);

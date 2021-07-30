import React from "react";
import Logo from "../assets/icons/uweb.jpg";
import { Link } from "react-router-dom";
import Button from "../elements/button";
import InputSearch from "../elements/inputSearch";
import HeaderLink from "../elements/HeaderLink";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between sticky"
      style={{ height: 80 }}
    >
      <div className="flex items-center">
        <img src={Logo} width={30} alt="navbar logo" />
        <div className="ml-10">
          <HeaderLink label="Home" path="/"></HeaderLink>
          <HeaderLink label="About" path="/"></HeaderLink>
          <HeaderLink label="Contact" path="/"></HeaderLink>
        </div>
      </div>
      <div className="flex justify-end w-1/3">
        <InputSearch placeholder="Search..."></InputSearch>
        <Button label="Daftar"></Button>
      </div>
    </header>
  );
};

export default Header;

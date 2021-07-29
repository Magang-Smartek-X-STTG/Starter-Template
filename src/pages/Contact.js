import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Fb from "../assets/icons/fb.png";
import Ig from "../assets/icons/ig.png";
import Telegram from "../assets/icons/telegram.png";
import Twitter from "../assets/icons/twitter.png";
import Wa from "../assets/icons/wa.png";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto flex flex-col justify-between h-screen">
        <Header></Header>
        <div>
          <h1 className="text-6xl text-center text-white mt-10">My Contact</h1>
          <img src={Fb} width={50} alt="/" className="mt-2 mb-2"></img>
          <img src={Ig} width={50} alt="/"  className="mt-2 mb-2"></img>
          <img src={Telegram} width={50} alt="/"  className="mt-2 mb-2"></img>
          <img src={Twitter} width={50} alt="/"  className="mt-2 mb-2"></img>
          <img src={Wa} width={50} alt="/"  className="mt-2 mb-2"s></img>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;

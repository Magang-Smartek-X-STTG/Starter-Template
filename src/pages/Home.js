import React from "react";
import { useSelector } from "react-redux";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const Home = () => {
  const dataGlobal = useSelector((state) => state);
  return (
    <div className="h-screen">
      <div className="container mx-auto flex flex-col justify-between h-screen">
        <Header></Header>
        <div>
          <h1 className="text-6xl text-center text-white mt-10">Home Page</h1>
          <p className="text-white text-center text-xl mt-5">Heloo my name is {dataGlobal.name}</p>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

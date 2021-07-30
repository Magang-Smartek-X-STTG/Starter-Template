import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto flex flex-col justify-between h-screen">
        <Header></Header>
        <div>
          <h1 className="text-6xl text-center text-white mt-10">Home Page</h1>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

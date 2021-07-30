import React from "react";
import Header from "../parts/Header";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto">
          <Header></Header>
        <h1 className="text-6xl text-center text-white mt-10">Home Page</h1>
      </div>
    </div>
  );
};

export default Home;

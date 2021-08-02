import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../parts/Footer";
import Header from "../parts/Header";

import getDataCovid from "../redux/action/covidAction";

const Home = () => {
  const dataGlobal = useSelector((state) => state.globalState);
  const dataCovid = useSelector((state) => state.covidState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCovid());
  }, [dispatch]);

  return (
    <section className="h-screen overflow-y-auto">
      <Header />
      <main className="container mx-auto flex flex-col justify-between h-screen">
        <div className="text-center">
          <h1 className="text-6xl text-white mt-10">Home Page</h1>
          <p className="text-white text-xl mt-5">
            Heloo my name is
            {dataGlobal.name}
          </p>

          <h1 className="text-6xl text-white mt-10 mb-5">Data Covid Global</h1>

          {dataCovid && (
            <div className="flex justify-center">
              <img
                src={dataCovid?.image}
                width={500}
                alt="data covid global"
                className="text-center mb-20"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Home;

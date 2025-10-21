import React from "react";
import MainBanner from "../../components/Home/MainBanner";
import Categories from "../../components/Home/Categories";
import BestSeller from "../../components/Home/BestSeller";
import ButtomBanner from "../../components/Home/ButtomBanner";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <ButtomBanner />
    </div>
  );
};

export default Home;

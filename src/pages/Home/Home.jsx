import React from "react";
import MainBanner from "../../components/Home/MainBanner";
import Categories from "../../components/Home/Categories";
import BestSeller from "../../components/Home/BestSeller";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
    </div>
  );
};

export default Home;

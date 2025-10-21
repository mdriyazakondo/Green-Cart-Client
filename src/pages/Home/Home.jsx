import React from "react";
import MainBanner from "../../components/Home/MainBanner";
import Categories from "../../components/Home/Categories";
import BestSeller from "../../components/Home/BestSeller";
import ButtomBanner from "../../components/Home/ButtomBanner";
import NewsLetter from "../../components/Home/NewsLetter";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <ButtomBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;

import React from "react";
import { assets } from "../../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative">
      <img src={assets.main_banner_bg} alt="main_banner_bg"  className="hidden md:block w-full"/>
      <img src={assets.main_banner_bg_sm} alt="main_banner_bg_sm"  className="md:hidden block w-full"/>
    </div>
  );
};

export default MainBanner;

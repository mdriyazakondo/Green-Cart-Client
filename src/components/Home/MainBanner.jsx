import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="main_banner_bg"
        className="hidden md:block w-full"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="main_banner_bg_sm"
        className="md:hidden block w-full"
      />
      <div>
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
            Freshness You Can Trust, Savings You will Love!
          </h1>

          <div className="flex items-center mt-6 font-medium">
            <Link
              to={"/products"}
              className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
            >
              Show now
              <img
                className="md:hidden transition group-focus:translate-1"
                src={assets.white_arrow_icon}
                alt=""
              />
            </Link>
            <Link
              to={"/products"}
              className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
            >
              Explore deals
              <img
                className="hidden md:block transition group-hover:translate-x-1"
                src={assets.black_arrow_icon}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

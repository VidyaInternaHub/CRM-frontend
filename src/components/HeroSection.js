<<<<<<< HEAD
import React from "react";
import HeroTabs from "./HeroTabs";
import { CiCloudOn } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className=" flex flex-col w-full mt-20 bg-hero-image bg-center bg-no-repeat">
      <div className=" max-w-[1388px] flex justify-center self-center">
        <div className="flex my-10 flex-col w-[997px]">
          <h1 className="mb-4 text-xl md:text-2xl lg:text-4xl font-bold">
            Bitrix24. Your ultimate workspace.
          </h1>
          <HeroTabs />
        </div>
      </div>
      {/* footer */}
      <div className=" h-28 bg-blue flex justify-center items-center">
        <div className=" max-w-[1114px] w-full text-white text-xl font-medium lg:text-xl flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center gap-2 ">
            <div class="hidden lg:flex border-2 border-white border-opacity-40 lg:bg-white lg:bg-opacity-40 rounded-full w-fit lg:px-16 justify-center items-center lg:text-2xl ">
              <CiCloudOn className="text-4xl hidden lg:flex" />
              <span className="ml-1">15,000,000</span>
            </div>
            <p className="inline-block">
              <span className="lg:hidden">15,000,000{" "}</span>
              <span>organizations have chosen Bitrix24</span>
            </p>
          </div>
          <div className="flex gap-2 items-center opacity-80 lg:opacity-100">
            <img
              src="https://www.bitrix24.in/images/content_common/include/sections/company_count_section_v1/globe.svg"
              alt=""
            />
            <p>available in</p>
            <div className="lg:border-2 lg:border-white lg:rounded-full w-8 h-8 lg:bg-white lg:text-blue text-white">
              18
            </div>
            <span>languages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
=======
import React from "react";
import HeroTabs from "./HeroTabs";
import heroBackground from "../assets/hero-backgroundsvg.svg";

const HeroSection = () => {
  return (
    <div className=" flex flex-col w-full mt-20">
      <div className="bg-hero-image bg-cover w-[1388px] flex justify-center self-center">
        <div className="flex my-10 flex-col w-[997px]">
          <div>
            <h1 className="mb-4 text-4xl font-bold">
              Bitrix24. Your ultimate workspace.
            </h1>
            <HeroTabs />
          </div>
          <button className="w-fit rounded-full ml-4 px-6 py-2 text-xl font-semibold bg-light-green ">
            START FOR FREE
          </button>
        </div>
      </div>
      <div className="w-full h-28 bg-blue flex justify-center items-center">
        <div className="border-2 w-[1114px] h-20">
          <div class="relative bg-white text-blue p-4 border-2 rounded-lg max-w-xs">
            <p>This is an arrow</p>
            <div class="absolute top-1/2 left-5 transform -translate-y-1/2 -translate-x-full">
              <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
>>>>>>> 502ef73cf00fefadf84b39426bd5a5880286f682

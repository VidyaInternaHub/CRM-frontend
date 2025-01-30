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

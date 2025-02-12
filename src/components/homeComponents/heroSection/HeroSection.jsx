import React from "react";
import HeroTabs from "./HeroTabs";
import { CiCloudOn } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="mt-20 flex flex-col w-full bg-hero-image bg-center bg-no-repeat">
      <div className="w-full max-w-[1388px] flex justify-center self-center px-5">
        <div className="flex mt-10 flex-col w-[997px]">
          <h1 className=" text-font-2xl md:text-font-4xl font-bold text-center">
            Bitrix24. Your ultimate workspace.
          </h1>
          <HeroTabs />
        </div>
      </div>
      {/* footer */}
      <div className=" h-28 bg-blue-main flex justify-center items-center w-full">
        <div className=" max-w-[1114px] w-full text-white text-font-xl font-medium lg:text-font-xl flex flex-col lg:flex-row items-center justify-between px-5">
          <div className="flex items-center gap-2 ">
            <div className="hidden lg:flex border-2 border-white border-opacity-40 lg:bg-white lg:bg-opacity-40 rounded-full w-fit lg:px-16 justify-center items-center lg:text-font-2xl ">
              <CiCloudOn className="text-font-4xl hidden lg:flex" />
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
            <div className="lg:border-2 lg:border-white lg:rounded-full w-8 h-8 lg:bg-white lg:text-blue-main text-white">
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

import React, { useState } from "react";
import data from "../../data/product_tools.json";
import heroImage from "../../assets/images/product-tools/img-tools-main.png.webp";
import StartForFreeBtn from "../common/buttons/StartForFreeBtn";
import { tabs } from "../../data/tools";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };
  return (
    <div className="w-full bg-gradient-to-br from-cyan-500 to-blue-main text-white">
      {/* ----------small screen--------- */}
      <div className="flex lg:hidden flex-col justify-center items-center h-full cursor-pointer">
        <div
          className={`relative flex flex-col items-center justify-center h-16 w-full ${
            isOpen && "bg-blue-300"
          }`}
          onClick={handleClick}
        >
          <div>Menu</div>
          <div className="absolute right-3">
            <svg
              className={`w-7 h-7 transform transition-transform duration-200 opacity-50 -rotate-90 ${
                isOpen && "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="h-48 w-full overflow-y-auto">
            {tabs.map((tool) => (
              <div className="flex flex-col items-center justify-center  h-16 w-full hover:bg-blue-200">
                <div>{tool.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* --------large screen---------- */}
  
      <div className="hidden lg:grid grid-cols-6 cursor-pointer max-w-[1180px] w-full mx-auto">
        {tabs.map((tool) => (
          <div className="flex items-center justify-center h-16 hover:bg-blue-200">
            <div className="w-fit">{tool.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ToolsHeroSection = () => {
  const { title, description } = data.main.heroSection;
  return (
    <>
      {/* ----------small & large screen---------- */}
      <section className="mt-16 overflow-y-scroll w-screen h-full">
        <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-cyan-500 to-blue-main md:px-3 h-full">
          <div className=" text-white w-full flex items-center gap-4 flex-col-reverse md:flex-row max-w-[430px] md:max-w-[1180px] py-10 px-auto md:max-h-[408px]">
            <div className="flex flex-col px-3 w-full gap-3 md:h-[308px] md:justify-between">
              <div className=" text-font-2xl leading-none md:text-font-3xl lg:text-font-4xl">
                {title}
              </div>
              <div className="text-font-base xl:text-font-xl">{description}</div>
              <div className="flex justify-center  md:justify-start my-4">
                <StartForFreeBtn fixed={true} />
              </div>
            </div>
            <div className="max-w-[480px]">
              <img
                src={heroImage}
                alt="main-hero-image "
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <Menu />
        </div>
      </section>
    </>
  );
};

export default ToolsHeroSection;

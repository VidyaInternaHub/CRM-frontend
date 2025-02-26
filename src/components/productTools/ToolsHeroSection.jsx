import React from "react";
import data from "../../data/product_tools.json";
import heroImage from "../../assets/images/product-tools/img-tools-main.png.webp";
import StartForFreeBtn from "../common/buttons/StartForFreeBtn";

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
      </section>
    </>
  );
};

export default ToolsHeroSection;

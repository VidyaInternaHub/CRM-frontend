import React from "react";
import data from "../../../data/product_tools.json";
import heroImage from "../../../assets/images/product-tools/img-tools-main.png.webp";

const ToolsHeroSection = () => {
  const {title, description} = data.main.heroSection;
  return (
    <section className="mt-20 flex h-screen justify-center overflow-x-hidden bg-blue-main">
      <div className="mx-auto text-white flex gap-4 flex-col w-[60%] py-20">
        <img src={heroImage} alt="main-hero-image" />
        <div className=" text-font-2xl">{title}</div>
        <div className="text-font-base">{description}</div>
      </div>
    </section>
  );
};

export default ToolsHeroSection;

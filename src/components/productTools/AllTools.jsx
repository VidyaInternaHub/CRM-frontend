import React, {useRef} from "react";
import { tabs } from "../../data/tools";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import StartForFreeBtn from "../common/buttons/StartForFreeBtn";
import Menu from "./Menu";

const AllTools = () => {
  const refs = useRef([]);

  const scrollToSection = (index) => {
    console.log(refs.current[index].id)
    refs.current[index].scrollIntoView();
  };

  return (
    <div className="relative">
      <Menu scrollToSection={scrollToSection}/>

      {tabs.map((tool, index) => (
          <section key={index} ref={el => refs.current[index] = el}
            id={tool.label}
            className="container w-max-[1320px] text-black-2 my-10 mx-auto"
          >
            <div className="text-font-3xl text-center py-4">{tool.label}</div>
            <div className="text-font-xl text-center">{tool.tag}</div>
            {/* ----features section in grid view----- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-3 text-left py-5">
              {tool.content.map((item) => (
                <div
                  key={item.id}
                  className={`relative group cursor-pointer ${tool.cardColor} bg-opacity-10 rounded-2xl px-4 py-5 lg:px-6 md:pb-12 transition duration-500 hover:shadow-md`}
                >
                  <div className="flex gap-3 items-center">
                    <div className={`text-font-xl ${tool.iconColor}`}>
                      {item.icon}
                    </div>
                    <div className="transition duration-500 text-font-base font-semibold mb-1 group-hover:text-blue-main lg:text-font-xl">
                      {item.title}
                    </div>
                  </div>
                  <div className="text-font-sm leading-5 py-3 lg:text-font-base">
                    {item.description}
                  </div>
                  <div className="hidden absolute transition duration-500 bottom-5 right-6 text-blue-main md:block group-hover:bg-blue-main group-hover:text-white p-2 rounded-lg">
                    <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>
            {/* ---------see all features link-------- */}
            <div className=" text-font-base font-semibold flex justify-end gap-1 items-center mt-2.5 ">
              <a href={tool.pageUrl}>
                <div className="hover:text-blue-main w-fit flex cursor-pointer items-center ">
                  <span>See all {tool.label} features</span>
                  <MdOutlineKeyboardArrowRight className="text-blue-main text-font-3xl font-light" />
                </div>
              </a>
            </div>
            {/* ---------image section--------- */}
            <div className=" relative my-14 md:my-28 lg:my-40 border-t-2 border-white">
              <div
                className={`flex rounded-xl pb-10 pt-28 mt-36 md:pt-32 justify-center lg:mt-0 lg:pt-10 ${
                  tool.id % 2 > 0
                    ? "bg-gradient-to-br from-gray-0 lg:justify-start lg:pr-10"
                    : "bg-gradient-to-bl from-blue-50 lg:justify-end lg:pl-10"
                }`}
              >
                <div className="lg:w-3/4 lg:px-14">
                  <div className="text-font-2xl md:text-font-3xl lg:text-[36px] text-center lg:text-left">
                    {tool.imageText}
                  </div>
                  <div className="flex justify-center lg:justify-start mt-5 w-full">
                    <StartForFreeBtn fixed={true} />
                  </div>
                </div>
                <div
                  className={`absolute top-0 right-0 left-0 flex items-center justify-center lg:bottom-0 ${
                    tool.id % 2 > 0 ? "lg:left-auto " : "lg:right-auto "
                  }`}
                >
                  <img
                    className={`h-56 md:h-60 lg:h-80 ${
                      tool.id % 2 > 0 ? "" : ""
                    }`}
                    src={tool.image}
                    alt={tool.label + "-" + tool.id}
                  />
                </div>
              </div>
            </div>
          </section>
      ))}
    </div>
  );
};

export default AllTools;

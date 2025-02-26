import React, { useState } from "react";
import { tabs } from "../../data/tools";

const Menu = ({scrollToSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };
  return (
    <div className="sticky top-16 z-10 border-t-2 w-full bg-gradient-to-br from-cyan-500 to-blue-main text-white h-16">
      {/* ----------small screen--------- */}
      <div className="relative flex lg:hidden flex-col justify-center items-center h-full cursor-pointer">
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
          <div className="absolute bg-blue-main top-[100%] z-40 h-48 w-full overflow-y-scroll">
            {tabs.map((tool, index) => (
              <div key={tool.id} className="flex flex-col items-center justify-center  h-16 w-full hover:bg-blue-200" onClick={() => scrollToSection(index)}>
                <div>{tool.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* --------large screen---------- */}

      <div className=" hidden lg:grid grid-cols-6 cursor-pointer max-w-[1180px] w-full mx-auto">
        {tabs.map((tool) => (
          <div key={tool.id} className="flex items-center justify-center h-16 hover:bg-blue-200">
            <div className="w-fit">{tool.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

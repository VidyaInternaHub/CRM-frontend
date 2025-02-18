import React, { useState, useEffect, useContext } from "react";
import { navContext } from "../../layout/Navbar";

export const Title = ({ tab }) => {
  return (
    <div className="flex items-center gap-3">
      {tab.icon && (
        <span className={`icon h-4 w-4  ${tab.iconColor && tab.iconColor}`}>{tab.icon}</span>
      )}
      <span className={`capitalize text-font-sm`}>{tab.label}</span>
    </div>
  );
};

export const List = ({ tab }) => {
  return (
    <ul className="flex flex-col text-gray-600 list-disc w-full text-font-sm font-normal">
      {tab.content.map((content, index) => (
        <div key={index} className="flex flex-col w-full px-4 cursor-pointer">
          <li className=" ml-5 py-3">
            <a
              href={`/tools/${tab.label
                .toLowerCase()
                .split(" ")
                .join("-")}/${content.title
                .toLowerCase()
                .split(" ")
                .join("-")}/`}
            >
              {content.title}
            </a>
          </li>
          <hr className="h-[1px] bg-gray-50 w-full" />
        </div>
      ))}
    </ul>
  );
};

const Accordion = ({ tab, children }) => {
  const value = useContext(navContext);
  const [isOpen, setIsOpen] = useState(value.productId === tab.id);

  const handleActive = () => {
    if (isOpen) {
      value.setProductId(0);
      setIsOpen(false);
    } else {
      value.setProductId(tab.id);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    setIsOpen(value.productId === tab.id);
  }, [value.productId, tab.id]);

  return (
    <div>
      <button
        className={`w-full text-left p-4 focus:outline-none hover:bg-gray-0 hover:text-blue-main ${
          isOpen && "bg-gray-0"
        }`}
        onClick={handleActive}
      >
        <div className="flex justify-between items-center">
          <span
            className={`text-font-sm font-bold  ${isOpen && "text-blue-main"}`}
          >
            <Title tab={tab} />
          </span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen && "rotate-180"
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
      </button>
      {isOpen && children}
    </div>
  );
};

export default Accordion;

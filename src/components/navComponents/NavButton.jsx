import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Dropdown from "./Dropdown";

const NavButton = ({ name, isOpen, dropdownContent }) => {
  return (
    <>
      {/* ----------------for large screen ------------- */}
      <div
        className={`hidden w-full my-auto lg:flex cursor-pointer px-1 py-2 border-2 border-blue-dark border-opacity-0  rounded-xl hover:text-blue-main ${
          isOpen &&
          (name.toLowerCase() === "price" ? "border-opacity-100" : "text-blue")
        }`}
      >
        <div>{name.toUpperCase()}</div>
        {name.toLowerCase() !== "pricing" &&
          (isOpen ? (
            <MdOutlineKeyboardArrowUp className=" text-blue-main text-font-xl" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-gray-2 text-font-xl" />
          ))}
      </div>

      {/* ----------------for small screen ------------- */}

      <div
        className={` flex w-full lg:hidden my-2 justify-between cursor-pointer items-center px-5 py-2 border-2 border-gray-1 border-opacity-50 rounded-xl ${
          isOpen && "text-blue"
        }`}
      >
        <Dropdown
          trigger={
            <div className="flex justify-between">
              <div>{name.toUpperCase()}</div>
              {["pricing", "integrations"].includes(name.toLowerCase()) ? (
                <MdOutlineKeyboardArrowDown className="text-gray-2 text-font-xl -rotate-90" />
              ) : isOpen ? (
                <MdOutlineKeyboardArrowUp className=" text-blue-main text-font-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-gray-2 text-font-xl" />
              )}
            </div>
          }
          isOpen={isOpen}
        >
          {dropdownContent}
        </Dropdown>
      </div>
    </>
  );
};

export default NavButton;

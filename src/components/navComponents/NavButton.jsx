import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const NavButton = ({ name, isOpen }) => {
  return (
    <>
      {/* ----------------for large screen ------------- */}
      <div
        className={`hidden my-auto lg:flex cursor-pointer px-1 py-2 border-2 border-blue-2 border-opacity-0  rounded-xl hover:text-blue ${
          isOpen && (name.toLowerCase() === "price" ? "border-opacity-100" : "text-blue")
        }`}
      >
        <div>{name.toUpperCase()}</div>
        {name.toLowerCase() !== "pricing" &&
          (isOpen ? (
            <MdOutlineKeyboardArrowUp className=" text-blue text-xl" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-gray-2 text-xl" />
          ))}
      </div>

      {/* ----------------for small screen ------------- */}

      <div
        className={`lg:hidden flex my-2 justify-between cursor-pointer items-center px-5 py-2 border-2 border-gray border-opacity-50 rounded-xl ${
          isOpen && "text-blue"
        }`}
      >
        <div>{name.toUpperCase()}</div>
        {["pricing", "integrations"].includes(name.toLowerCase()) ? (
          <MdOutlineKeyboardArrowDown className="text-gray-2 text-xl -rotate-90" />
        ) : isOpen ? (
          <MdOutlineKeyboardArrowUp className=" text-blue text-xl" />
        ) : (
          <MdOutlineKeyboardArrowDown className="text-gray-2 text-xl" />
        )}
      </div>
    </>
  );
};

export default NavButton;

import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";

const NavButton = ({ btn, active, setActive }) => {
  const [show, setShow] = useState(false);

  const handleActive = () => {
    if (show) {
      setActive(1);
      setShow(false);
    } else {
      setActive(btn.id);
      setShow(true);
    }
  };

  useEffect(() => {
    setShow(active === btn.id);
  }, [active, btn.id]);

  return (
    <>
      {/* ----------------for large screen ------------- */}
      <div
        className={`hidden w-full my-auto lg:flex cursor-pointer px-1 py-2 border-2 border-blue-dark border-opacity-0  rounded-xl hover:text-blue-main ${
          show &&
          (btn.name.toLowerCase() === "price"
            ? "border-opacity-100"
            : "text-blue ")
        }`}
      >
        <div>{btn.name.toUpperCase()}</div>
        {btn.name.toLowerCase() !== "pricing" &&
          (show ? (
            <MdOutlineKeyboardArrowUp className=" text-blue-main text-font-xl" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-gray-2 text-font-xl" />
          ))}
      </div>

      {/* ----------------for small screen ------------- */}

      <div
        className={` flex w-full lg:hidden my-2 justify-between items-center border-2 border-gray-1 border-opacity-50 rounded-xl text-black-2 ${
          show && "text-blue"
        }`}
      >
        <Dropdown
          trigger={
            <div
              className={`flex justify-between px-4 py-2 text-font-sm items-center cursor-pointer ${
                show && "text-blue-main bg-slate-2"
              }`}
              onClick={handleActive}
            >
              <span>{btn.name.toUpperCase()}</span>
              {["pricing", "integrations"].includes(btn.name.toLowerCase()) ? (
                <MdOutlineKeyboardArrowDown className="text-gray-2 text-font-2xl -rotate-90" />
              ) : show ? (
                <MdOutlineKeyboardArrowUp className=" text-blue-main text-font-2xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-gray-2 text-font-2xl" />
              )}
            </div>
          }
        >
          {show && btn.dropdown}
        </Dropdown>
      </div>
    </>
  );
};

export default NavButton;

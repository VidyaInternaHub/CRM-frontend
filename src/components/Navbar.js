import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import logo from "../assets/bitrix24-seeklogo.svg";
import { ImUser } from "react-icons/im";
import { FaGlobeAmericas } from "react-icons/fa";

const NavButtonsData = [
  { id: 0, text: "Product", type: "dropdown" },
  { id: 1, text: "Pricing", type: "button" },
  { id: 2, text: "Resources", type: "dropdown" },
  { id: 3, text: "solutions", type: "dropdown" },
  { id: 4, text: "Integrations", type: "dropdown" },
  { id: 5, text: "partners", type: "dropdown" },
  { id: 6, text: "why bitrix24", type: "dropdown" },
];

const NavButton = ({ text, active, type }) => {
  return (
    <>
      <div
        className={`flex cursor-pointer items-center hover:text-blue ${
          active && "text-blue"
        }`}
      >
        <div>{text.toUpperCase()}</div>
        {type === "dropdown" &&
          (active ? (
            <MdOutlineKeyboardArrowUp className="text-2xl text-blue" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-2xl text-gray" />
          ))}
      </div>
    </>
  );
};

const NavButtons = ({ data }) => {
  const [activeBtn, setActiveBtn] = useState(null);
  return (
    <>
      <div className="hidden justify-between gap-3 font-semibold lg:flex items-center text-black-2 text-[0.5rem] lg:text-[0.6rem] 2xl:text-sm mx-2">
        {data.map((btn) => (
          <div
            key={btn.id}
            onClick={() => {
              activeBtn === btn.id ? setActiveBtn(null) : setActiveBtn(btn.id);
            }}
          >
            <NavButton
              text={btn.text}
              active={activeBtn === btn.id}
              type={btn.type}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-white top-0 w-screen shadow-md flex justify-center z-50">
        <div className="max-w-nav w-full flex justify-between p-4 h-20 items-center">
          <img src={logo} alt="logo" className="md:h-5 lg:h-6 xl:h-7" />
          <NavButtons data={NavButtonsData} />
          <div className="flex justify-end gap-2 items-center font-semibold text-sm">
            <button m-2>
              <IoSearch className="hidden xl:flex text-gray-2 text-2xl" />
            </button>
            <button className="rounded-lg p-2 bg-light-green ">
              START FOR FREE
            </button>
            <button className="hidden xl:flex gap-1 border-2 border-blue rounded-lg p-2 text-blue">
              <ImUser className="text-base" />
              <p>LOG IN</p>
            </button>
            <button className="hidden xl:flex items-center gap-1 font-light ">
              {" "}
              <FaGlobeAmericas />
              <p>EN</p>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

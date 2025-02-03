import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/bitrix24-seeklogo.svg";
import { ImUser } from "react-icons/im";
import { FaGlobeAmericas } from "react-icons/fa";

const NavButtonsData = [
  { label: "Product" },
  { label: "Pricing" },
  { label: "Resources" },
  { label: "solutions" },
  { label: "Integrations" },
  { label: "partners" },
  { label: "why bitrix24" },
];

const DropDownIcon = () => {
  return (
    <>
      <MdOutlineKeyboardArrowDown className="text-2xl text-gray" />
    </>
  );
};

const NavButtons = ({ data }) => {
  return (
    <>
      <div className="hidden justify-between gap-2 font-semibold lg:flex text-black-2 lg:text-sm xl:text-md ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center hover:text-blue"
          >
            <div>{item.label.toUpperCase()}</div>
            <MdOutlineKeyboardArrowDown className="text-2xl text-gray" />
          </div>
        ))}
      </div>
    </>
  );
};

const NavButton = ({ label }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex cursor-pointer items-center hover:text-blue"
      >
        <div>{label.toUpperCase()}</div>
        <MdOutlineKeyboardArrowDown className="text-2xl text-gray" />
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

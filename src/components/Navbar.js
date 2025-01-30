import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/bitrix24-seeklogo.svg";

const DropDownIcon = () => {
  return (
    <>
      <MdOutlineKeyboardArrowDown className="text-2xl text-gray" />
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-white top-0 w-screen shadow-md flex justify-center">
        <div className="max-w-nav w-full flex justify-between p-4 h-20 items-center">
          <img src={logo} alt="logo" className="md:h-5 lg:h-6 xl:h-7" />
          <div className="hidden justify-between font-semibold lg:flex text-black-2 lg:text-sm xl:text-md">
            <div className="flex cursor-pointer items-center">
              <div>PRODUCT</div>
              <DropDownIcon />
            </div>
            <div className="flex cursor-pointer items-center">
              <div>PRICING</div>
              <DropDownIcon />
            </div>
            <div className="flex cursor-pointer items-center">
              <div>RESOURCES</div>
              <DropDownIcon />
            </div>
            <div className="flex cursor-pointer items-center">
              <div>SOLUTIONS</div>
              <DropDownIcon />
            </div>
            <div className="flex cursor-pointer items-center">
              <div>INTEGRATIONS</div>
              <DropDownIcon />
            </div>
            <div className="flex cursor-pointer items-center">
              <div>PRINTERS</div>
              <DropDownIcon />
            </div>
            <div className="flex cursor-pointer items-center">
              <div>WHY BITRIX24</div>
              <DropDownIcon />
            </div>
          </div>
          <div className="flex justify-end gap-2 items-center font-semibold text-sm">
            <button m-2>
              <IoSearch className="hidden xl:flex text-gray-2 text-2xl" />
            </button>
            <button className="rounded-lg p-2 bg-light-green ">
              START FOR FREE
            </button>
            <button className="hidden xl:flex border-2 border-blue rounded-lg p-2 text-blue">
              LOG IN
            </button>
            <button className="hidden xl:flex p-2 ">EN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

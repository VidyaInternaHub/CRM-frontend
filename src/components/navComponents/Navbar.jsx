import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/bitrix24-seeklogo.svg";
import { ImUser } from "react-icons/im";
import { FaGlobeAmericas } from "react-icons/fa";
import DropdownContainer from "./DropdownContainer";
import MenuIcon from "./MenuIcon";
import NavButton from "./NavButton";
import useClickOutside from "../../hooks/useClickOutSide";
import NavProduct from "./NavProduct";

const NavButtonsData = [
  { id: 1, name: "Product" },
  { id: 2, name: "Pricing" },
  { id: 3, name: "Resources" },
  { id: 4, name: "solutions" },
  { id: 5, name: "Integrations" },
  { id: 6, name: "partners" },
  { id: 7, name: "why bitrix24" },
];

const SearchBox = () => {
  return (
    <>
      <div className="w-full flex justify-between bg-gray bg-opacity-30 py-2 rounded-full px-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full"
        />
        <button>
          <IoSearch className="text-gray-2 text-2xl" />
        </button>
      </div>
    </>
  );
};

const NavButtons = ({ data, active, setActive, className }) => {
  return (
    <>
      <div
        className={`${className} lg:flex lg:justify-center font-bold lg:font-semibold  items-center text-black lg:text-black-2 lg:px-0 text-[0.7rem] lg:gap-0 xl:text-sm`}
      >
        {data.map((btn, index) => (
          <div
            key={index}
            onClick={() => {
              btn.id === 2 || active === btn.id
                ? setActive(0)
                : setActive(btn.id);
            }}
          >
            <NavButton name={btn.name} isOpen={active === btn.id} />
          </div>
        ))}
      </div>
    </>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const navRef = useClickOutside(() => setActive(0));

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="border-box sticky bg-white top-0 w-full shadow-md flex justify-center z-50"
      >
        <header className="lg:max-w-nav w-full flex justify-between p-1 h-20 items-center px-5">
          <div className="flex items-center justify-start gap-2">
            <div className="flex lg:hidden">
              <MenuIcon isOpen={isOpen} setOpen={setOpen} />
            </div>
            <img src={logo} alt="logo" className="h-5 lg:h-6 xl:h-7" />
          </div>
          <div className="hidden lg:flex items-center justify-center px-2">
            <NavButtons
              data={NavButtonsData}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="flex justify-end gap-2 items-center font-semibold text-sm">
            <button>
              <IoSearch className="hidden lg:flex text-gray-2 text-2xl" />
            </button>
            <button className="rounded-full py-1.5 px-4 lg:rounded-xl  lg:py-3 lg:px-2  bg-light-green ">
              START FOR FREE
            </button>
            <button className="hidden lg:flex gap-1 border-2 border-blue rounded-lg px-2 py-2.5 text-blue">
              <ImUser className="text-base" />
              <p>LOG IN</p>
            </button>
            <button className="hidden lg:flex items-center gap-1 font-light ">
              {" "}
              <FaGlobeAmericas />
              <p>EN</p>{" "}
            </button>
          </div>
        </header>
      </nav>
      {/* -----Nav menus for small screen---- */}
      {isOpen ? (
        <div className="absolute top-20 lg:hidden z-10 w-full bg-blue-gray-50">
          <div
            className={`w-full left-0 px-5 py-2 bg-white z-auto" justify-between font-semibold items-center text-black lg:hidden`}
          >
            <div className="my-5 text-sm">
              <SearchBox />
            </div>
            <NavButtons
              data={NavButtonsData}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="flex flex-col gap-2 items-center px-2 py-5 text-base font-semibold">
            <button className="rounded-xl w-full h-11 min-w-32 max-w-72 bg-light-green ">
              START FOR FREE
            </button>
            <button className="flex items-center gap-2 justify-center rounded-xl w-full h-11 min-w-32 max-w-72 border-2 border-blue text-blue">
              <ImUser className="text-base" />
              <p>LOG IN</p>
            </button>
            <button className="flex items-center gap-2 justify-center rounded-xl w-full h-11 min-w-32 max-w-72 border-2 border-blue text-blue">
              {" "}
              <FaGlobeAmericas />
              <p className="text-black">EN</p>{" "}
            </button>
          </div>
        </div>
      ) : (
        // ------------dropdown for large screen---------
        active !== 0 && (
          <div className="fixed hidden lg:flex top-20 w-full z-40">
            <DropdownContainer>
              {active === 1 ? (
                <NavProduct />
              ) : (
                NavButtonsData.find(
                  (btn) => btn.id === active
                ).name.toUpperCase()
              )}
            </DropdownContainer>
          </div>
        )
      )}
    </>
  );
};

export default Navbar;

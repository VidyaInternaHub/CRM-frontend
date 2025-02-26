import React, { useEffect, useState, createContext } from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/bitrix24-seeklogo.svg";
import { ImUser } from "react-icons/im";
import { FaGlobeAmericas } from "react-icons/fa";
import MenuIcon from "../components/navComponents/MenuIcon";
import NavButton from "../components/navComponents/NavButton";
// import useClickOutside from "../hooks/useClickOutSide";
import NavProduct from "../components/navComponents/NavProduct";
import NavSolutions from "../components/navComponents/NavSolutions";
import NavResources from "../components/navComponents/NavResources";
import NavPartners from "../components/navComponents/NavPartners";
import StartForFreeBtn from "../components/common/buttons/StartForFreeBtn";

export const navContext = createContext(0);

const NavButtonsData = [
  { id: 1, name: "Product", dropdown: <NavProduct /> },
  { id: 2, name: "Pricing", dropdown: "" },
  { id: 3, name: "Resources", dropdown: <NavResources /> },
  { id: 4, name: "solutions", dropdown: <NavSolutions /> },
  { id: 5, name: "Integrations", dropdown: "" },
  { id: 6, name: "partners", dropdown: <NavPartners /> },
  { id: 7, name: "why bitrix24", dropdown: "" },
];

const SearchBox = () => {
  return (
    <>
      <div className="w-full flex justify-between bg-gray-1 bg-opacity-30 py-2 rounded-full px-5 overflow-x-hidden">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full"
        />
        <button>
          <IoSearch className="text-gray-2 text-font-2xl" />
        </button>
      </div>
    </>
  );
};

const NavButtons = ({ data, active, setActive, className }) => {
  return (
    <>
      <div
        className={`${className} lg:flex lg:justify-center font-bold lg:font-semibold items-center text-black-2 lg:px-0 text-[0.7rem] lg:gap-0 xl:text-font-2sm`}
      >
        {data.map((btn, index) => (
          <div key={btn.id}>
            {/* -----------for large screen--------- */}
            <div
              key={"large_btn_"+btn.id}
              onClick={() => {
                btn.id === 2 || active === btn.id
                  ? setActive(0)
                  : setActive(btn.id);
              }}
              className="hidden lg:block"
            >
              <div className="block w-full">
                <NavButton btn={btn} active={active} setActive={setActive} />
              </div>
            </div>
            {/* --------for small screen-------- */}
            <div
              key={"small_btn_"+btn.id}
              onClick={() => {
                setActive(btn.id);
              }}
              className="block lg:hidden"
            >
              <div className="w-full">
                <NavButton btn={btn} active={active} setActive={setActive} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [productId, setProductId] = useState(0);

  // const navRef = useClickOutside(() => setActive(0));

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
    <div className="relative">
      <navContext.Provider value={{ productId, setProductId }}>
        <header
          // ref={navRef}
          className="border-box fixed bg-white top-0 w-full shadow-md flex justify-center z-50"
        >
          <nav className="max-w-nav w-full flex justify-between h-16 xl:h-20 items-center px-5">
            <div className="flex items-center justify-start gap-2">
              <div className="flex h-7 lg:hidden overflow-hidden">
                <MenuIcon isOpen={isOpen} setOpen={setOpen} />
              </div>
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className=" overflow-hidden h-5 max-w-[195px] xl:h-[30px]"
                />
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-center px-2">
              <NavButtons
                data={NavButtonsData}
                active={active}
                setActive={setActive}
              />
            </div>
            <div className="flex justify-end gap-2 items-center font-semibold text-font-sm">
              <button>
                <IoSearch className="hidden lg:flex text-gray-2 text-font-2xl" />
              </button>
              <StartForFreeBtn/>
              <button className="hidden lg:flex gap-1 border-2 border-blue-main rounded-xl px-2 py-2.5 text-blue-main">
                <ImUser className="text-font-base" />
                <p>LOG IN</p>
              </button>
              <button className="hidden lg:flex items-center gap-1 font-light ">
                {" "}
                <FaGlobeAmericas />
                <span>EN</span>{" "}
              </button>
            </div>
          </nav>
        </header>
        {/* -----Nav menus for small screen---- */}
        {isOpen ? (
          <div className="fixed top-20 lg:hidden z-40 w-full bg-blue-gray-50 min-h-auto max-h-screen overflow-y-scroll">
            <div
              className={`w-full left-0 px-5 py-2 bg-white z-auto" justify-between font-semibold items-center text-black-1lg:hidden`}
            >
              <div className="my-5 text-font-sm">
                <SearchBox />
              </div>
              <NavButtons
                data={NavButtonsData}
                active={active}
                setActive={setActive}
              />
            </div>
            <div className="flex flex-col gap-2 items-center px-2 py-5 text-font-base font-semibold">
              <button className="rounded-xl w-full h-11 min-w-32 max-w-72 bg-green-button text-black-2">
                START FOR FREE
              </button>
              <button className="flex items-center gap-2 justify-center rounded-xl w-full h-11 min-w-32 max-w-72 border-2 border-blue-main text-blue-main">
                <ImUser className="text-font-base" />
                <p>LOG IN</p>
              </button>
              <button className="flex items-center gap-2 justify-center rounded-xl w-full h-11 min-w-32 max-w-72 border-2 border-blue-main text-blue">
                <FaGlobeAmericas className="text-blue-main" />
                <p className="text-black-2">EN</p>
              </button>
            </div>
          </div>
        ) : (
          // ------------dropdown for large screen---------
          active !== 0 && (
            <div className="hidden lg:flex fixed top-16 xl:top-20 w-full z-40 px-6 py-10 bg-white shadow-xl justify-center rounded-b-[36px]">
                {![0, 2].includes(active) &&
                  NavButtonsData[active - 1].dropdown !== "" &&
                  NavButtonsData[active - 1].dropdown}
            </div>
          )
        )}
      </navContext.Provider>
    </div>
  );
};

export default Navbar;

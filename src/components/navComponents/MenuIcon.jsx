import React from 'react';

const MenuIcon = ({isOpen, setOpen}) => {

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex lg:hidden items-center justify-center h-screen">
      <div
        className="relative w-8 h-6 cursor-pointer"
        onClick={toggleMenu}
      >
        <span
          className={`block absolute h-1 w-full bg-blue-2 transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 top-1/2' : 'top-0'
          }`}
        ></span>
        <span
          className={`block absolute h-[0.2rem] w-full bg-blue-2 transform transition duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'top-[43%]'
          }`}
        ></span>
        <span
          className={`block absolute h-1 w-full bg-blue-2 transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 top-1/2' : 'bottom-0'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default MenuIcon;

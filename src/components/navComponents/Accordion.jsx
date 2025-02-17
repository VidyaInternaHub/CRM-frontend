import React, { useState, useEffect, useContext } from "react";
import { navContext } from "../../layout/Navbar";

const Accordion = ({ currentId, title, children, activeId, setActiveId }) => {
  const value = useContext(navContext);
  const [isOpen, setIsOpen] = useState(value.productId === currentId);

  const handleActive = () => {
    if (isOpen) {
      value.setProductId(0);
      setIsOpen(false);
    } else {
      value.setProductId(currentId);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    setIsOpen(value.productId === currentId);
  }, [value.productId, currentId]);

  return (
    <div>
      <button
        className={`w-full text-left p-4 focus:outline-none ${
          isOpen && "bg-slate-2"
        }`}
        onClick={handleActive}
      >
        <div className="flex justify-between items-center">
          <span
            className={`text-font-sm font-bold ${isOpen && "text-blue-main"}`}
          >
            {title}
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
      {isOpen && <div>{children}</div>}
      
    </div>
  );
};

export default Accordion;

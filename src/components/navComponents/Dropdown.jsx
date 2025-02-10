import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutSide";

export default function Dropdown({ children, trigger }) {
  const [show, setShow] = useState(false);
  const dropRef = useClickOutside(() => setShow(false));

  return (
    <div
      className=" w-full mx-auto"
      ref={dropRef}
      onClick={() => setShow((cur) => !cur)}
    >
      <div>{trigger}</div>
      {show && (
        <ul className="absolute rounded-b-lg top-20 left-0 w-full bg-blue shadow-xl overflow-hidden">
          {children}
        </ul>
      )}
    </div>
  );
}

export function DropdownItem({ children }) {
  return (
    <li className=" flex gap-3 items-center px-4 py-2 text-gray-800 hover:bg-gray-50 cursor-pointer">
      {children}
    </li>
  );
}

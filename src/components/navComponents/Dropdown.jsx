export default function Dropdown({ children, trigger, isOpen }) {
  return (
    <div className=" w-full mx-auto">
      <div>{trigger}</div>
      {isOpen && <ul className="w-full">{children}</ul>}
    </div>
  );
}

export function DropdownItem({ children }) {
  return (
    <li 
    className=" block gap-3 text-left px-4 py-2 text-gray-800 hover:bg-gray-50 cursor-pointer"
    >
      {children}
    </li>
  );
}

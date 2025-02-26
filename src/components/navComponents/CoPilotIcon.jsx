import React from "react";

const CoPilotIcon = ({className}) => {
  return (
    <div className={className && className}>
      <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <g clipPath="url(#a)" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.563 19.92c4.117 0 7.454-3.32 7.454-7.417 0-4.095-3.337-7.415-7.454-7.415-4.117 0-7.454 3.32-7.454 7.415 0 4.096 3.337 7.416 7.454 7.416zM11.37 6.95a.209.209 0 0 0-.39 0l-.743 1.996a2.08 2.08 0 0 1-1.232 1.226l-2.005.738a.207.207 0 0 0 0 .389l2.005.738a2.08 2.08 0 0 1 1.232 1.226l.742 1.995c.067.18.324.18.391 0l.743-1.995a2.08 2.08 0 0 1 1.232-1.226l2.005-.738a.207.207 0 0 0 0-.39l-2.005-.737a2.08 2.08 0 0 1-1.232-1.226L11.37 6.95zm4.26 5.766a.12.12 0 0 0-.226 0l-.428 1.152a1.202 1.202 0 0 1-.712.709l-1.159.426a.12.12 0 0 0 0 .225l1.159.427c.33.121.59.38.712.708l.428 1.152a.12.12 0 0 0 .227 0l.428-1.152c.122-.328.383-.587.712-.708l1.159-.427a.12.12 0 0 0 0-.225l-1.159-.426c-.33-.122-.59-.38-.712-.709l-.428-1.152z"
            fill="currentColor"
          ></path>
          <path
            d="M23.288 12.954c.733.032 1.309.65 1.198 1.37-.883 5.762-5.885 10.176-11.924 10.176C5.901 24.5.5 19.127.5 12.5S5.9.5 12.562.5c3.174 0 6.062 1.22 8.215 3.213.538.497.471 1.34-.085 1.816-.556.477-1.39.407-1.942-.074a9.397 9.397 0 0 0-6.188-2.31c-5.194 0-9.405 4.189-9.405 9.356 0 5.168 4.211 9.356 9.405 9.356 4.607 0 8.44-3.295 9.248-7.645.134-.72.745-1.29 1.479-1.258z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h25v25H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CoPilotIcon;

import React from "react";

const StartForFreeBtn = ({ fixed }) => {
  return (
    <button
      className={`bg-green-button text-black-2 font-semibold transition-colors hover:bg-opacity-70 ${
        fixed
          ? "rounded-xl px-7 py-3.5"
          : "rounded-full lg:rounded-xl px-3 py-1.5 lg:py-3 lg:px-2"
      }`}
    >
      START FOR FREE
    </button>
  );
};

export default StartForFreeBtn;

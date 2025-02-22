import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full ">
      <div
        className="bg-blue-main h-[0.18rem]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
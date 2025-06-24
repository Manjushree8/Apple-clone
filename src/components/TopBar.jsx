import React, { useState } from 'react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full text-left bg-gray-200">
      <ul
        className="
          flex items-center 
          text-xs text-gray-800 
          px-4 py-3 
          lg:ml-40
        "
      >
        <li className="mr-2 hover:underline hover:text-gray-900">
          <a href="#">Education Store Home</a>
        </li>

        <li className="self-center h-[0.7em] border-l border-gray-400 mx-1"></li>

        <li
          className="ml-2 hover:underline hover:text-gray-900 cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          Exit
        </li>
      </ul>
    </div>
  );
};

export default TopBar;

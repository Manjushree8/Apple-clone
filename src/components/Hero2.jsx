import React from "react";
import MacBookImage from "../assets/images/Hero2.png";

const Hero2 = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center mt-2"
      style={{ backgroundImage: `url(${MacBookImage})` }}
    >
  
      <div className="absolute inset-0 bg-black opacity-10"></div>
{/* Learn More Button */}
      <div className="absolute bottom-10 z-10">
        <button className="bg-white text-black text-base md:text-lg font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Hero2;

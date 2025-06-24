
import React from "react";
import bgImage from "../assets/images/Hero.jpg"; 

const Hero = () => {
  return (
    <div
      className="w-full min-h-[550px] bg-[#f5f5f7] bg-cover bg-center relative flex items-center justify-center px-4 cursor-pointer"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="text-center max-w-md z-10">
        <div className="bg-[#007AFF] text-white text-3xl sm:text-4xl font-semibold rounded-[30px] px-6 py-4 leading-tight mb-2 shadow-md">
          Buy Mac<br />or iPad<br />for college
        </div>

        <div className="bg-[#007AFF] text-white text-sm sm:text-base font-medium rounded-full px-4 py-1 inline-block mb-2 shadow-sm">
          with education savings*
        </div>

        <div className="bg-[#007AFF] text-white text-2xl sm:text-3xl font-semibold rounded-[30px] px-6 py-4 leading-tight mb-4 shadow-md">
          Choose<br />AirPods or<br />an eligible<br />accessory¹
        </div>

        <button className="mt-2 border border-[#0071e3] text-[#0071e3] bg-transparent font-medium text-sm px-6 py-2 rounded-full hover:bg-gray-200 transition">
  Shop
</button>
      </div>
    </div>
  );
};

export default Hero;

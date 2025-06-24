import React from "react";
import MacbookAirImg from "../assets/images/Hero3.png";

const Hero3 = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#b8d3ea] to-white py-24 px-4 flex flex-col items-center justify-center text-center mt-2 cursor-pointer">
      {/* Headings */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">MacBook Air</h1>
        <p className="text-lg md:text-xl text-gray-700 font-bold leading-relaxed mb-6">
          Sky blue colour.<br />
          Sky high performance with M4.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Learn more
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Buy
        </button>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center w-full mb-10">
        <img
          src={MacbookAirImg}
          alt="MacBook Air"
          className="w-[300px] md:w-[500px] object-contain drop-shadow-xl -translate-x-10 md:-translate-x-12"
        />
      </div>

      {/* Footer Gradient Text */}
      <p className="text-base md:text-lg font-semibold">
        <span className="text-blue-600">Built for </span>
        <span className="text-purple-500">Apple </span>
        <span className="text-orange-500">Intelligence.</span>
      </p>
    </div>
  );
};

export default Hero3;

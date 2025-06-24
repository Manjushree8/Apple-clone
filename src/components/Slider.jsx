import React, { useState, useEffect, useRef } from "react";

// Import desktop and mobile images
import slider1 from "../assets/images/Slider1.jpg";
import slider1_mobile from "../assets/images/Slider1_mobile.jpg";
import slider2 from "../assets/images/Slider2.jpg";
import slider2_mobile from "../assets/images/Slider2_mobile.jpg";
import slider3 from "../assets/images/Slider3.jpg";
import slider3_mobile from "../assets/images/Slider3_mobile.jpg";

// Slide data
const slides = [
    {
        id: 1,
        desktop: slider1,
        mobile: slider1_mobile,
        alt: "Slide 1",
        text: "SILO",
        button: "Preview",
    },
    {
        id: 2,
        desktop: slider2,
        mobile: slider2_mobile,
        alt: "Slide 2",
        text: "FOUNDATION",
        button: "Watch now",
    },
    {
        id: 3,
        desktop: slider3,
        mobile: slider3_mobile,
        alt: "Slide 3",
        text: "GORGE",
        button: "Stream now",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5000;

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, delay);
        return () => resetTimeout();
    }, [current]);

    return (
        <div className="relative w-full h-[600px] bg-white overflow-hidden">
            {/* Slide container */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                        className="relative min-w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out cursor-pointer"
                    >
                        {/* Responsive images */}
                        <img
                            src={slide.mobile}
                            alt={slide.alt}
                            className="w-full h-full object-contain block md:hidden"
                        />
                        <img
                            src={slide.desktop}
                            alt={slide.alt}
                            className="w-full h-full object-cover hidden md:block"
                        />

                        {/* Overlay dim effect for non-active slides */}
                        {index !== current && (
                            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none transition-opacity duration-500"></div>
                        )}

                        {/* Active slide content */}
                        {index === current && (
                            <div className="absolute bottom-6 left-6 md:left-10 text-white z-20">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black rounded-full font-medium ml-10">
                                        {slide.button}
                                    </button>
                                    <p className="text-sm md:text-base font-light italic font-[Georgia,serif] tracking-wide">
                                        {slide.text}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? "bg-white" : "bg-gray-500"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;

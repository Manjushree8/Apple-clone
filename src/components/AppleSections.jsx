import React from "react";

// Import images
import img1 from "../assets/images/ios.png";
import img2 from "../assets/images/ipad.jpg";
import img3 from "../assets/images/macbookpro.jpg";
import img4 from "../assets/images/iphone.jpg";
import img5 from "../assets/images/airpods.jpg";
import img6 from "../assets/images/tradein.jpg";

const promoCards = [
  {
    id: 1,
    title: "iOS 18",
    desc: "Personalise your iPhone with 10 new Indian languages.",
    descStyle: "text-center",
    links: [
      { text: "Learn more", style: "mt-0 text-blue-500 hover:underline" }
    ],
    image: img1,
    imageStyle: "border-4 border-solid border-gray-800 shadow-lg",
    textColor: "text-black",
    overlayBg: "",
    textPosition: "mt-0 justify-center text-center",
  },
  {
    id: 2,
    title: (
      <>
        iPad <span className="text-blue-600">air</span>
      </>
    ),
    desc: "Now supercharged by the M3 chip.",
    descStyle: "text-center",
    links: [
      { text: "Learn more", style: "bg-blue-600 text-white hover:bg-blue-700" },
      { text: "Buy", style: "border border-blue-400 bg-white text-black hover:bg-blue-700 hover:text-white" }
    ],
    image: img2,
    textColor: "text-black",
    overlayBg: "",
    textPosition: "items-start justify-center text-center",
  },
  {
    id: 3,
    title: "MacBook Pro",
    desc: "A work of smart.",
    descStyle: "",
    links: [
      { text: "Learn more", style: "bg-white text-black hover:bg-gray-100" },
      { text: "Buy", style: "border border-white text-white hover:bg-white hover:text-black" }
    ],
    image: img3,
    textColor: "text-white",
    overlayBg: "",
    textPosition: "mt-5 ml-10 text-center",
  },
  {
    id: 4,
    title: "iPhone",
    desc: "Meet the iPhone 16 family.",
    descStyle: "text-3xl",
    links: [
      { text: "Learn more", style: "bg-blue-600 text-white hover:bg-blue-700" },
      { text: "Shop iPhone", style: "border border-blue-400 bg-white text-black hover:bg-blue-600 hover:text-white" }
    ],
    image: img4,
    textColor: "text-black",
    overlayBg: "",
    textPosition: "mt-0 ml-5 justify-start text-center",
  },
  {
    id: 5,
    title: "AirPods Pro",
    desc: "Immersive sound like never before.",
    descStyle: "",
    links: [
      { text: "Learn more", style: "bg-blue-600 text-white hover:bg-gray-100" },
      { text: "Buy", style: "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-none" }
    ],
    image: img5,
    textColor: "text-white",
    overlayBg: "bg-black/40",
    textPosition: "items-end justify-center text-center",
  },
  {
    id: 6,
    title: "Trade In",
    desc: "Upgrade and Save. It's that easy.",
    descStyle: "",
    links: [
      { text: "Get Your estimate", style: "bg-blue-600 text-white hover:bg-blue-700" }
    ],
    image: img6,
    textColor: "text-black",
    overlayBg: "",
    textPosition: "justify-center text-center",
  },
];

const AppleSections = () => {
  return (
    <section className="w-full bg-white px-4 py-8 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {promoCards.map((card) => (
          <div
            key={card.id}
            className="relative w-full h-[600px] flex flex-col flex-grow overflow-hidden"
          >
            <img
              src={card.image}
              alt="Apple product"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex ${card.textPosition} ${card.overlayBg} ${card.textColor} p-4`}
            >
              <div>
                <h2 className="text-4xl font-bold">{card.title}</h2>
                <p className={`text-lg mt-2 ${card.descStyle}`}>{card.desc}</p>
                <div className="flex gap-2 mt-3 flex-wrap justify-center">
                  {card.links.map((btn, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`px-4 py-2 rounded-full text-sm font-medium ${btn.style}`}
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppleSections;

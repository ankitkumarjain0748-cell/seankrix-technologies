import React from "react";
import { FaRegDotCircle } from "react-icons/fa"; // Icon for Vision
import { IoDiamondOutline } from "react-icons/io5"; // Icon for Value
import { LuFocus } from "react-icons/lu"; // Icon for Mission

// आप इन इमेज URLs को अपनी इमेज से बदल सकते हैं
const missionImg = "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-mission-img.jpg";
const visionImg = "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-vision-img.jpg";
const valueImg = "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-value-img.jpg";

// Glow Component for background effect
const Glow = ({ position, size, customStyles }) => (
  <div
    className="absolute -z-10 animate-pulse"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: "rgba(191, 247, 71, 0.1)", // Light green glow
      filter: "blur(100px)",
      borderRadius: "50%",
      ...customStyles,
    }}
  />
);


export default function OurApproach() {
  // Data for the cards, matching the image
  const cardData = [
    {
      icon: <LuFocus />,
      title: "Our Mission",
      image: missionImg,
      desc: "Delivering transformative digital solutions that elevate brands connections."
    },
    {
      icon: <FaRegDotCircle />,
      title: "Our Vision",
      image: visionImg,
      desc: "Shaping the future through innovative and impactful digital experiences."
    },
    {
      icon: <IoDiamondOutline />,
      title: "Our Value",
      image: valueImg,
      desc: "Integrity, creativity, innovation, collaboration, excellence, results."
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
     
 
      {/* Top Section: Title and Description */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">

       <div className="absolute inset-0 z-0">
              <Glow position="right" size={600} customStyles={{ top: "290px", opacity: 0.4 }} />
            </div>
        <div className="flex flex-col">
          <p className="flex items-center gap-2 text-base font-bold tracking-wider uppercase mb-4">
            <span className="text-[#BFF747] text-2xl">*</span> OUR APPROACH
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
           Crafting <span className="text-[#BFF747] font-bold">impactful</span> digital experiences
          </h1>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-300 leading-relaxed text-lg">
            We blend creativity, strategy, and technology to design digital experiences that connect, engage, and inspire. From concept to completion, we deliver tailored solutions that elevate brands and drive results.
          </p>
        </div>
      </div>

      {/* Bottom Section: Cards */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className="relative bg-[#121212] p-6 rounded-3xl border border-white/10 group cursor-pointer"
            >
              {/* Image container with shine effect */}
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                />
                {/* Shine effect element */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                 <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80 transition-all duration-700 ease-in-out group-hover:left-full transform -skew-x-12"></div>
                {/* Icon on top of the image */}
                <span className="absolute bottom-4 left-4 text-3xl text-[#BFF747]">
                  {card.icon}
                </span>
              </div>
              
              {/* Card Text Content */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
"use client"
import Image from "next/image";
import React, { useState } from "react";

const Main = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const pictures = [
    {
      src: "/exhibition.jpg",
      caption: "Opening ceremony with interactive installations showcasing sustainable design principles",
      moment: "Opening Night"
    },
    {
      src: "/greendot.JPG",
      caption: "Visitors engaging with the central green dot installation, exploring environmental themes",
      moment: "Interactive Experience"
    },
    {
      src: "/greendot3.jpg",
      caption: "Detailed view of the eco-friendly materials and sustainable design elements",
      moment: "Design Details"
    },
    {
      src: "/greendot4.jpg",
      caption: "Community response and engagement with the environmental consciousness message",
      moment: "Community Impact"
    },
  ];

  return (
    <div className="min-h-screen text-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Sticky Section */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28 h-fit self-start px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-lg">
            {/* Decorative element */}
            <div className="w-8 sm:w-10  lg:w-12 h-1 mb-6 sm:mb-8 rounded-full"></div>
            
            <h1 className="text-5xl text-center md:text-left md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 sm:mb-8 leading-none">
              GREEN DOT
            </h1>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-center md:text-left lg:text-2xl inter leading-tight text-gray-700 font-semibold">
                An immersive exhibition exploring environmental consciousness through innovative design and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Right Scrolling Section */}
        <div className="w-full lg:w-1/2 min-h-screen">
          <div className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            {pictures.map((item, index) => (
              <div 
                key={index} 
                className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 last:mb-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image number indicator */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-black rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="h-px bg-black flex-1"></div>
                </div>

                {/* Image */}
                <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl mb-4 sm:mb-6">
                  <Image 
                    src={item.src} 
                    alt={`Green Dot Exhibition - ${item.moment}`}
                    width={700} 
                    height={500} 
                    className={`w-full h-auto transition-all duration-700 ${
                      hoveredIndex === index ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Caption */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
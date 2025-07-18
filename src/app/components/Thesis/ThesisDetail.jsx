"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ThesisDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = [
    {
      id: 1,
      src: "/zila.webp",
      alt: "Virtual Reality Experience",
    },
    {
      id: 2,
      src: "/z1.webp",
      alt: "Augmented Reality",
    },
    {
      id: 3,
      src: "/z2.webp",
      alt: "Mixed Reality",
    },
    {
      id: 4,
      src: "/z3.webp",
      alt: "ZILA 86",
    },
    {
      id: 5,
      src: "/z4.webp",
      alt: "ZILA 86",
    },
    {
      id: 6,
      src: "/z5.webp",
      alt: "ZILA 86",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  const currentItem = galleryData[currentIndex];

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 overflow-hidden lg:py-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto w-full mb-12 lg:mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 tracking-tight">
            THESIS DETAILS
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The game art proposal, Zila 86, explores the struggles of
            lower-class workers through a gripping narrative set in Gurdaab
            Gaoun, where the number "86" symbolizes the lost lives of the
            village. The story centers on a corrupt landlord who manipulates the
            police and exploits the vulnerable, weaving a web of injustice.{" "}
          </p>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-7xl ">
          {/* Carousel Container */}
          <div className="relative flex items-center justify-center h-[50vh] sm:h-[60vh] lg:h-[70vh] xl:h-[75vh]">
            {galleryData.map((item, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + galleryData.length) % galleryData.length;
              const isNext = index === (currentIndex + 1) % galleryData.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              let position = "";
              let scale = "";
              let opacity = "";
              let zIndex = "";

              if (isActive) {
                position = "translate-x-0";
                scale = "scale-100";
                opacity = "opacity-100";
                zIndex = "z-30";
              } else if (isPrev) {
                position =
                  "-translate-x-[60%] sm:-translate-x-[55%] lg:-translate-x-[65%]";
                scale = "scale-75 lg:scale-80";
                opacity = "opacity-80";
                zIndex = "z-20";
              } else if (isNext) {
                position =
                  "translate-x-[60%] sm:translate-x-[55%] lg:translate-x-[65%]";
                scale = "scale-75 lg:scale-80";
                opacity = "opacity-80";
                zIndex = "z-20";
              }

              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${position} ${scale} ${opacity} ${zIndex}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      className="object-fill w-[80vw]  xl:w-[45vw] h-[50vh] sm:h-[60vh] lg:h-[70vh] xl:h-[75vh]"
                    />
                    {/* Overlay for non-active images */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                    )}
                  </div>
                </div>
              );
            })}

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 lg:left-1/6 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 group z-40"
            >
              <FaChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 lg:right-1/6 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 group z-40"
            >
              <FaChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>

          {/* Content Below Image */}
          <div className="text-center mt-8 lg:mt-12">
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6 transition-all duration-500">
              {currentItem.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto transition-all duration-500">
              {currentItem.description}
            </p> */}

            {/* Enhanced Dots Indicator */}
            <div className="flex justify-center space-x-3 lg:space-x-4">
              {galleryData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? "bg-black scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThesisDetail;

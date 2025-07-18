"use client";

import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <div className="h-auto xl:min-h-screen w-full flex flex-col lg:flex-row py-11  px-6  lg:px-11 gap-10">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 text-center lg:text-left">
      <div className="mb-32 pt-4">
          <h1 className="text-2xl font-medium text-left tracking-normal">UM.</h1>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-wide leading-tight">
          ABOUT ME
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl">UMAIMA MOHSIN</h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          I&apos;m a digital designer and Framer developer passionate about
          crafting meaningful, user-centered experiences. With a strong
          foundation in visual design and a deep understanding of interactive
          systems, I bring ideas to life through thoughtful design, smooth
          animations, and responsive layouts.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          {[FaFacebook, FaLinkedin].map((Icon, i) => (
            <a
              key={i}
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 group overflow-hidden text-black hover:text-white relative flex items-center justify-center border border-black rounded-full"
            >
              <div className="absolute inset-0 z-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-black rounded-full" />
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 z-10" />
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image
          src={"/FBMG.png"}
          alt="Umaima Mohsin"
          width={300}
          height={300}
          className="rounded-full shadow-lg object-cover"
        />
</div> */}
    </div>
  );
};

export default Hero;

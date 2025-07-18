"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FacebookIcon, Linkedin } from "lucide-react";

const Hero = () => {

    
  

  return (
    <div className="flex flex-col items-start text-6xl lg:text-9xl tracking-wide font-semibold px-6 md:px-11 py-10 text-black uppercase relative z-10">
      <div className="mb-40 pt-4">
        <h1 className="text-2xl font-medium tracking-normal">UM.</h1>
      </div>
      <h1>WORK THAT</h1>
      <h1>RESONATES</h1>
      
    {/* <div>
        <Linkedin />

    </div> */}
    </div>
  );
};

export default Hero;

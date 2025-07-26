"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-start text-6xl lg:text-9xl tracking-wide font-semibold px-6 md:px-11 py-10 text-black uppercase relative z-10">
      <div className="mb-40 pt-4">
        <Link href="/">
          <h1 className="text-2xl uppercase font-medium tracking-normal">UM.</h1>
        </Link>{" "}
      </div>
      <h1>Where Concept </h1>
      <h1>Meets Skill</h1>

    
    </div>
  );
};

export default Hero;

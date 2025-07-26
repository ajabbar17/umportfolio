import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ title1, title2 }) => {
  return (
    <div className="flex flex-col h-[60vh] xl:min-h-screen items-start justify-between text-6xl  md:text-9xl tracking-wide font-semibold px-4 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-8 md:py-10 text-black uppercase relative z-10">
      <div className="mb-8 sm:mb-12 md:mb-16 pt-9 sm:pt-3 md:pt-4">
        <Link href="/">
          <h1 className="text-2xl font-medium tracking-normal">UM.</h1>
        </Link>{" "}
      </div>
      <div className="w-full">
        <div className="w-full  text-left mt-8 sm:mt-12 md:mt-16">
          <h1 className="leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            {title1} <br />
            {title2}
          </h1>
        </div>
        
      </div>

     
    </div>
  );
};

export default Hero;

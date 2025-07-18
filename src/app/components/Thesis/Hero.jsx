import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = ({title1,title2}) => {
  return (
    <div className="flex flex-col h-[60vh] xl:min-h-screen items-start justify-between text-6xl  md:text-9xl tracking-wide font-semibold px-4 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-8 md:py-10 text-black uppercase relative z-10">
      <div className="mb-8 sm:mb-12 md:mb-16 pt-9 sm:pt-3 md:pt-4">
        <h1 className="text-xl sm:text-2xl font-medium tracking-normal">UM.</h1>
      </div>
      <div className="w-full">
        <div className="w-full  text-left mt-8 sm:mt-12 md:mt-16">
          <h1 className="leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            {title1} <br />
            {title2}
          </h1>
        </div>
        {/* <Image
          src="/beyond.png"
          width={700}
          height={300}
          alt="exhibition"
          className="w-[35vw] h-[80vh] rounded-4xl"
        /> */}
      </div>

      {/* <div>
        <Linkedin />

    </div> */}
    </div>
  );
};

export default Hero;

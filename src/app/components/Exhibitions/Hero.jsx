import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen items-start text-6xl lg:text-9xl tracking-wide font-semibold px-6 md:px-11 py-10 text-black  relative z-10">
      <div className="mb-16 pt-4">
        <h1 className="text-2xl font-medium tracking-normal">UM.</h1>
      </div>
      <div className="w-full gap-8 flex xl:flex-row flex-col items-center justify-between  ">
        <div className="w-auto xl:w-1/2 text-left"> 
          <h1>EXHIBTIONS</h1>
          <p className="text-sm md:text-lg leading-tight font-semibold text-gray-700 inter mt-4">
            My work has been featured in design exhibitions and creative
            showcases, highlighting my expertise in branding, typography, and
            digital experiences. These events have been a platform to
            collaborate with fellow artists, exchange ideas, and celebrate the
            power of intentional visual storytelling.
          </p>
        </div>
        <Image
          src="/greendot2.webp"
          width={700}
          height={300}
          alt="exhibition"
          className="w-auto h-auto xl:w-[35vw] xl:h-[80vh] rounded-4xl"
        />
      </div>

      {/* <div>
        <Linkedin />

    </div> */}
    </div>
  );
};

export default Hero;

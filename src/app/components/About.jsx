"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const spans = textRef.current.querySelectorAll("span");

    gsap.set(spans, { opacity: 0.1 }); // Set initial opacity

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
        // markers: true, // Uncomment to debug
      }
    }).to(spans, {
      opacity: 1,
      duration: 0.2,
      ease: "none",
      stagger: 0.1,
    });

  }, []);

  const text =
    "I am Umaima, a designer who passionate about creating digital experiences that stand out. With years of experience, I craft designs that resonate.";

  return (
  <section ref={sectionRef} className="h-[180vh] px-4 sm:px-6 md:px-11 text-black relative">
  <div
    ref={textRef}
    className="sticky top-10 py-10 w-full max-w-screen-xl mx-auto"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-semibold mb-6 text-center">
      ABOUT ME
    </h1>

    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium  leading-tight tracking-tighter w-full flex flex-wrap justify-center gap-2 px-2 sm:px-6 changeopacity">
      {text.split(" ").map((word, index) => (
        <span key={index} className="word inter font-medium transition-opacity">
          {word}
        </span>
      ))}
    </div>
  </div>
</section>
  );
};

export default AboutSection;

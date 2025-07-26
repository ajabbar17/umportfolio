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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
          // markers: true, // Uncomment to debug
        },
      })
      .to(spans, {
        opacity: 1,
        duration: 0.2,
        ease: "none",
        stagger: 0.1,
      });
  }, []);

  const text =
    "I am a Visual Communication Designer, educator, and PhD scholar with a passion for creating designs that speak louder than words. With a strong academic foundation in Art History and hands-on experience in the creative industry, I specialize in blending design, illustration, and motion to craft meaningful visual narratives. My work lives at the intersection of culture, communication, and creativity — whether it’s a brand identity, a thesis concept, or a digital campaign. As a freelancer and mentor, I believe in designing with purpose, always striving to tell stories that resonate and inspire. Every project I take on is a chance to challenge the ordinary and bring fresh ideas to life.";

  return (
    <section
      ref={sectionRef}
      className="h-[210vh] px-4 sm:px-6 md:px-11 text-black relative"
    >
      <div
        ref={textRef}
        className="sticky top-10 py-10 w-full max-w-screen-xl mx-auto"
      >
        <h1 className="text-3xl  lg:text-5xl tracking-wide font-semibold mb-6 text-center">
          ABOUT ME
        </h1>

        <div className="text-2xl sm:text-3xl md:text-4xl font-medium  leading-tight tracking-tighter w-full flex flex-wrap justify-center gap-2 px-2 sm:px-6 changeopacity">
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className="word inter font-medium transition-opacity"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

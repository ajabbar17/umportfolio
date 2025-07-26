"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FacebookIcon, Linkedin } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const skillsRef = useRef(null);
  const skills = [
    { title: "UI/UX DESIGN", color: "text-green-400" },
    { title: "BRANDING", color: "text-yellow-500" },
    { title: "ILLUSTRATIONS", color: "text-pink-700" },
    { title: "VIDEO EDITING", color: "text-red-600" },
    { title: "ANIMATION", color: "text-blue-800" },
    { title: "DIGITAL MARKETING", color: "text-orange-500" },
  ];

  useGSAP(() => {
    const element = skillsRef.current;
    let currentIndex = 0;

    const animateSkills = () => {
      // Fade out current skill
      gsap.to(element, {
        // opacity: 0,
        y: -120,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Change text and color
          currentIndex = (currentIndex + 1) % skills.length;
          element.textContent = skills[currentIndex].title;
          element.className = `skills ${skills[currentIndex].color}`;

          // Set initial position for new skill (from bottom)
          gsap.set(element, { y: 120 });

          // Fade in new skill from bottom
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
      });
    };

    // Set initial skill and color
    element.textContent = skills[0].title;
    element.className = `skills ${skills[0].color}`;

    // Start animation loop
    const interval = setInterval(animateSkills, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col  items-start text-5xl md:text-7xl lg:text-9xl tracking-tight font-medium px-6 md:px-11 py-10 text-black uppercase relative z-10">
      <div className="mb-40 pt-4">
        <Link href="/">
        <h1 className="text-2xl font-medium tracking-normal">UM.</h1>
        </Link>
      </div>
      <h1>creative designer</h1>
      <h1>specializing in</h1>
      <div className="overflow-hidden">
        <h1 ref={skillsRef} className="skills text-green-400">
          UI/UX DESIGN
        </h1>
      </div>
      {/* <div>
        <Linkedin />

    </div> */}
    </div>
  );
};

export default HeroSection;

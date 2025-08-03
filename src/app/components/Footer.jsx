"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FaLongArrowAltRight,
  FaLinkedin,
  FaFacebook,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  const words = [
    { title: "DISCOVER", color: "text-blue-400" },
    { title: "CREATE", color: "text-red-600" },
    { title: "INNOVATE", color: "text-yellow-500" },
  ];
  const ref = useRef(null);

  useGSAP(() => {
    const element = ref.current;
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
          currentIndex = (currentIndex + 1) % words.length;
          element.textContent = words[currentIndex].title;
          element.className = `inline-block uppercase ${words[currentIndex].color}`;

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
    element.textContent = words[0].title;
    element.className = `inline-block ${words[0].color}`;

    // Start animation loop
    const interval = setInterval(animateSkills, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#111111] text-white tracking-wide px-8 sm:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-normal overflow-hidden">
              LET'S{" "}
              <span ref={ref} className="inline-block uppecase text-blue-400">
                DISCOVER
              </span>{" "}
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-normal overflow-hidden">
              TOGETHER
            </h1>
            <div className="flex flex-col md:flex-row gap-3">
              <Link
                href="mailto:umaimamohsin14@gmail.com"
                className="text-white text-lg border border-white w-52 justify-center py-3 rounded-full font-semibold flex items-center gap-2 relative overflow-hidden group transition-colors duration-300 hover:text-black"
              >
                {/* Background fill animation */}
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>

                {/* Content */}
                <span className="relative z-10">GET IN TOUCH</span>
                <span className="text-2xl group-hover:rotate-45 transition-transform duration-300 relative z-10">
                  <FaLongArrowAltRight />
                </span>
              </Link>
              <Link
                href="https://designondemand.solutions"
                target="_blank"
                className="text-black bg-white text-lg border w-52 justify-center py-3 rounded-full font-semibold flex items-center gap-2 relative overflow-hidden group transition-colors duration-300 hover:text-white"
              >
                {/* Background fill animation */}
                <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>

                {/* Content */}
                <span className="relative z-10">THE OTHER SIDE</span>
                <span className="text-2xl group-hover:rotate-45 transition-transform duration-300 relative z-10">
                  <FaLongArrowAltRight />
                </span>
              </Link>
            </div>
          </div>

          <div></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-1">EMAIL</h3>
            <p className="text-gray-300">umaimamohsin14@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl">SOCIALS</h1>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/umaima.mohsin.156523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 group overflow-hidden text-white hover:text-black relative flex items-center justify-center border border-white rounded-full "
              >
                <div className="w-12 h-12 inset-0 z-0 transform translate-y-full absolute rounded-full group-hover:translate-y-0 transition-all bg-white"></div>
                <FaFacebook className="w-6 h-6 z-10" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/umaima-mohsin-183747150/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 group overflow-hidden text-white hover:text-black relative flex items-center justify-center border border-white rounded-full "
              >
                <div className="w-12 h-12 inset-0 z-0 transform translate-y-full absolute rounded-full group-hover:translate-y-0 transition-all bg-white"></div>
                <FaLinkedin className="w-6 h-6 z-10" />
              </Link>
              <Link
                href="https://www.behance.net/umaimamohsin0418"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 group overflow-hidden text-white hover:text-black relative flex items-center justify-center border border-white rounded-full "
              >
                <div className="w-12 h-12 inset-0 z-0 transform translate-y-full absolute rounded-full group-hover:translate-y-0 transition-all bg-white"></div>
                <FaBehance className="w-6 h-6 z-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "UI/UX Design",
    detail:
      "Crafting intuitive, user-centered digital interfaces with a strong focus on usability and accessibility. From wireframes to high-fidelity prototypes, I design products that are both beautiful and functional across all platforms.",
    technologies: ["Figma", "Adobe XD"],
    number: "01",
    color: "text-green-400",
  },
  {
    id: 2,
    title: "Branding & Illustration",
    detail:
      "Building visual identities that resonate. From logos and typography to custom illustrations and brand systems, I create cohesive and memorable designs that communicate a brand’s essence clearly and powerfully.",
    technologies: ["Adobe Illustrator", "Photoshop"],
    number: "02",
    color: "text-pink-700",
  },
  {
    id: 3,
    title: "Video Editing & Motion Design",
    detail:
      "Bringing stories to life through engaging motion graphics and cinematic edits. I produce compelling visuals for social media, marketing, and product showcases with precision and creativity.",
    technologies: ["Adobe After Effects", "Premiere Pro"],
    number: "03",
    color: "text-red-600",
  },

  {
    id: 4,
    title: "3D Modeling & Animation",
    detail:
      "Bringing stories to life through engaging motion graphics and cinematic edits. I produce compelling visuals for social media, marketing, and product showcases with precision and creativity.",
    technologies: ["Blender", "3ds Max","Unreal Engine"],
    number: "04",
    color: "text-blue-800",
  },
  {
    id: 5,
    title: "Digital Marketing & Social Media",
    detail:
      "Bringing stories to life through engaging motion graphics and cinematic edits. I produce compelling visuals for social media, marketing, and product showcases with precision and creativity.",
    technologies: ["Adobe After Effects", "Photoshop","Adobe Illustrator"],
    number: "05",
    color: "text-orange-500",
  },
];

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(0);

 useEffect(() => {
    // Set initial width and add resize listener
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" text-black">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center gap-14 justify-center py-20 px-6 md:px-11">
        <div className="flex md:flex-row flex-col gap-4 justify-between w-full border-b-2 pb-4">
          <h1 className=" text-center lg:text-left text-5xl lg:text-7xl font-semibold tracking-wide">
            SERVICES
            <br />
            OFFERED
          </h1>
          <p className="lg:text-left  text-center text-xl md:text-3xl text-gray-700 font-medium w-auto lg:w-1/3">
            Experience my comprehensive suite of creative services crafted to
            elevate your brand and captivate your audience.{" "}
          </p>
        </div>
      </div>

      {/* Sticky Cards Section */}
      <div
        className="relative flex flex-col h-auto lg:h-[3200px] w-auto md:max-w-7xl gap-2 md:gap-10 mx-auto px-4 mb-36"
        // style={{ height: "3200px" }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="w-full  box-border h-auto md:h-screen sm:min-h-[400px] rounded-3xl sticky shadow-xl bg-white border border-black/10 transition-all duration-300"
            style={{
              top:
                windowWidth >= 768
                  ? `${50 + index * 30}px`
                  : `${50 + index * 5}px`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col items-start gap-6">
              <div className="flex text-4xl md:text-5xl lg:text-7xl border-b-2 py-6 w-full justify-between">
                <h2 className=" font-semibold mb-4">{card.title}</h2>
                <p className=" font-light">{card.number}</p>
              </div>
              <div className="w-full mt-6">
                <p className="text-2xl md:text-3xl  text-center md:text-left  xl:pr-24 font-medium inter">
                  {card.detail}
                </p>
              </div>
              <div className="flex flex-col w-full justify-center">
                <h3 className="text-2xl md:text-3xl text-center md:text-left font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {card.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 md:px-4 py-2 text-sm inter font-medium bg-white text-black rounded-full border border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

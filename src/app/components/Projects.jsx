import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "FBMG",
      imageSrc: "/FBMG.png",
      tags: ["Social Media Post", "Branding"],
    },
    {
      title: "STREET COP",
      imageSrc: "/street.webp",

      tags: ["Branding", "Socal Media Post","Carousel Ads"],
    },
    {
      title: "OPHELIA",
      imageSrc: "/ophelia.webp",

      tags: [ "3D-MOCKUP"],
    },
    {
      title: "Royal Pine",
      imageSrc: "/royalpine.webp",

      tags: ["Print Design", "Brochure Design"],
    },
    {
      title: "COFFEE",
      imageSrc: "/coffee.webp",

      tags: ["Social Media Post", "Branding"],
    },
    {
      title: "DIGITAL INDIA ACADEMY",
      imageSrc: "/digital media.webp",

      tags: ["Logo Design", "Brand Design","Identity Design"],
    },
  ];

  return (
    <div className="flex flex-col w-full items-center gap-14 justify-center py-20 px-6 md:px-11  ">
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center w-full border-b-2 pb-4 ">
        <h1 className="text-5xl lg:text-7xl text-center lg:text-left font-semibold tracking-wide">
          FEATURED <br /> PROJECTS
        </h1>
        <p className="text-center lg:text-left text-xl md:text-3xl xl:pt-8 text-gray-700 font-medium w-auto lg:w-1/3">
          Explore my portfolio showcasing innovative and impactful designs
          across various industries.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
      <Link
        href={"/works"}
      className="flex relative group items-center gap-2 mt-10 px-6 py-3 hover:cursor-pointer border border-black text-black rounded-full overflow-hidden transition-colors duration-300 hover:text-white">
        {/* Background fill animation */}
        <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>

        {/* Content */}
        <span className="text-2xl inter font-semibold relative z-10">
          View All Projects
        </span>
      </Link>
    </div>
  );
};

export default Projects;

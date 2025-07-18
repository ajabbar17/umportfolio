import React from "react";
import ThesisCard from "./ThesisCard";

const FeaturedThesis = () => {
  const Thesis = [
    {
      title: "BEYOND",
      description:
        "A comprehensive exploration of the intersection between technology and human experience.",
      tags: ["UI/UX", "Web Design"],
      src: "/beyond.mp4",
      poster: "/beyond.png",
    },
    {
      title: "A LOST RITUAL",
      description:
        "An innovative project focusing on sustainable design practices.",
      tags: ["Branding", "Illustration"],
      src: "/ritual.mp4",
      poster: "/ritual.png",
    },
    {
      title: "ZILA 86",
      description:
        "The game art proposal, Zila 86, explores the struggles of lower-class workers through a gripping narrative set in Gurdaab Gaoun, where the number 86 symbolizes the lost lives of the village.",
      tags: ["Branding", "Illustration"],
      src: "/ritual.png",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center gap-8 sm:gap-10 md:gap-14 justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-11">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full border-b-2 pb-4 sm:pb-6 gap-6 lg:gap-0">
        <h1 className="text-5xl md:text-6xl text-center md:text-left lg:text-7xl font-semibold tracking-wide leading-tight">
          FEATURED <br /> THESIS
        </h1>
        <p className=" text-sm text-center md:text-left sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 lg:w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fugiat aut at unde tempore voluptas dignissimos quos natus vero ea
          dolorum, libero reprehenderit aliquid obcaecati asperiores est
          possimus consequatur. Quo!
        </p>
      </div>
      <div className="w-full px-0 sm:px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {Thesis.map((project, index) => (
            <ThesisCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              src={project.src}
              poster={project.poster}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedThesis;

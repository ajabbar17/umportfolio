import React from "react";
import ProjectCard from "../ProjectCard";

const AllProjects = () => {
  const projects = [
    {
      title: "KNOCK",
      imageSrc: "/knock.webp",
      tags: ["Logo Design", "Adobe Illustrator"],
    },
    {
      title: "DESIGN ON DEMAND",
      imageSrc: "/dod.webp",

      tags: ["Branding", "Illustration"],
    },
    {
      title: "OUTBOX",
      imageSrc: "/outbox.webp",

      tags: ["Video Editing", "Animation"],
    },
    {
      title: "DOTA TIRE 2",
      imageSrc: "/dota.webp",

      tags: ["Video Editing", "Animation"],
    },
    {
      title: "ANGEL & HEROS",
      imageSrc: "/angel.webp",

      tags: ["Video Editing", "Animation"],
    },
    {
      title: "TODERITA SERVICES",
      imageSrc: "/toderita.webp",

      tags: ["Video Editing", "Animation"],
    },
    {
      title: "IAC",
      imageSrc: "/iac.webp",

      tags: ["Video Editing", "Animation"],
    },
    {
      title: "IIT BAY AREA",
      imageSrc: "/iit.webp",

      tags: ["Video Editing", "Animation"],
    },
    {
      title: "ILLUSTRATION",
      imageSrc: "/il1.webp",

      tags: ["Illustration"],
    },
     {
      title: "ILLUSTRATION",
      imageSrc: "/il2.webp",

      tags: ["Illustration"],
    },
  ];

  return (
    <div className="flex flex-col w-full items-center gap-14 justify-center py-20 px-6 md:px-11  ">

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
  
    </div>
  );
};

export default AllProjects;

import React from "react";
import ProjectCard from "../ProjectCard";

const AllProjects = () => {
  const projects = [
    {
      title: "KNOCK",
      imageSrc: "/knock.webp",
      tags: ["Google Ads", "Branding"],
    },
    {
      title: "DESIGN ON DEMAND",
      imageSrc: "/dod.webp",

      tags: ["Social Media Campaign", "Illustration"],
    },
    {
      title: "OUTBOX",
      imageSrc: "/outbox.webp",

      tags: ["Social Media Post", "Illustration","Branding"],
    },
    {
      title: "DOTA TIRE 2",
      imageSrc: "/dota.webp",

      tags: ["Logo Design"],
    },
    {
      title: "ANGEL & HEROS",
      imageSrc: "/angel.webp",

      tags: ["Logo Design"],
    },
    {
      title: "TODERITA SERVICES",
      imageSrc: "/toderita.webp",

      tags: ["Logo Design","Brand Design","Identity Design"],
    },
    {
      title: "INSTITUTE OF ART & CULTURE",
      imageSrc: "/iac.webp",

      tags: ["Invitation Design", "Social Media Branding","Adobe Illustrator"],
    },
    {
      title: "IIT BAY AREA",
      imageSrc: "/iit.webp",

      tags: ["Conference Banner Ad", "Social Media Ad"],
    },
    {
      title: "DAY DAWN NIGHT",
      imageSrc: "/il1.webp",

      tags: ["Digital Illustration","World Designing","Concept Art"],
    },
     {
      title: "THE FOREST",
      imageSrc: "/il2.webp",

      tags: ["Digital Illustration","World Designing","Concept Art"],
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

import React from "react";
import ThesisCard from "./ThesisCard";

const FeaturedThesis = () => {
  const Thesis = [
    {
      title: "BEYOND",
      description:
        "BEYOND is a powerful 3D animated short film by Rehan Moazzam Khan, which I had the opportunity to supervise during its development. Created as a heartfelt tribute to his mother, who passed away during the COVID-19 pandemic, the film explores themes of grief, memory, and emotional resilience. Using Blender for character modeling and animation, and Unreal Engine for real-time rendering and immersive world-building, BEYOND showcases a seamless blend of technical skill and storytelling. Guiding Rehan through this emotionally charged and visually ambitious project was an incredibly meaningful and creatively enriching experience.",
      tags: ["UI/UX", "Web Design"],
      src: "/beyond.mp4",
      poster: "/beyond.png",
    },
    {
      title: "A LOST RITUAL",
      description:
        "Lost Ritual is a 2D animated short film by Zarish Ahmed that beautifully weaves together forgotten folk tales, historical symbols, and the rich cultural heritage of Punjab. I supervised this project as it evolved into a visually captivating and narratively layered piece that aimed to revive traditional storytelling through a modern lens. Created using Toon Boom Harmony, the film skillfully blends expressive character animation with atmospheric settings rooted in Punjabi folklore. The project stands out for its thoughtful research, emotional depth, and its effort to preserve and reinterpret regional identity through animation.",
      tags: ["Branding", "Illustration"],
      src: "/ritual.mp4",
      poster: "/ritual.png",
    },
    {
      title: "ZILA 86",
      description:
        "Zila 86 (ضلع ۸۶) is a game art thesis project by Muhammad Moosa Ibrahim that I had the pleasure of supervising. Set in a fictional yet hauntingly familiar Pakistani town, the project explores dystopian themes through a strong visual narrative rooted in local culture, urban textures, and socio-political undertones. The project featured detailed world-building and character creation using Unreal Engine, MetaHuman, Blender, ZBrush, and Substance Painter, showcasing a high level of technical finesse. Zila 86 is a striking example of how game art can become a vehicle for storytelling, cultural commentary, and immersive design.",
      tags: ["Branding", "Illustration"],
      src: "/zila.webp",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center gap-8 sm:gap-10 md:gap-14 justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-11">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full border-b-2 pb-4 sm:pb-6 gap-6 lg:gap-0">
        <h1 className="text-5xl md:text-6xl text-center md:text-left lg:text-7xl font-semibold tracking-wide leading-tight">
          FEATURED <br /> THESIS
        </h1>
        <p className=" text-sm text-center md:text-left sm:text-base md:text-lg font-medium text-gray-700 lg:w-1/3">
          I&apos;ve had the privilege of supervising diverse and thought-provoking
          thesis projects that explore the many dimensions of Visual
          Communication Design. From interactive installations and animated
          narratives to socio-cultural campaigns and heritage-based design
          interventions, my students have consistently pushed creative
          boundaries. As a mentor, I focus on helping them blend concept with
          craft — guiding their journey from raw ideas to fully realized,
          research-backed visual outcomes.
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

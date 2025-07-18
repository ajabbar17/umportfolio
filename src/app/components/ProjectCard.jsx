'use client';

import Image from 'next/image';

const ProjectCard = ({ imageSrc, title, tags }) => {
  return (
    <div className=" rounded-lg w-auto xl:max-w-3xl mx-auto">
      {/* Image Container */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="xl:w-[45vw] w-auto h-auto lg:h-[78vh] hover:scale-105 transition-transform object-fit rounded-xl"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-3xl md:text-5xl font-medium  text-black tracking-normal">
        {title}
      </h3>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1 text-sm font-semibold inter  text-black rounded-full border border-black"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

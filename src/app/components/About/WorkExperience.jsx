import React from 'react';

const WorkExperience = () => {
  const experiences = [
  {
    duration: "2024 Sept - Till Present",
    company: "Beaconhouse National University (BNU)",
    position: "Assistant Professor – Visual Communication Design Department",
    description: "Delivering undergraduate and graduate courses focused on visual storytelling, typography, and communication design. Actively contributing to curriculum development and student mentorship."
  },
  {
    duration: "2023 March - 2024 Sept",
    company: "Institute for Art and Culture (IAC)",
    position: "Assistant Professor – Animation Design",
    description: "Taught courses on animation principles, motion graphics, and storytelling techniques. Played a key role in developing students' creative and technical animation skills."
  },
  {
    duration: "2017 February - Till Present",
    company: "Freelance",
    position: "Graphic Designer",
    description: "Providing creative design solutions for clients across various industries. Specializing in branding, digital illustrations, and visual identity systems."
  },
  {
    duration: "2017 February - Till Present",
    company: "Riphah International University, LHR",
    position: "Visiting Lecturer – RSCI",
    description: "Engaging students in visual arts and design theory through workshops and lectures. Encouraging creative thinking and interdisciplinary learning approaches."
  },
 
];


  return (
    <div className="min-h-screen text-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Header */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 pt-12 lg:pt-20 pb-12 lg:pb-28 h-fit lg:self-start px-6 sm:px-8 lg:px-12">
          <div className="max-w-md">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide mb-6 lg:mb-8 leading-none">
              WORK<br />
              EXPERIENCE
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
              Discover my design journey. Each role has contributed to my passion for innovative design.
            </p>
          </div>
        </div>

        {/* Right Section - Timeline */}
        <div className="w-full lg:w-1/2 lg:min-h-screen">
          <div className="py-8 lg:py-20 px-6 sm:px-8 lg:px-12">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 lg:mb-20 last:mb-0">
                {/* Timeline dot */}
                <div className="flex items-center mb-6 lg:mb-8">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-black rounded-full mr-4 lg:mr-6"></div>
                  <p className="text-xs sm:text-sm tracking-wider">
                    {exp.duration}
                  </p>
                </div>

                {/* Company and Position */}
                <div className="mb-4 lg:mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 tracking-normal leading-tight">
                    {exp.company}
                  </h2>
                  <p className="text-lg sm:text-xl font-medium">
                    {exp.position}
                  </p>
                </div>

                {/* Description */}
                <p className=" font-semibold inter leading-tight text-gray-700 text-base sm:text-lg mb-8 lg:mb-12">
                  {exp.description}
                </p>

                {/* Separator line */}
                {index < experiences.length - 1 && (
                  <div className="w-full h-px bg-black mt-8 lg:mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
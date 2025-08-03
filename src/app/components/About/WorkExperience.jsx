import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      duration: "2024 Sept - Till Present",
      company: "Beaconhouse National University (BNU)",
      position: "Assistant Professor – Visual Communication Design Department",
      description:
        "Delivering undergraduate and graduate courses focused on visual storytelling, typography, and communication design. Actively contributing to curriculum development and student mentorship.",
    },
    {
      duration: "2023 March - 2024 Sept",
      company: "Institute for Art and Culture (IAC)",
      position: "Assistant Professor – Animation Design",
      description:
        "Taught courses on animation principles, motion graphics, and storytelling techniques. Played a key role in developing students' creative and technical animation skills.",
    },
    {
      duration: "2017 February - Till Present",
      company: "Freelance",
      position: "Graphic Designer",
      description:
        "Providing creative design solutions for clients across various industries. Specializing in branding, digital illustrations, and visual identity systems.",
    },
    {
      duration: "2022 October- 2023 January",
      company: "Riphah International University, LHR",
      position: "Visiting Lecturer – RSCI",
      description:
        "Engaging students in visual arts and design theory through workshops and lectures. Encouraging creative thinking and interdisciplinary learning approaches.",
    },
     {
      duration: "2023 July - Till Present",
      company: "University of Management & Technology, LHR",
      position: "Editorial Board Member – UMT Journal of Design & Textile",
      description:
        "Reviewing and curating academic articles related to design and textile research. Ensuring the publication maintains high standards of scholarship and relevance in the field.",
    },
  ];

const certifications = [
  {
    name: "Umaima Mohsin",
    completionDate: "08/28/2020",
    courseTitle: "Communication Strategies for a Virtual Age",
    institution: "University of Toronto",
    platform: "Coursera",
    instructor: "Ivan Wanis Ruiz",
    instructorAffiliation: "UToronto Continuing Studies",
    verificationLink: "coursera.org/verify/D9eMGRE2JXNV",
    certificateType: "Online non-credit course",
  },
  {
    name: "Umaima Mohsin",
    completionDate: "08/25/2020",
    courseTitle: "Fundamentals of Graphic Design",
    institution: "California Institute of the Arts (CalArts)",
    platform: "Coursera",
    instructor: "Michael Worthington",
    instructorAffiliation: "Faculty, Program in Graphic Design, School of Art",
    verificationLink: "coursera.org/verify/MA6N73FJXGT3",
    certificateType: "Online non-credit course",
  }
];


  return (
    <div className="min-h-screen text-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Header */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 pt-12 lg:pt-20 pb-12 lg:pb-28 h-fit lg:self-start px-6 sm:px-8 lg:px-12">
          <div className="max-w-md">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide mb-6 lg:mb-8 leading-none">
              WORK
              <br />
              EXPERIENCE
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
              Discover my design journey. Each role has contributed to my
              passion for innovative design.
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

      {/* Certifications Section */}
      <div className="border-t border-gray-200 ">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Header */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 pt-12 lg:pt-20 pb-12 lg:pb-28 h-fit lg:self-start px-6 sm:px-8 lg:px-12">
            <div className="max-w-md">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide mb-6 lg:mb-8 leading-none">
                CERTIFICATIONS
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Professional development through continuous learning and skill
                enhancement programs.
              </p>
            </div>
          </div>

          {/* Right Section - Certifications */}
          <div className="w-full lg:w-1/2 lg:min-h-screen">
            <div className="py-8 lg:py-20 px-6 sm:px-8 lg:px-12">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-12 lg:mb-20 last:mb-0">
                  {/* Certificate badge */}
                  <div className="flex items-center mb-6 lg:mb-8">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-black rounded-full mr-4 lg:mr-6"></div>
                    <p className="text-xs sm:text-sm tracking-wider text-black">
                      COMPLETED: {cert.completionDate}
                    </p>
                  </div>

                  {/* Course Title and Institution */}
                  <div className="mb-4 lg:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 tracking-normal leading-tight">
                      {cert.courseTitle}
                    </h2>
                    <p className="text-lg sm:text-xl font-medium">
                      {cert.institution}
                    </p>
                    <p className="text-base sm:text-lg font-medium ">
                      Platform: {cert.platform}
                    </p>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-2 tracking-wide mb-4 lg:mb-6">
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-medium ">Instructor:</span>{" "}
                      {cert.instructor}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-medium">Affiliation:</span>{" "}
                      {cert.instructorAffiliation}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-medium">Type:</span>{" "}
                      {cert.certificateType}
                    </p>
                  </div>

                  {/* Verification Link */}
                  <div className="mb-8 lg:mb-12">
                    <a
                      href={`https://${cert.verificationLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium text-sm transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Verify Certificate
                    </a>
                  </div>

                  {/* Separator line */}
                  {index < certifications.length - 1 && (
                    <div className="w-full h-px bg-gray-300 mt-8 lg:mt-12"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

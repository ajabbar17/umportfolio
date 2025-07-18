"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ThesisCard = ({ title, description, tags, src, poster }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const isVideo = src?.match(/\.(mp4|webm|ogg)$/i);

  const handleButtonClick = () => {
    if (isVideo) {
      setIsModalOpen(true);
    } else {
      // Navigate to project details page using the title as slug
      //const projectSlug = title.toLowerCase().replace(/\s+/g, "-");
      router.push(`/thesis-supervision/zila-86`);
    

    }
  };

  return (
    <>
      {/* Main Card */}
      <div
        className="w-full box-border h-screen sm:h-auto sm:min-h-[600px] rounded-3xl sticky bg-gradient-to-br from-white via-gray-50 to-white text-black border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        {/* Animated gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        ></div>

        <div className="relative p-6 sm:p-8  lg:p-12 h-full flex flex-col xl:flex-row gap-2 lg:gap-12 items-center justify-center">
          {/* Left Column - Details */}
          <div className="flex-1 space-y-6  sm:space-y-8 w-full">
            {/* Title with animated underline */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight text-black">
                  {title}
                </h2>
                <div
                  className={`absolute -bottom-2 left-0 h-1 bg-black rounded-full transition-all duration-700 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-medium">
                {description}
              </p>
            </div>

            {/* Enhanced Tags */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {tags.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-50 hover:to-purple-50 text-gray-800 hover:text-gray-900 rounded-full text-xs sm:text-sm font-semibold border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 relative">
              <button
                onClick={handleButtonClick}
                className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-white  text-black hover:text-white border rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
              >
                {/* Bottom fill overlay */}
                <div className="absolute inset-0 bg-black transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out rounded-full"></div>

                <span className="relative z-10">
                  {isVideo ? "Watch Demo" : "View Project"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Media */}
          <div className="flex-1 w-full max-w-full h-full justify-center lg:max-w-xl">
            <div className="relative group/media">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover/media:opacity-100 transition-all duration-700"></div>

              {/* Media container */}
              <div
                className="relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl border border-black/10 group-hover/media:border-black/20 transition-all duration-500"
                onClick={handleButtonClick}
              >
                {isVideo ? (
                  <div className="relative">
                    <video
                      src={src}
                      muted
                      poster={poster}
                      playsInline
                      className="w-full object-fill h-[40vh]  xl:h-[70vh] group-hover/media:scale-105 transition-transform duration-700"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/media:bg-black/10 transition-all duration-300">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover/media:scale-110 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={src}
                      alt={title}
                      className="w-full object-fill h-[40vh] xl:h-[70vh] group-hover/media:scale-105 transition-transform duration-700"
                    />

                    {/* View overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-900">
                          Click to view full project
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover/media:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl animate-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 group/close"
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>

            {/* Modal content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {isVideo ? (
                <video
                  src={src}
                  autoPlay
                  controls
                  className="w-full h-auto ov rounded-xl shadow-2xl"
                />
              ) : (
                <img
                  src={src}
                  alt={title}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThesisCard;

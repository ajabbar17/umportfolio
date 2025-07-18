import React from "react";

const ProcessCard = ({ number, title, description }) => {
  return (
    <div className="rounded-xl flex flex-col p-6 sm:p-8 md:p-10 lg:p-14 justify-between h-[300px] sm:h-[350px] md:h-[400px] lg:h-[430px] bg-white w-[280px] sm:w-[320px] md:w-[450px] lg:w-[550px] flex-shrink-0 shadow-lg">
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
        {number}
      </h1>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 lg:text-2xl inter font-medium leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;

import React from "react";
import Hero from "../components/Thesis/Hero";
import FeaturedThesis from "../components/Thesis/FeaturedThesis";

export const metadata = {
  title: "THESIS SUPERVISION",
  description:
    "Explore thesis projects I have supervised as an educator, showcasing student research and creative works in visual communication design and animation.",
};

const page = () => {
  return (
    <div>
      <Hero title1="THESIS" title2="SUPERVISION" />
      <FeaturedThesis />
    </div>
  );
};

export default page;

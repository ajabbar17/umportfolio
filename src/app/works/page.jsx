import React from "react";
import Hero from "../components/Works/Hero";
import AllProjects from "../components/Works/AllProjects";

export const metadata = {
  title: "WORKS",
  description:
    "Explore my portfolio of creative works including visual communication designs, branding projects, digital illustrations, and innovative design solutions.",
};

const page = () => {
  return (
    <div>
      <Hero />
      <AllProjects />
    </div>
  );
};

export default page;

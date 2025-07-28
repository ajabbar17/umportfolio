import React from "react";
import Hero from "../components/Exhibitions/Hero";
import Main from "../components/Exhibitions/Main";

export const metadata = {
  title: "EXHIBITIONS",
  description:
    "Discover my participation in art exhibitions, gallery shows, and creative installations showcasing innovative visual communication design works.",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Main />
    </div>
  );
};

export default page;

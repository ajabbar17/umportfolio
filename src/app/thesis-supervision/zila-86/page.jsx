import Hero from "@/app/components/Thesis/Hero";
import ThesisDetail from "@/app/components/Thesis/ThesisDetail";
import React from "react";

export const metadata = {
  title: "ZILA 86 - GURDAAB",
  description:
    "Explore the Zila 86 game art proposal - a gripping narrative exploring the struggles of lower-class workers set in Gurdaab Gaoun village.",
};

const page = () => {
  return (
    <div>
      <Hero title1="ZILA 86" title2="GURDAAB" />
      <ThesisDetail />
    </div>
  );
};

export default page;

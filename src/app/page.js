import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Green from "./components/Green";
import AboutSection from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className="bg-[#f7f2f2]">
      <Navbar />
      <HeroSection />
      {/* <Green /> */}
      <AboutSection />
      <Projects />
      <Services />
    </div>
  );
}

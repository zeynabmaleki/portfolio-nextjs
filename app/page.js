import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen bg-zinc-800">
      <Navbar/>
      <div className="container mx-auto py-10 px-12 mt-24">
        <HeroSection />
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  );
}

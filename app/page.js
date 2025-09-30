import Image from "next/image";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen bg-zinc-800 xl:px-80 lg:px-45 md:px-45 sm:px-45 px-0">
      <Navbar />
      <div className="container mx-auto py-10  mt-35">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

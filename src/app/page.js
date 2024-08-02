import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <HeroSection />
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}

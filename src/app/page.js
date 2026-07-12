"use client";
import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";
import HeroSection from "@/components/Hero/HeroSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ProjectSection from "@/components/Project/ProjectSection";
import HighlightsSection from "@/components/Highlights/HighlightsSection";
import CertificationsSection from "@/components/Certifications/CertificationsSection";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="about-section">
        <AboutSection />
      </div>
      <SkillsSection />
      <ProjectSection />
      <div id="experience-section">
        <WorkExperience />
      </div>
      <HighlightsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

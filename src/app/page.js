"use client";
import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";
import HeroSection from "@/components/Hero/HeroSection";
import ProjectSection from "@/components/Project/ProjectSection";
import TestimonialsSection from "@/components/Testimonial/TestimonialSection";
import WorkExperience from "@/components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <WorkExperience />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

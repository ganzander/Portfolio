"use client";
import { ProjectCard } from "@/components/Project/ProjectCard";
import projects from "@/lib/projects";

export default function ProjectSection() {
  return (
    <section className="py-16 pb-40 px-4 bg-white">
      <div className="max-w-[90%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium">
            Featured Projects
          </h2>
        </div>

        {/* Property Grid */}
        <div className="flex justify-center items-center w-full">
          <div className="grid md:grid-cols-2 gap-y-16 gap-x-20 w-full md:rotate-350">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                project={project}
                image={project.image}
                role={project.role}
                title={project.title}
                duration={project.duration}
                techStack={project.techStack}
                subtitle={project.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

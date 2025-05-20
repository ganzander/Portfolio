"use client";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

export function ProjectCard({
  id,
  project,
  image,
  role,
  title,
  className,
  subtitle,
  techStack,
  duration,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectClicked) => {
    setSelectedProject(projectClicked);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full">
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl border flex flex-col transition-all duration-500 ease-in-out",
          className
        )}
      >
        {/* Top section that appears on hover */}
        <div className="absolute top-0 left-0 w-full h-0 group-hover:h-1/2 bg-gray-50 z-20 transition-all duration-500 ease-in-out overflow-hidden">
          <div className="h-full px-6 py-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
            <div className="flex justify-between items-center text-sm text-black">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{id}</span>
                <div className="flex items-center gap-2">
                  {techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border rounded-full bg-white flex items-center gap-1 text-xs"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-semibold text-base">{duration}</span>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-snug text-black">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>

            <div
              className="flex justify-end mt-4"
              onClick={() => handleProjectClick(project)}
            >
              <Button
                variant="outline"
                className="rounded-xl hover-cursor border-black text-black bg-white px-4 py-2 flex items-center gap-2 shadow-sm"
              >
                View Details
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image & info wrapper */}
        <div className="relative w-full bg-[#F7F6F1]">
          <div className="relative aspect-[7/4] -rotate-360 w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:translate-y-1/2 z-10 rounded-t-3xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Top left Role badge */}
          <div className="group-hover:hidden absolute top-4 left-4 bg-transparent border border-white text-white px-4 py-1.5 rounded-full flex items-center z-30">
            <span className="text-sm">{role}</span>
          </div>

          {/* Top right button */}
          <div className="group-hover:hidden absolute top-4 right-4 z-30">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full hover-cursor bg-white text-black"
              onClick={() => handleProjectClick(project)}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Bottom title section */}
          <div className="group-hover:hidden absolute bottom-4 left-4 text-white text-2xl font-normal z-30">
            {id}
            <h3 className="text-xl font-normal mb-1">{title}</h3>
          </div>
        </div>
      </div>

      <ProjectDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        projectData={selectedProject}
      />
    </div>
  );
}

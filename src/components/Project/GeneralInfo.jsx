import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function GeneralInfo({ projectData }) {
  return (
    <div className="bg-white h-full w-full flex justify-center items-center rounded-t-2xl p-5">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="md:w-1/2 relative hidden md:flex md:h-auto">
          <Image
            src={projectData.image}
            alt={projectData.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 px-3 md:p-6 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-1 sm:mb-3">
            <span className="font-medium text-xl">{projectData.id}</span>

            <p className="font-medium">{projectData.duration}</p>
          </div>

          <h3 className="text-2xl font-bold leading-tight mb-1">
            {projectData.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {projectData.subtitle}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {projectData.features.map((feature, index) => (
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg" key={index}>
                <p className="font-medium text-sm sm:text-base">{feature}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-sm text-muted-foreground">Impact</p>
            <p className="text-md md:text-xl font-bold">{projectData.impact}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-0 md:pt-2">
            <Button className="bg-black hover:bg-gray-800 text-white">
              Live
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Github size={16} />
              Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

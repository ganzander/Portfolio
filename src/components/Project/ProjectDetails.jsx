import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralInfo from "./GeneralInfo";
import ProjectAbout from "./ProjectAbout";
import TechStack from "./TechStack";
import ProjectPhotos from "./ProjectPhotos";

export function ProjectDetails({ projectData }) {
  return (
    <div className="h-full overflow-hidden hover-cursor">
      <Tabs defaultValue="general-info" className="w-full h-full hover-cursor">
        <TabsContent value="general-info">
          <GeneralInfo projectData={projectData} />
        </TabsContent>
        <TabsContent value="about">
          <ProjectAbout projectData={projectData} />
        </TabsContent>
        <TabsContent value="techStack">
          <TechStack projectData={projectData} />
        </TabsContent>
        <TabsContent value="photos">
          <ProjectPhotos projectData={projectData} />
        </TabsContent>

        <TabsList className="h-[10%] grid grid-cols-2 sm:grid-cols-4 rounded-b-2xl w-full relative bg-gradient-to-b from-black/90 to-black/70 overflow-hidden">
          <TabsTrigger
            value="general-info"
            className="hover-cursor-white text-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-b-gray-300 rounded-none"
          >
            01. General info
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="hover-cursor-white text-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-b-gray-300 rounded-none"
          >
            02. About
          </TabsTrigger>
          <TabsTrigger
            value="techStack"
            className="hover-cursor-white text-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-b-gray-300 rounded-none"
          >
            03. Tech Stack
          </TabsTrigger>
          <TabsTrigger
            value="photos"
            className="hover-cursor-white text-gray-300 data-[state=active]:border-b-2 data-[state=active]:border-b-gray-300 rounded-none"
          >
            04. Photos
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

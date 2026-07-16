import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralInfo from "./GeneralInfo";
import ProjectAbout from "./ProjectAbout";
import TechStack from "./TechStack";

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

        <TabsList className="h-[10%] grid grid-cols-3 rounded-b-2xl w-full relative bg-gradient-to-b from-black/95 to-black/85 border-t border-white/10 overflow-hidden">
          <TabsTrigger
            value="general-info"
            className="hover-cursor-white text-gray-300 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-[var(--accent)] rounded-none"
          >
            01. General info
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="hover-cursor-white text-gray-300 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-[var(--accent)] rounded-none"
          >
            02. About
          </TabsTrigger>
          <TabsTrigger
            value="techStack"
            className="hover-cursor-white text-gray-300 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-[var(--accent)] rounded-none"
          >
            03. Tech Stack
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

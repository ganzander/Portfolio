// import React from "react";
// import Card from "./Card";
// import PROJECTS from "@/data/projects";

// export default function Projects() {
//   return (
//     <div className="container mx-auto pt-10" id="projects">
//       <h2 className="text-center text-4xl font-semibold uppercase">Projects</h2>
//       <div className="flex flex-col items-center justify-center py-8">
//         {PROJECTS.map((project, index) => (
//           <div key={index}>
//             <Card
//               image={project.image}
//               title={project.title}
//               subtitle={project.subtitle}
//               link={project.link}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export default function Projects() {
  const tabs = [
    {
      title: "Savor Haven",
      value: "Savor Haven",
      content: (
        <div className="cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
          <p>Savor Haven</p>
          <div className="flex justify-center items-center mt-10">
            <Image
              src="/Savor-Haven.png"
              alt="Savor-Haven"
              width="1000"
              height="1000"
              className="object-cover rounded-lg w-full mx-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Whisper Gram",
      value: "Whisper Gram",
      content: (
        <div className="cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
          <p>Whisper Gram</p>
          <div className="flex justify-center items-center mt-10">
            <Image
              src="/Whisper Gram.png"
              alt="Whisper Gram"
              width="1000"
              height="1000"
              className="object-cover rounded-lg w-full mx-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Captionizer",
      value: "Captionizer",
      content: (
        <div className="cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
          <p>Captionizer</p>
          <div className="flex justify-center items-center mt-10">
            <Image
              src="/Captionizer.png"
              alt="Captionizer"
              width="1000"
              height="1000"
              className="object-cover rounded-lg w-full mx-auto"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="projects"
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40"
    >
      <Tabs tabs={tabs} />
    </div>
  );
}

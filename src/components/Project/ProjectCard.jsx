// "use client";
// import Image from "next/image";
// import { MapPin, ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import { ProjectDialog } from "./ProjectDialog";

// export function ProjectCard({
//   id,
//   project,
//   image,
//   role,
//   title,
//   className,
//   subtitle,
//   techStack,
//   duration,
// }) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleProjectClick = (projectClicked) => {
//     setSelectedProject(projectClicked);
//     setIsDialogOpen(true);
//   };

//   return (
//     <div className="w-full">
//       <div
//         className={cn(
//           "group relative overflow-hidden rounded-3xl border flex flex-col transition-all duration-500 ease-in-out",
//           className
//         )}
//       >
//         {/* Top section that appears on hover */}
//         <div className="absolute top-0 left-0 w-full h-0 group-hover:h-1/2 bg-gray-50 z-20 transition-all duration-500 ease-in-out overflow-hidden">
//           <div className="h-full px-6 py-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
//             <div className="flex justify-between items-center text-sm text-black">
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold">{id}</span>
//                 <div className="flex items-center gap-2">
//                   {techStack.slice(0, 4).map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 border rounded-full bg-white flex items-center gap-1 text-xs"
//                     >
//                       {tech.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <span className="font-semibold text-base">{duration}</span>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold leading-snug text-black">
//                 {title}
//               </h3>
//               <p className="text-sm text-gray-600">{subtitle}</p>
//             </div>

//             <div
//               className="flex justify-end mt-4"
//               onClick={() => handleProjectClick(project)}
//             >
//               <Button
//                 variant="outline"
//                 className="rounded-xl hover-cursor border-black text-black bg-white px-4 py-2 flex items-center gap-2 shadow-sm"
//               >
//                 View Details
//                 <ArrowUpRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Image & info wrapper */}
//         <div className="relative w-full bg-[#F7F6F1]">
//           <div className="relative aspect-[7/4] w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:translate-y-1/2 z-10 rounded-t-3xl">
//             <Image
//               src={image}
//               alt={title}
//               fill
//               className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//             />
//           </div>

//           {/* Top left Role badge */}
//           <div className="group-hover:hidden absolute top-4 left-4 bg-transparent border border-white text-white px-4 py-1.5 rounded-full flex items-center z-30">
//             <span className="text-sm">{role}</span>
//           </div>

//           {/* Top right button */}
//           <div className="group-hover:hidden absolute top-4 right-4 z-30">
//             <Button
//               size="icon"
//               variant="outline"
//               className="rounded-full hover-cursor bg-white text-black"
//               onClick={() => handleProjectClick(project)}
//             >
//               <ArrowUpRight className="h-4 w-4" />
//             </Button>
//           </div>

//           {/* Bottom title section */}
//           <div className="group-hover:hidden absolute bottom-4 left-4 text-white text-2xl font-normal z-30">
//             {id}
//             <h3 className="text-xl font-normal mb-1">{title}</h3>
//           </div>
//         </div>
//       </div>

//       <ProjectDialog
//         isOpen={isDialogOpen}
//         onOpenChange={setIsDialogOpen}
//         projectData={selectedProject}
//       />
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { ProjectDialog } from "./ProjectDialog";
import { motion, useInView } from "framer-motion";

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
  direction = "up",
  // Set when a parent (e.g. the scroll deck) drives the card's motion itself —
  // skips the built-in in-view entrance so the card is never hidden.
  noEntrance = false,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionVariants = {
    left: { opacity: 0, x: -50, y: 0 },
    right: { opacity: 0, x: 50, y: 0 },
    down: { opacity: 0, x: 0, y: 50 },
    up: { opacity: 0, x: 0, y: -50 },
  };

  const visible = { opacity: 1, x: 0, y: 0 };

  const handleProjectClick = (projectClicked) => {
    setSelectedProject(projectClicked);
    setIsDialogOpen(true);
  };

  return (
    <motion.div
      ref={ref}
      initial={
        noEntrance ? false : directionVariants[direction] || directionVariants["up"]
      }
      animate={noEntrance || isInView ? visible : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] transition-all duration-500 ease-in-out hover:border-[rgb(var(--accent-rgb)/0.4)] hover:shadow-2xl hover:shadow-[0_25px_50px_-12px_rgb(var(--accent-rgb)/0.12)] dark:border-white/10 dark:bg-white/[0.03]",
          className
        )}
      >
        {/* Hover top section */}
        <div className="glass-strong absolute left-0 top-0 z-20 h-0 w-full overflow-hidden transition-all duration-500 ease-in-out group-hover:h-1/2">
          <div className="pointer-events-none flex h-full translate-y-4 flex-col justify-between px-6 py-4 opacity-0 transition-all duration-500 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center justify-between text-sm text-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-accent">{id}</span>
                <div className="flex items-center gap-2">
                  {techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs dark:border-white/15 dark:bg-white/5"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-base font-semibold text-foreground/70">
                {duration}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="text-sm text-foreground/60">{subtitle}</p>
            </div>

            <div
              className="mt-4 flex justify-end"
              onClick={() => handleProjectClick(project)}
            >
              <Button
                variant="outline"
                className="hover-cursor flex items-center gap-2 rounded-xl border-[rgb(var(--accent-rgb)/0.5)] bg-[rgb(var(--accent-rgb)/0.1)] px-4 py-2 text-[var(--accent-light)] shadow-sm hover:bg-[rgb(var(--accent-rgb)/0.2)]"
              >
                View Details
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative w-full bg-neutral-200 dark:bg-[#0d0d10]">
          <div className="relative aspect-[7/4] w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:translate-y-1/2 z-10 rounded-t-3xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Role badge */}
          <div className="group-hover:hidden absolute top-4 left-4 bg-transparent border border-white text-white px-4 py-1.5 rounded-full flex items-center z-30">
            <span className="text-sm">{role}</span>
          </div>

          {/* Top-right button */}
          <div className="group-hover:hidden absolute top-4 right-4 z-30">
            <Button
              size="icon"
              variant="outline"
              className="hover-cursor rounded-full border-white/20 bg-black/40 text-white backdrop-blur hover:bg-[var(--accent)] hover:text-white"
              onClick={() => handleProjectClick(project)}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Bottom text */}
          <div className="group-hover:hidden absolute bottom-4 left-4 text-white text-2xl font-normal z-30">
            {id}
            <h3 className="text-xl font-normal mb-1">{title}</h3>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <ProjectDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        projectData={selectedProject}
      />
    </motion.div>
  );
}

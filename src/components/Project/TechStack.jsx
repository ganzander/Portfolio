import { useState } from "react";

export default function TechStack({ projectData }) {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (tech) => {
    setHoveredTech(tech);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const renderTechList = (techArray) =>
    techArray.map((tech, index) => (
      <div
        key={index}
        className="flex cursor-pointer items-center gap-2 border-b border-white/5 px-2 py-2 transition-colors hover:bg-white/[0.04] sm:px-4"
        onMouseEnter={() => handleMouseEnter(tech)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] p-1 sm:p-2">
          <img src={tech?.svg} alt={`${tech.name} icon`} className="h-6 w-6" />
        </div>
        <span className="text-sm text-neutral-200 sm:text-md">{tech.name}</span>
      </div>
    ));

  const techStack = projectData.techStack || [];
  const mid = Math.ceil(techStack.length / 2);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#0b0b0f] via-[#0d0d12] to-[#0a0a0e] text-white">
      <div className="grid w-full grid-cols-2 gap-3 px-2 sm:gap-12 sm:px-5 md:gap-18 lg:grid-cols-3 lg:gap-12">
        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 md:p-5 lg:p-5">
          {renderTechList(techStack.slice(0, mid))}
        </div>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 md:p-5 lg:p-5">
          {renderTechList(techStack.slice(mid))}
        </div>

        <div className="hidden flex-col items-center justify-center space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-2 transition-all duration-300 sm:p-3 md:p-5 lg:flex lg:p-5">
          {hoveredTech ? (
            <>
              <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-4 shadow-md">
                <img
                  src={hoveredTech.svg}
                  alt={`${hoveredTech.name} icon`}
                  className="h-16 w-16"
                />
              </div>
              <p className="text-base font-semibold text-white">
                {hoveredTech.name}
              </p>
              <p className="px-2 text-center text-sm text-neutral-400">
                {hoveredTech.description || "No description available."}
              </p>
            </>
          ) : (
            <p className="px-2 text-center text-sm text-neutral-500">
              Hover on any tech to get its information
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
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
        className="flex items-center gap-2 px-2 sm:px-4 py-2 border-b cursor-pointer"
        onMouseEnter={() => handleMouseEnter(tech)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center bg-gray-100 rounded-lg border p-1 sm:p-2">
          <img src={tech?.svg} alt="tech icon" className="h-6 w-6" />
        </div>
        <span className="text-sm sm:text-md">{tech.name}</span>
      </div>
    ));

  return (
    <div className="bg-white h-full w-full flex justify-center items-center rounded-t-2xl overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-3 sm:gap-12 md:gap-18 lg:gap-12 px-2 sm:px-5">
        <div className="space-y-3 bg-gray-50 p-2 sm:p-3 md:p-5 lg:p-5 rounded-2xl">
          {renderTechList(projectData.techStack.slice(0, 7))}
        </div>

        <div className="space-y-3 bg-gray-50 p-2 sm:p-3 md:p-5 lg:p-5 rounded-2xl">
          {renderTechList(projectData.techStack.slice(7, 14))}
        </div>

        <div className="space-y-4 bg-gray-50 p-2 sm:p-3 md:p-5 lg:p-5 rounded-2xl hidden lg:flex flex-col items-center justify-center transition-all duration-300">
          {hoveredTech ? (
            <>
              <div className="bg-white border p-4 rounded-xl shadow-md flex items-center justify-center">
                <img
                  src={hoveredTech.svg}
                  alt={`${hoveredTech.name} icon`}
                  className="h-16 w-16"
                />
              </div>
              <p className="text-center text-sm text-gray-700 px-2">
                {hoveredTech.description || "No description available."}
              </p>
            </>
          ) : (
            <p className="text-center text-sm text-gray-700 px-2">
              Hover on any tech to get its information
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

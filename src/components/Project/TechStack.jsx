import { Check } from "lucide-react";
import Image from "next/image";

export default function TechStack({ projectData }) {
  return (
    <div className="bg-white h-full w-full flex justify-center items-center rounded-t-2xl overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-3 sm:gap-12 md:gap-18 lg:gap-12 px-2 sm:px-5">
        <div className="space-y-3 bg-gray-50 p-2 sm:p-3 md:p-5 lg:p-5 rounded-2xl">
          {projectData.techStack.slice(0, 7).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-2 sm:px-4 py-2 border-b"
            >
              <div className="flex items-center justify-center bg-gray-100 rounded-lg border p-2 sm:p-3">
                {tech.icon}
              </div>
              <span className="text-sm sm:text-md">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 bg-gray-50 p-2 sm:p-3 md:p-5 lg:p-5 rounded-2xl">
          {projectData.techStack.slice(7, 14).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-2 sm:px-4 py-2 border-b"
            >
              <div className="flex items-center justify-center bg-gray-100 rounded-lg border p-2 sm:p-3">
                {tech.icon}
              </div>
              <span className="text-sm sm:text-md">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-6 bg-gray-50 p-2 sm:p-3 md:p-5 lg:p-5 rounded-2xl hidden lg:flex">
          <div className="w-full flex justify-center rounded-2xl overflow-hidden ">
            <Image
              src={projectData.image}
              alt="Villa pool view"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* {amenities.slice(16).map((amenity) => (
            <div
              key={amenity.name}
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                <Check size={14} className="text-gray-700" />
              </div>
              <span className="text-sm">{amenity.name}</span>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

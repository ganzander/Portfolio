import Image from "next/image";
import Link from "next/link";

export default function ProjectAbout({ projectData }) {
  return (
    <div className="bg-white h-full w-full flex justify-center items-center rounded-t-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-[80%]">
        <div className="md:w-1/2 p-6 space-y-6 flex flex-col  justify-between">
          <div className=" text-sm text-muted-foreground border-b pb-2 sm:pb-4">
            <p className="text-xs">Visit: </p>
            <Link
              href={projectData.liveDemo}
              className="font-medium hover-cursor py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectData.title}
            </Link>
          </div>

          <div className="mb-5">
            <h2 className="text-2xl font-semibold leading-tight mb-2">
              {projectData.title}
            </h2>
            <h2 className="text-lg font-semibold leading-tight mb-5">
              {projectData.subtitle}
            </h2>
            <div
              className="space-y-4 text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: projectData.description }}
            />
          </div>
        </div>
        <div className="md:w-1/2 relative h-[300px] md:h-auto hidden sm:flex">
          <Image
            src={projectData.image}
            alt="Modern waterfront villa with pool"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

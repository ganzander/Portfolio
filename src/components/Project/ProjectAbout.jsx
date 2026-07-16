import Image from "next/image";
import Link from "next/link";

export default function ProjectAbout({ projectData }) {
  const hasLive =
    typeof projectData.liveDemo === "string" &&
    projectData.liveDemo.startsWith("http");

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#0b0b0f] via-[#0d0d12] to-[#0a0a0e] text-white">
      <div className="flex h-[80%] w-full flex-col md:flex-row">
        <div className="flex flex-col justify-between space-y-6 p-6 md:w-1/2">
          <div className="border-b border-white/10 pb-2 text-sm text-neutral-400 sm:pb-4">
            {hasLive ? (
              <>
                <p className="text-xs text-neutral-500">Visit: </p>
                <Link
                  href={projectData.liveDemo}
                  className="hover-cursor py-4 font-medium text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projectData.title}
                </Link>
              </>
            ) : (
              <>
                <p className="text-xs text-neutral-500">Role</p>
                <p className="py-2 font-medium text-neutral-200">
                  {projectData.role}
                  {projectData.associated ? ` · ${projectData.associated}` : ""}
                </p>
              </>
            )}
          </div>

          <div className="mb-5">
            <h2 className="mb-2 text-2xl font-semibold leading-tight text-white">
              {projectData.title}
            </h2>
            <h2 className="mb-5 text-lg font-semibold leading-tight text-neutral-300">
              {projectData.subtitle}
            </h2>
            <div
              className="space-y-4 text-sm leading-relaxed text-neutral-400 [&_p]:mb-3"
              dangerouslySetInnerHTML={{ __html: projectData.description }}
            />
          </div>
        </div>
        <div className="relative hidden h-[300px] overflow-hidden md:flex md:h-auto md:w-1/2">
          <Image
            src={projectData.image}
            alt={projectData.title}
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  );
}

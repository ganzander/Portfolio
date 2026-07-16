import { Button } from "@/components/ui/button";
import { Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function GeneralInfo({ projectData }) {
  const hasLive =
    typeof projectData.liveDemo === "string" &&
    projectData.liveDemo.startsWith("http");
  const hasRepo =
    typeof projectData.repo === "string" && projectData.repo.startsWith("http");

  return (
    <div className="flex h-full w-full items-center justify-center rounded-t-2xl bg-gradient-to-br from-[#0b0b0f] via-[#0d0d12] to-[#0a0a0e] p-5 text-white">
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="relative hidden overflow-hidden rounded-xl md:flex md:h-auto md:w-1/2">
          <Image
            src={projectData.image}
            alt={projectData.title}
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
        <div className="space-y-5 px-3 md:w-1/2 md:p-6">
          <div className="mb-1 flex items-center gap-4 text-sm text-neutral-400 sm:mb-2">
            <span className="text-xl font-medium text-accent">
              {projectData.id}
            </span>
            <p className="font-medium">{projectData.duration}</p>
          </div>

          <div>
            <h3 className="mb-1 text-2xl font-bold leading-tight text-white">
              {projectData.title}
            </h3>
            {projectData.associated && (
              <p className="text-xs font-medium uppercase tracking-wide text-accent/90">
                {projectData.role} · {projectData.associated}
              </p>
            )}
          </div>

          <p className="text-sm text-neutral-400">{projectData.subtitle}</p>

          <div className="grid grid-cols-2 gap-3">
            {projectData.features.map((feature, index) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.03] p-3 sm:p-4"
                key={index}
              >
                <p className="text-sm font-medium text-neutral-200 sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-1">
            <p className="text-sm text-neutral-500">Impact</p>
            <p className="text-md font-bold text-white md:text-xl">
              {projectData.impact}
            </p>
          </div>

          {(hasLive || hasRepo) && (
            <div className="flex flex-col gap-3 pt-0 sm:flex-row md:pt-2">
              {hasLive && (
                <Button
                  asChild
                  className="bg-accent text-white hover:bg-[var(--accent-strong)]"
                >
                  <a
                    href={projectData.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>
                </Button>
              )}
              {hasRepo && (
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <a href={projectData.repo} target="_blank" rel="noreferrer">
                    <Github size={16} />
                    Github
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

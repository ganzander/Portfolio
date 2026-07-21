"use client";

import {
  BookOpen,
  Network,
  Plug,
  Server,
  Terminal,
  Building2,
} from "lucide-react";
import { aiFocusAreas } from "@/lib/site";

const ICON_MAP = {
  BookOpen,
  Network,
  Plug,
  Server,
  Terminal,
  Building2,
};

export default function AIFocusSection() {
  return (
    <section
      id="ai-focus-section"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        data-parallax="0.18"
        className="accent-orb pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full blur-[120px]"
      />
      <div
        data-parallax="-0.14"
        className="accent-orb-soft pointer-events-none absolute -right-40 bottom-10 h-[24rem] w-[24rem] rounded-full blur-[120px]"
      />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div data-reveal className="mb-10 flex flex-col gap-4 md:mb-14">
          <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-8xl">
            AI <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/65 md:text-lg">
            The core AI capabilities I design and ship to production — from
            retrieval pipelines and multi-agent systems to enterprise
            integration and observability.
          </p>
        </div>

        {/* Focus area cards */}
        <div
          data-reveal="stagger"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {aiFocusAreas.map((area) => {
            const Icon = ICON_MAP[area.icon];
            return (
              <div
                key={area.title}
                className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.5)] hover:shadow-2xl hover:shadow-[0_30px_60px_-15px_rgb(var(--accent-rgb)/0.25)]"
              >
                <span className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30 transition-all duration-500 group-hover:inset-x-2 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.12)] transition-transform duration-500 group-hover:scale-110">
                    {Icon && <Icon className="h-5 w-5 text-accent" />}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent/80">
                      {area.blurb}
                    </p>
                  </div>
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-foreground/65">
                  {area.description}
                </p>

                <div className="relative mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {area.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-foreground/65 transition-colors group-hover:border-[rgb(var(--accent-rgb)/0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

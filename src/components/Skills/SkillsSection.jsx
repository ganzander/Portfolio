"use client";

import { useState } from "react";
import SkillGlobe from "@/components/three/SkillGlobe";
import { skillCategories, globeSkills } from "@/lib/skills";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SkillsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="skills-section" className="relative overflow-hidden py-16 md:py-24">
      {/* ambient accent orb */}
      <div
        data-parallax="0.15"
        className="accent-orb-soft pointer-events-none absolute -right-40 top-10 h-[26rem] w-[26rem] rounded-full blur-[120px]"
      />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div data-reveal className="mb-10 flex flex-col gap-3 md:mb-14">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            / My arsenal
          </span>
          <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-8xl">
            Skills &amp; <span className="text-gradient">Tools</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* 3D skill globe — the centerpiece */}
          <div
            data-reveal
            className="relative order-1 h-[380px] sm:h-[460px] lg:order-2 lg:h-[560px]"
          >
            <div className="accent-orb pointer-events-none absolute inset-14 rounded-full opacity-50 blur-3xl" />
            <SkillGlobe skills={globeSkills} onSelect={setSelected} />
            <p className="pointer-events-none absolute inset-x-0 -bottom-1 text-center text-xs text-foreground/35">
              Hover a logo to see its name — click it to explore
            </p>
          </div>

          {/* Compact category rows */}
          <div
            data-reveal="stagger"
            className="order-2 flex flex-col gap-4 lg:order-1"
          >
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:border-[rgb(var(--accent-rgb)/0.45)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.12)] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-baseline gap-x-3">
                        <h3 className="text-base font-semibold text-foreground">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-foreground/45">
                          {cat.blurb}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <button
                            key={skill.name}
                            type="button"
                            onClick={() =>
                              setSelected({ ...skill, category: cat.title })
                            }
                            className="hover-cursor flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/65 transition-colors hover:border-[rgb(var(--accent-rgb)/0.5)] hover:text-foreground"
                          >
                            <img
                              src={skill.icon}
                              alt=""
                              aria-hidden="true"
                              className="h-3.5 w-3.5"
                            />
                            {skill.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skill detail dialog (opened from globe logos or category chips) */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="glass-strong h-auto min-h-0 max-h-[80vh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/50 sm:w-full">
          {selected && (
            <div className="flex min-h-[180px] flex-col justify-center">
              <DialogHeader>
                <div className="mb-1 flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.4)] bg-[rgb(var(--accent-rgb)/0.12)]">
                    <img src={selected.icon} alt="" className="h-7 w-7" />
                  </span>
                  <div className="text-left">
                    <DialogTitle className="text-xl">
                      {selected.name}
                    </DialogTitle>
                    <span className="text-xs uppercase tracking-widest text-accent">
                      {selected.category}
                    </span>
                  </div>
                </div>
                <DialogDescription className="pt-2 text-left text-sm leading-relaxed text-foreground/70">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

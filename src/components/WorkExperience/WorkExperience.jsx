"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import experiences from "@/lib/experiences";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function CompanyLogo({ exp, size = "md", active = false }) {
  const initials = exp.companyName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const dims = size === "lg" ? "h-12 w-12 rounded-2xl" : "h-9 w-9 rounded-xl";
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden border transition-all duration-300 ${dims} ${
        active
          ? "glow-orange border-[rgb(var(--accent-rgb)/0.6)] bg-[rgb(var(--accent-rgb)/0.15)]"
          : "border-white/15 bg-white/5"
      }`}
    >
      {exp.logo ? (
        <img
          src={exp.logo}
          alt={exp.companyName}
          className="max-h-full max-w-full object-cover"
        />
      ) : (
        <span
          className={`text-xs font-bold ${
            active ? "text-accent" : "text-foreground/60"
          } ${size === "lg" ? "text-sm" : ""}`}
        >
          {initials}
        </span>
      )}
    </span>
  );
}

/**
 * Work Experience — Scroll-driven pinned timeline.
 *  - Pins the container during scroll to drive the timeline fill and active step.
 *  - Displays short, clear descriptions on the main layout with zero card overflow or scrollbars.
 *  - Provides a "Read More" trigger that pops open a detailed Dialog modal to read full resume points.
 */
export default function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];
  const total = experiences.length;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const fillRef = useRef(null);
  const lastIndexRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 60}%`,
          pin: pinRef.current,
          scrub: true,
          anticipatePin: 1,
          refreshPriority: 2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // continuous timeline fill
            if (fillRef.current) {
              fillRef.current.style.height = `${self.progress * 100}%`;
            }
            // stepped active role
            const idx = Math.min(total - 1, Math.floor(self.progress * total));
            if (idx !== lastIndexRef.current) {
              lastIndexRef.current = idx;
              setActiveIndex(idx);
            }
          },
        });
        return () => st.kill();
      },
    );
    return () => mm.revert();
  }, [total]);

  return (
    <section ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="relative mx-auto flex min-h-screen w-[92%] max-w-7xl flex-col justify-center gap-10 py-24"
      >
        {/* header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between gap-4">
            <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-8xl">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <span className="hidden shrink-0 text-lg font-medium text-foreground/50 md:block">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── Desktop: pinned master-detail ── */}
        <div className="hidden items-center gap-10 md:grid md:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* timeline */}
          <div className="relative py-2">
            {/* rail + scroll-driven fill */}
            <div className="absolute bottom-4 left-[17px] top-4 w-px bg-white/10" />
            <div
              ref={fillRef}
              className="absolute left-[17px] top-4 w-px bg-[var(--accent)]"
              style={{
                height: 0,
                boxShadow: "0 0 12px rgb(var(--accent-rgb) / 0.8)",
              }}
            />
            <ul className="flex flex-col gap-8">
              {experiences.map((exp, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={exp.id} className="relative flex items-start gap-4">
                    <span className="relative z-10">
                      <CompanyLogo exp={exp} active={isActive} />
                    </span>
                    <div>
                      <p
                        className={`font-semibold transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-foreground/45"
                        }`}
                      >
                        {exp.companyName}
                      </p>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-foreground/35"
                        }`}
                      >
                        {exp.name}
                      </p>
                      <p className="text-xs text-foreground/35">
                        {exp.experience}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* detail card (Compact height, guaranteed no scrollbar or text clipping) */}
          <div className="relative min-h-[440px] lg:min-h-[380px] xl:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass absolute inset-0 rounded-3xl p-6 lg:p-10 flex flex-col justify-center overflow-hidden"
              >
                <div className="grid h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 items-stretch">
                  {/* Left Column: Role Details & Skills */}
                  <div className="flex flex-col justify-center gap-4">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 text-xs font-medium text-accent">
                      <Calendar className="h-3.5 w-3.5" />
                      {active.experience}
                    </span>

                    <div className="flex items-center gap-4">
                      <CompanyLogo exp={active} size="lg" active />
                      <div>
                        <h3 className="zentry text-2xl font-medium leading-tight lg:text-3.5xl">
                          {active.name}
                        </h3>
                        <p className="mt-1 text-md font-medium text-accent">
                          {active.companyName}
                        </p>
                      </div>
                    </div>

                    <div className="my-2 border-t border-white/10" />

                    <div className="flex flex-wrap gap-1.5">
                      {active.focusAreas.slice(0, 7).map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[10px] text-foreground/70"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Short Achievements & Read More Link */}
                  <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 lg:pl-8">
                    {active.description.includes("\n") ? (
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70 text-xs leading-relaxed md:text-sm">
                        {active.description.split("\n").map((line, idx) => (
                          <li key={idx} className="marker:text-accent/60">
                            {line.trim().replace(/^•\s*/, "").replace(/^-\s*/, "")}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {active.description}
                      </p>
                    )}

                    <button
                      onClick={() => {
                        setSelectedExperience(active);
                        setIsDialogOpen(true);
                      }}
                      className="mt-4 w-fit hover-cursor flex items-center gap-1 text-xs font-semibold text-accent hover:text-[var(--accent-light)] hover:underline"
                    >
                      Read More &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile / reduced-motion: plain timeline list ── */}
        <div data-reveal="stagger" className="flex flex-col gap-5 md:hidden">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass relative rounded-2xl border-l-2 border-l-[rgb(var(--accent-rgb)/0.5)] p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.1)] px-2.5 py-0.5 text-[11px] font-medium text-accent">
                  <Calendar className="h-3 w-3" />
                  {exp.experience}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CompanyLogo exp={exp} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {exp.companyName}
                  </p>
                </div>
              </div>
              {exp.description.includes("\n") ? (
                <ul className="list-disc pl-5 space-y-1 text-xs leading-relaxed text-foreground/60">
                  {exp.description.split("\n").map((line, idx) => (
                    <li key={idx}>{line.trim().replace(/^•\s*/, "").replace(/^-\s*/, "")}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-foreground/60">
                  {exp.description}
                </p>
              )}
              
              <button
                onClick={() => {
                  setSelectedExperience(exp);
                  setIsDialogOpen(true);
                }}
                className="w-fit hover-cursor flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
              >
                Read More &rarr;
              </button>

              <div className="flex flex-wrap gap-1.5">
                {exp.focusAreas.slice(0, 5).map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-foreground/65"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Details Dialog Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTitle className="hidden" />
        <DialogContent className="max-w-2xl p-6 md:p-8 bg-gradient-to-br from-[#0b0b0f] via-[#0d0d12] to-[#0a0a0e] text-white border-white/10 rounded-2xl max-h-[90vh] overflow-y-auto hover-cursor">
          {selectedExperience && (
            <div className="flex flex-col gap-5 hover-cursor">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <CompanyLogo exp={selectedExperience} size="lg" active />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-foreground">
                      {selectedExperience.name}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-accent">
                      {selectedExperience.companyName}
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.08)] px-3 py-1 text-xs font-medium text-accent">
                  <Calendar className="h-3.5 w-3.5" />
                  {selectedExperience.experience}
                </span>
              </div>

              <div className="border-t border-white/10 w-full" />

              {/* Full Description list (Adapts height dynamically) */}
              <div className="w-full">
                <ul className="list-disc pl-5 space-y-3 text-foreground/75 text-sm leading-relaxed">
                  {selectedExperience.fullDescription.split("\n").map((line, idx) => (
                    <li key={idx} className="marker:text-accent/60">
                      {line.trim().replace(/^•\s*/, "").replace(/^-\s*/, "")}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 w-full" />

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {selectedExperience.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-foreground/70"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

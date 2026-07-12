"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import experiences from "@/lib/experiences";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
 * Work Experience — scroll-pinned timeline master-detail.
 *  - Left: career timeline; the accent line fills with scroll progress and
 *    each role's node lights up as it becomes active.
 *  - Right: glass detail card (role, company, dates, impact, focus areas)
 *    that crossfades between roles.
 *  - Mobile / reduced-motion: a plain revealed timeline list, no pin.
 */
export default function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];
  const total = experiences.length;

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
          refreshPriority: 2, // document order among the pinned sections
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // continuous timeline fill…
            if (fillRef.current) {
              fillRef.current.style.height = `${self.progress * 100}%`;
            }
            // …and stepped active role
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
            {/* rail + scroll-driven fill (centered under the logo chips) */}
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

          {/* detail card */}
          <div className="relative min-h-[480px] lg:min-h-[430px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass absolute inset-0 flex flex-col justify-center overflow-y-auto rounded-3xl p-6 lg:p-12"
              >
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 text-xs font-medium text-accent">
                  <Calendar className="h-3.5 w-3.5" />
                  {active.experience}
                </span>

                <div className="flex items-center gap-4">
                  <CompanyLogo exp={active} size="lg" active />
                  <div>
                    <h3 className="zentry text-3xl font-medium leading-tight lg:text-5xl">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-accent">
                      {active.companyName}
                    </p>
                  </div>
                </div>

                <div className="my-5 border-t border-white/10" />

                <p className="leading-relaxed text-foreground/70">
                  {active.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-foreground/70"
                    >
                      {area}
                    </span>
                  ))}
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
              className="glass relative rounded-2xl border-l-2 border-l-[rgb(var(--accent-rgb)/0.5)] p-5"
            >
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.1)] px-2.5 py-0.5 text-[11px] font-medium text-accent">
                <Calendar className="h-3 w-3" />
                {exp.experience}
              </span>
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
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {exp.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.focusAreas.map((area) => (
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
    </section>
  );
}

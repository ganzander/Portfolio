"use client";
import { ProjectCard } from "@/components/Project/ProjectCard";
import projects from "@/lib/projects";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function ProjectSection() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const cardRefs = useRef([]);
  const lastIndexRef = useRef(0);
  const total = projects.length;

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      // Start: first card in place, rest pushed below viewport and invisible.
      // On mobile with aspect-square, cards are taller so we need a larger
      // offset to fully hide them — they animate from invisible → visible.
      const isMobile = window.innerWidth < 768;
      const startY = isMobile ? 200 : 140;
      const scrollPercent = isMobile ? total * 50 : total * 80;

      cards.forEach((card, i) => {
        gsap.set(card, {
          yPercent: i === 0 ? 0 : startY,
          scale: 1,
          opacity: i === 0 ? 1 : 0,
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollPercent}%`,
          pin: pinRef.current,
          scrub: true,
          anticipatePin: 1,
          refreshPriority: 3,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const time = self.progress * (0.7 + (total - 1));
            const idx = Math.min(
              total - 1,
              Math.max(0, Math.round(time - 0.35)),
            );
            if (idx !== lastIndexRef.current) {
              lastIndexRef.current = idx;
              setActive(idx);
            }
          },
        },
      });

      tl.to({}, { duration: 0.35 });

      for (let i = 1; i < cards.length; i++) {
        // Incoming card slides up FROM INVISIBLE below the viewport, then
        // becomes fully visible as it docks over the previous one.
        tl.fromTo(
          cards[i],
          { yPercent: startY, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" },
          `step-${i}`,
        )
          // …while the card underneath recedes for depth.
          .to(
            cards[i - 1],
            { scale: 0.93, opacity: 0.45, duration: 1 },
            `step-${i}`,
          );
      }

      tl.to({}, { duration: 0.35 });

      ScrollTrigger.sort();
      ScrollTrigger.refresh();

      const refresh = () => ScrollTrigger.refresh();
      const t = setTimeout(refresh, 600);
      window.addEventListener("load", refresh);
      if (document.fonts?.ready) document.fonts.ready.then(refresh);

      return () => {
        clearTimeout(t);
        window.removeEventListener("load", refresh);
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });
    return () => mm.revert();
  }, [total, reduced]);

  return (
    <section ref={sectionRef} className="relative" id="project-section">
      <div
        ref={pinRef}
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 md:mb-10">
            <div className="flex items-end justify-between gap-4">
              <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-7xl lg:text-8xl">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <span className="shrink-0 text-base font-medium text-foreground/50 md:text-lg">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {!reduced ? (
            <>
              {/* Card deck — every card mounted, stacked; scroll slides the
                  next one up OVER the current one. On mobile we use a taller
                  (square-ish) ratio so the deck doesn't take the whole viewport. */}
              <div
                className="relative mx-auto w-full max-w-3xl aspect-square sm:aspect-[5/4] md:aspect-[7/4]"
              >
                {projects.map((project, i) => (
                  <div
                    key={project.id}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="absolute inset-x-0 top-0 will-change-transform"
                    style={{ zIndex: i + 1 }}
                  >
                    <ProjectCard
                      id={project.id}
                      project={project}
                      image={project.image}
                      role={project.role}
                      title={project.title}
                      duration={project.duration}
                      techStack={project.techStack}
                      subtitle={project.subtitle}
                      direction={project.direction}
                      noEntrance
                    />
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-sm text-foreground/40">
                Keep scrolling to explore each project
              </p>
            </>
          ) : (
            /* Reduced-motion: simple stacked list */
            <div className="grid gap-10 sm:gap-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  project={project}
                  image={project.image}
                  role={project.role}
                  title={project.title}
                  duration={project.duration}
                  techStack={project.techStack}
                  subtitle={project.subtitle}
                  direction={project.direction}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
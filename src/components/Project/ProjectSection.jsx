"use client";
import { ProjectCard } from "@/components/Project/ProjectCard";
import projects from "@/lib/projects";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function useIsLargeScreen() {
  // Start false on BOTH server and client so SSR html matches hydration
  // (reading window.innerWidth during render causes a hydration mismatch
  // that regenerates the tree and breaks GSAP's cached measurements).
  const [isLarge, setIsLarge] = useState(false);
  useEffect(() => {
    const onResize = () => setIsLarge(window.innerWidth >= 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isLarge;
}

export default function ProjectSection() {
  const [active, setActive] = useState(0);
  const isLarge = useIsLargeScreen();

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const cardRefs = useRef([]);
  const lastIndexRef = useRef(0);
  const total = projects.length;

  // Desktop-only: pin the section; each card slides up and stacks OVER the
  // previous one as you scroll (deck effect), driven by a scrubbed timeline.
  // Re-runs when `isLarge` flips so refs exist once the deck branch renders.
  useEffect(() => {
    if (!isLarge) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const cards = cardRefs.current.filter(Boolean);
        if (!cards.length) return;

        // Start: first card in place, the rest waiting below the viewport.
        cards.forEach((card, i) => {
          gsap.set(card, { yPercent: i === 0 ? 0 : 140, scale: 1, opacity: 1 });
        });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${total * 80}%`,
            pin: pinRef.current,
            scrub: true,
            anticipatePin: 1,
            // Document-order refresh priority: this trigger is created later
            // than the other pins (it waits for isLarge), so without an
            // explicit priority the other sections compute their starts
            // without our pin spacer and end up overlapping.
            refreshPriority: 3,
            // Re-capture tween values whenever ScrollTrigger refreshes, so
            // late layout (CSS, fonts, images) can't leave stale pixel
            // conversions cached in the yPercent tweens.
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Map progress to the card that is front-most: each incoming
              // card lands at timeline time 0.35 + i (holds at both ends).
              const time = self.progress * (0.7 + (total - 1));
              const idx = Math.min(
                total - 1,
                Math.max(0, Math.round(time - 0.35))
              );
              if (idx !== lastIndexRef.current) {
                lastIndexRef.current = idx;
                setActive(idx);
              }
            },
          },
        });

        // Small hold on the first card before the deck starts moving.
        tl.to({}, { duration: 0.35 });

        for (let i = 1; i < cards.length; i++) {
          // Incoming card rides up over the stack…
          tl.fromTo(
            cards[i],
            { yPercent: 140 },
            { yPercent: 0, duration: 1 },
            `step-${i}`
          )
            // …while the card underneath recedes for depth.
            .to(
              cards[i - 1],
              { scale: 0.93, opacity: 0.45, duration: 1 },
              `step-${i}`
            );
        }

        // Hold on the last card before the pin releases.
        tl.to({}, { duration: 0.35 });

        // This trigger was created after the other sections' pins — re-sort
        // into document order and refresh so every pin's start accounts for
        // our pin spacer.
        ScrollTrigger.sort();
        ScrollTrigger.refresh();

        // Re-measure once the page has fully settled (CSS/fonts/images) —
        // with invalidateOnRefresh this re-captures every tween's values.
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
      }
    );
    return () => mm.revert();
  }, [total, isLarge]);

  return (
    <section ref={sectionRef} className="relative" id="project-section">
      <div
        ref={pinRef}
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex flex-col gap-3">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              / Selected work
            </span>
            <div className="flex items-end justify-between gap-4">
              <h2 className="zentry text-3xl font-medium md:text-8xl">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <span className="hidden shrink-0 text-lg font-medium text-foreground/50 lg:block">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {isLarge ? (
            <>
              {/* Card deck — every card mounted, stacked; scroll slides the
                  next one up OVER the current one. */}
              <div className="relative mx-auto min-h-[460px] w-full max-w-3xl">
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

              {/* progress dots */}
              <div className="mt-10 flex items-center justify-center gap-3">
                {projects.map((p, i) => (
                  <span
                    key={p.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "bg-accent w-10" : "w-4 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-foreground/40">
                Keep scrolling to explore each project
              </p>
            </>
          ) : (
            /* Mobile / reduced-motion: simple stacked list */
            <div className="grid gap-12">
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

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats, principles } from "@/lib/site";

/**
 * Recruiter-facing highlights: headline numbers that count up as they
 * scroll into view, plus three how-I-work value props. Replaces the old
 * placeholder client-testimonials section with verifiable content.
 */
export default function HighlightsSection() {
  const sectionRef = useRef(null);
  const numRefs = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      numRefs.current.filter(Boolean).forEach((el, i) => {
        const end = stats[i].value;
        if (prefersReduced) {
          el.textContent = `${end}${stats[i].suffix}`;
          return;
        }
        const counter = { v: 0 };
        gsap.to(counter, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.v)}${stats[i].suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        data-parallax="-0.12"
        className="accent-orb-soft pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full blur-[120px]"
      />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div data-reveal className="mb-12 flex flex-col gap-3">
          <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-8xl">
            Proof, not <span className="text-gradient">promises</span>
          </h2>
        </div>

        {/* count-up stats */}
        <div
          data-reveal="stagger"
          className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-3xl p-6 text-center transition-colors duration-500 hover:border-[rgb(var(--accent-rgb)/0.45)]"
            >
              <span
                ref={(el) => (numRefs.current[i] = el)}
                className="text-gradient block text-4xl font-bold md:text-6xl"
              >
                0{s.suffix}
              </span>
              <p className="mt-2 text-sm text-foreground/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* how I work */}
        <div data-reveal="stagger" className="grid gap-4 md:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="glass group rounded-3xl p-6 transition-all duration-500 hover:border-[rgb(var(--accent-rgb)/0.45)]"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

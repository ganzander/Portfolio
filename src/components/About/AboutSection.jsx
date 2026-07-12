"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PARAGRAPH =
  "Hey, I'm Ganesh — a creative technologist obsessed with building immersive digital experiences. From 3D interfaces to AI-driven tools, I love pushing boundaries where design meets code, crafting products that make a real difference in people's lives.";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const wordsRef = useRef(null);
  const headingRef = useRef(null);
  const ghostRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const words = wordsRef.current.querySelectorAll("span");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
          refreshPriority: 4, // document order among the pinned sections
          invalidateOnRefresh: true,
        },
      });

      // NOTE: the ghost word is NOT animated horizontally — GSAP transforms
      // would override its CSS -translate-x-1/2 centering and shift it right.
      tl.from(headingRef.current, {
        scale: 0.7,
        autoAlpha: 0,
        y: 60,
        ease: "power2.out",
      })
        .fromTo(
          words,
          { autoAlpha: 0.12, y: 14 },
          { autoAlpha: 1, y: 0, stagger: 0.5, ease: "none" },
          0.15
        )
        .from(
          ctaRef.current,
          { autoAlpha: 0, y: 30, ease: "power2.out" },
          ">-0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* giant ghost word for depth */}
        <span
          ref={ghostRef}
          aria-hidden="true"
          className="zentry pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[26vw] font-medium leading-none text-black/[0.04] dark:text-white/[0.035]"
        >
          ABOUT
        </span>

        <div className="relative z-10 mx-auto flex w-[90%] max-w-4xl flex-col items-center text-center">
          <span className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            / Who I am
          </span>

          <h2
            ref={headingRef}
            className="zentry mb-8 text-4xl font-medium leading-none md:text-8xl"
          >
            Design meets <span className="text-gradient">code</span>
          </h2>

          <p
            ref={wordsRef}
            className="mb-10 flex flex-wrap justify-center gap-x-2 gap-y-1 text-xl font-semibold leading-relaxed text-foreground/85 md:text-3xl"
          >
            {PARAGRAPH.split(" ").map((w, i) => (
              <span key={i} className="inline-block">
                {w}
              </span>
            ))}
          </p>

          <div ref={ctaRef}>
            <Button
              onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover-cursor btn-accent group relative overflow-hidden rounded-full px-6 py-2"
            >
              Ask Me Anything
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

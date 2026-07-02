"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global scrollytelling helpers driven by data-attributes so any element can
 * opt in without importing GSAP:
 *   data-parallax="0.3"   → moves at 30% of scroll (negative = opposite way)
 *   data-reveal           → fades/slides up once when it enters the viewport
 *   data-reveal="stagger" → staggers its direct children in
 * Honours prefers-reduced-motion.
 */
export default function ScrollFX() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Reveals
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        if (el.dataset.reveal === "stagger") {
          gsap.from(el.children, {
            autoAlpha: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: "top 82%" },
          });
        } else {
          gsap.from(el, {
            autoAlpha: 0,
            y: 48,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        }
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return null;
}

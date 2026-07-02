"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import experiences from "@/lib/experiences";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function useIsLargeScreen() {
  // Start false on both server and client to keep SSR/hydration in sync;
  // the real value lands in the effect right after mount.
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
}

export default function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeProfile = experiences[activeIndex];

  const isLargeScreen = useIsLargeScreen();

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const lastIndexRef = useRef(1);

  // Desktop-only: pin the section and drive the active role by scroll.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const total = experiences.length;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 65}%`,
          pin: pinRef.current,
          scrub: true,
          anticipatePin: 1,
          refreshPriority: 2, // document order among the pinned sections
          onUpdate: (self) => {
            const idx = Math.min(
              total - 1,
              Math.round(self.progress * (total - 1))
            );
            if (idx !== lastIndexRef.current) {
              lastIndexRef.current = idx;
              setActiveIndex(idx);
            }
          },
        });
        return () => st.kill();
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="relative mx-auto flex min-h-screen max-w-[90%] flex-col items-center justify-evenly py-12"
      >
      <div className="w-full">
        <h2 className="zentry mb-4 text-center text-3xl font-medium md:text-left md:text-8xl">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="mb-8 flex justify-center md:justify-start">
          <div className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm text-foreground/70 dark:border-white/15 dark:bg-white/5">
            {activeIndex + 1}/{experiences.length}
          </div>
        </div>

        <div className="gap-8 md:gap-16 w-full">
          {/* <div className="flex flex-col lg:flex-row justify-evenly items-center w-full space-y-8 md:space-y-0"> */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-12 lg:gap-8">
            {/* Left panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id + "-left"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-2 w-full lg:w-[25%] px-4 md:px-0"
              >
                <h2 className="text-2xl font-medium text-foreground">
                  {activeProfile.name}
                </h2>
                <p className="font-medium text-accent">
                  {activeProfile.companyName}
                </p>
                <div className="mb-2 mt-2 border-t border-black/10 dark:border-white/10" />
                <p className="leading-relaxed text-foreground/60">
                  {activeProfile.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Image carousel */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-w-[700px] mx-auto">
              <div className="absolute inset-0">
                {(isLargeScreen ? experiences : [activeProfile]).map(
                  (profile, index) => {
                    const position = index - activeIndex;

                    let xOffset = 0,
                      yOffset = 0,
                      zIndex = 10,
                      opacity = 1,
                      scale = 1;

                    if (isLargeScreen) {
                      if (position === 0) {
                        zIndex = 30;
                        scale = 1;
                      } else if (
                        position === -1 ||
                        (position === experiences.length - 1 &&
                          activeIndex === 0)
                      ) {
                        xOffset = -100;
                        yOffset = -80;
                        zIndex = 20;
                        scale = 0.7;
                        opacity = 0.8;
                      } else if (
                        position === 1 ||
                        (position === -experiences.length + 1 &&
                          activeIndex === experiences.length - 1)
                      ) {
                        xOffset = 100;
                        yOffset = 80;
                        zIndex = 20;
                        scale = 0.7;
                        opacity = 0.8;
                      } else if (position === -2 || position === 2) {
                        xOffset = position < 0 ? -180 : 180;
                        yOffset = position < 0 ? -160 : 160;
                        zIndex = 10;
                        scale = 0.5;
                        opacity = 0.6;
                      } else {
                        opacity = 0;
                      }
                    }

                    return (
                      <motion.div
                        key={profile.id}
                        initial={{ x: xOffset, y: yOffset, opacity, scale }}
                        animate={{ x: xOffset, y: yOffset, opacity, scale }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                          "absolute rounded-lg overflow-hidden shadow-lg cursor-pointer",
                          "w-[200px] md:w-[260px] h-[270px] md:h-[350px]"
                        )}
                        style={{
                          left: "calc(50% - 100px)",
                          top: "calc(50% - 135px)",
                          zIndex,
                        }}
                        onClick={() => isLargeScreen && setActiveIndex(index)}
                      >
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Right panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id + "-right"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col w-full lg:w-[25%] px-4 md:px-0 sm:mt-20 lg:mt-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
                  <div>
                    <h3 className="text-sm text-foreground/40">Experience</h3>
                    <p className="text-lg font-medium text-foreground">
                      {activeProfile.experience}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-foreground/40">
                      Areas of Focus
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {activeProfile.focusAreas.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="mt-2 border-t border-black/10 dark:border-white/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-center mt-8 gap-4">
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? experiences.length - 1 : prev - 1
            )
          }
          className="hover-cursor rounded-full border border-black/10 bg-black/5 p-2 text-foreground transition-colors hover:bg-[var(--accent)] hover:text-white dark:border-white/10 dark:bg-white/5 md:p-4"
          aria-label="Previous profile"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === experiences.length - 1 ? 0 : prev + 1
            )
          }
          className="hover-cursor rounded-full border border-black/10 bg-black/5 p-2 text-foreground transition-colors hover:bg-[var(--accent)] hover:text-white dark:border-white/10 dark:bg-white/5 md:p-4"
          aria-label="Next profile"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import experiences from "@/lib/experiences";

export default function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeProfile = experiences[activeIndex];

  return (
    <div className="bg-white mx-auto max-w-[90%] min-h-screen flex flex-col justify-evenly items-center py-12  relative">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">
          Work Experience
        </h2>
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm">
            {activeIndex + 1}/{experiences.length}
          </div>
        </div>

        <div className="gap-8 md:gap-16">
          <div className="flex justify-evenly items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id + "-left"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-2 w-[25%]"
              >
                <h2 className="text-2xl font-medium text-gray-900">
                  {activeProfile.name}
                </h2>
                <p className="text-gray-900 font-medium">
                  {activeProfile.companyName}
                </p>
                <div className="border-t border-gray-300 mt-[8px] mb-2" />

                <p className="text-gray-600 leading-relaxed">
                  {activeProfile.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="h-[400px] w-[50%]">
              <div className="relative w-full h-full">
                {experiences.map((profile, index) => {
                  const position = index - activeIndex;
                  let xOffset = 0;
                  let yOffset = 0;
                  let zIndex = 10;
                  let opacity = 1;
                  let scale = 1;

                  if (position === 0) {
                    xOffset = 0;
                    yOffset = 0;
                    zIndex = 30;
                    scale = 1;
                  } else if (
                    position === -1 ||
                    (position === experiences.length - 1 && activeIndex === 0)
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
                  } else if (
                    position === -2 ||
                    position === 2 ||
                    (position === experiences.length - 2 &&
                      activeIndex === 0) ||
                    (position === -experiences.length + 2 &&
                      activeIndex === experiences.length - 1)
                  ) {
                    xOffset = position < 0 ? -180 : 180;
                    yOffset = position < 0 ? -160 : 160;
                    zIndex = 10;
                    scale = 0.5;
                    opacity = 0.6;
                  } else {
                    opacity = 0;
                  }

                  return (
                    <motion.div
                      key={profile.id}
                      initial={{
                        x: xOffset,
                        y: yOffset,
                        zIndex,
                        opacity,
                        scale,
                      }}
                      animate={{
                        x: xOffset,
                        y: yOffset,
                        zIndex,
                        opacity,
                        scale,
                      }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "absolute rounded-lg overflow-hidden shadow-lg cursor-pointer",
                        "w-[260px] h-[350px]"
                      )}
                      style={{
                        left: "calc(50% - 120px)",
                        top: "calc(50% - 160px)",
                        zIndex,
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full hover-cursor-white h-full object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id + "-right"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col w-[25%]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
                  <div>
                    <h3 className="text-sm text-gray-400">Experience</h3>
                    <p className="text-lg font-medium">
                      {activeProfile.experience}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400">Areas of Focus</h3>
                    <p className="text-lg font-medium">
                      {activeProfile.focusAreas.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Separator aligned with left section's separator */}
                <div className="border-t border-gray-300 mt-[8px]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8 gap-4">
        <button
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? experiences.length - 1 : prev - 1
            )
          }
          className="p-4 rounded-full hover-cursor bg-gray-100 hover:bg-gray-200 transition-colors"
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
          className="p-4 rounded-full hover-cursor bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Next profile"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

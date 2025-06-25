"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex justify-center items-center min-h-screen gap-4 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[50%] mx-auto text-left md:text-center flex flex-col items-center relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="zentry text-3xl md:text-8xl font-medium text-orange-500"
        >
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-4xl font-semibold leading-tight mb-10 relative"
        >
          Hey, I'm Ganesh – a creative technologist passionate about building
          immersive digital experiences. From 3D avatars to AI-driven tools, I
          love pushing boundaries where design meets code. Currently building
          tools that make a difference in people's lives using cutting-edge web
          and AI tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button className="group relative rounded-full bg-orange-500 overflow-hidden px-6 py-2 text-white">
            Ask Me Anything
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

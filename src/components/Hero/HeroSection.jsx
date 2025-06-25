"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import ModelViewer from "./ModelViewer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 overflow-hidden">
      <div className="w-[90%] h-full mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left px-4 space-y-6 md:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="zentry text-4xl md:text-5xl lg:text-8xl font-semibold text-black"
            >
              Ganesh Kumar Mangla
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl font-medium text-black"
            >
              Creative Developer blending design and code to build beautiful web
              experiences
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="gap-4 pt-4 hidden md:flex"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("project-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-full transition-all shadow-lg"
              >
                View Projects
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-transparent border-2 border-white text-black font-medium py-2 px-6 rounded-full hover:bg-white hover:text-orange-900 transition-all shadow-lg"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[400px] md:h-[600px] mt-8 md:mt-0"
          >
            <ModelViewer modelPath="/model.glb" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

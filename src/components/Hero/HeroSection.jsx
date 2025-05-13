"use client";
import Image from "next/image";
import ModelViewer from "./ModelViewer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 bg-gradient-to-b from-gray-900 to-black">
      {/* Background overlay with slight texture */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 z-0"
        style={{
          backgroundImage:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABdJREFUeNpi/M/A8J+RkZGRATUFIMAADfIBgVsYbuYAAAAASUVORK5CYII=')",
        }}
      ></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
              Ganesh Kumar Mangla
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-md">
              Creative Developer blending design and code to build beautiful web
              experiences
            </h3>

            <div className="flex gap-4 pt-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all shadow-lg">
                View Projects
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-purple-900 transition-all shadow-lg">
                Contact Me
              </button>
            </div>
          </div>

          {/* 3D Model */}
          <div className="w-full md:w-1/2 h-[400px] mt-8 md:mt-0">
            <ModelViewer modelPath="/model.glb" />
          </div>
        </div>
      </div>
    </section>
  );
}

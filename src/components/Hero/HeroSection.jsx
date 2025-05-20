"use client";
import ModelViewer from "./ModelViewer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 ">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1716277521231-c2fce136e880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 z-0 bg-white/30" />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 70%, white 100%)",
        }}
      />

      <div className="container max-w-6xl h-full mx-auto relative z-10">
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

            <div className="gap-4 pt-4 hidden md:flex">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-full transition-all shadow-lg">
                View Projects
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-orange-900 transition-all shadow-lg">
                Contact Me
              </button>
            </div>
          </div>

          {/* 3D Model */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[600px] mt-8 md:mt-0">
            <ModelViewer modelPath="/model.glb" />
          </div>
        </div>
      </div>
    </section>
  );
}

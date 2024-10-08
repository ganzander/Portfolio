"use client";
import React from "react";
import MovingCards from "./MovingCards";

export default function Skills() {
  return (
    <div className="container mx-auto pt-5" id="skills">
      <h2 className="text-white text-4xl lg:text-6xl mb-12 text-center font-semibold uppercase">
        Skills
      </h2>
      <div className="pt-10 h-[95%] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <MovingCards />
      </div>
    </div>
  );
}

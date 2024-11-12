"use client";
import React from "react";
import MovingCards from "./MovingCards";

export default function Skills() {
  return (
    <div
      className="min-h-screen min-w-screen pt-5 dark:bg-black bg-[#eee]"
      id="skills"
    >
      <h2 className="dark:text-white text-black tracking-tighter text-4xl lg:text-6xl mb-7 text-center font-semibold uppercase">
        Skills
      </h2>
      <div className="pt-5 w-full dark:bg-black bg-[#eee] relative">
        <MovingCards />
      </div>
    </div>
  );
}

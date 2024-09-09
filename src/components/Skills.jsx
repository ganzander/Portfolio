"use client";
import SKILLS from "@/data/skills";
import React from "react";

export default function Skills() {
  return (
    <div className="container mx-auto pt-5" id="skills">
      <h2 className="mb-12 text-center text-4xl font-semibold">Skills</h2>
      <div className="mx-2 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center bg-gradient-to-b px-4 py-10 lg:px-20 from-zinc-900 to-zinc-950">
        {SKILLS.map((skill, index) => (
          <div className="flex flex-col items-center mb-2" key={index}>
            <div className="flex items-center justify-center mb-2">
              {skill.icon}
            </div>
            <h3 className="text-xl lg:text-3xl">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

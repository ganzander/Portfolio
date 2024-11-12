"use client";
import React from "react";
import { Tabs } from "@/components/ui/tabs";
import tabs from "@/data/tabs";

export default function Projects() {
  return (
    <div
      id="projects"
      className="pt-5 mt-40 w-full h-full bg-[#eee] dark:bg-black"
    >
      <div className="dark:bg-black max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-screen [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
        <h2 className="w-full text-4xl lg:text-6xl tracking-tighter pb-10 text-center text-black dark:text-white font-semibold uppercase">
          Projects
        </h2>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

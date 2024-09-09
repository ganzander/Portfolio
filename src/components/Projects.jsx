"use client";
import React from "react";
import { Tabs } from "@/components/ui/tabs";
import tabs from "@/data/tabs";

export default function Projects() {
  return (
    <div
      id="projects"
      className="pt-10 h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40"
    >
      <h2 className="w-full pb-10 text-center text-4xl font-semibold uppercase">
        Projects
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

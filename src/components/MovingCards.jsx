"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SKILLS1, SKILLS2, SKILLS3 } from "@/data/skills";

export default function MovingCards() {
  return (
    <>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={SKILLS1} direction="right" speed="slow" />
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={SKILLS2} direction="left" speed="slow" />
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={SKILLS3} direction="right" speed="slow" />
      </div>
    </>
  );
}

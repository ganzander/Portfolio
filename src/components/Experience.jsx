"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/data";

export default function Experience() {
  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
}

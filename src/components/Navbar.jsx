"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import links from "@/data/links";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center w-full lg:pt-20 md:pt-20 sm:invisible md:visible">
      <FloatingDock items={links} />
    </div>
  );
}

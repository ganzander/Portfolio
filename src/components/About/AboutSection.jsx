import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 flex justify-center items-center gap-4">
      <div className="w-[50%] relative aspect-square overflow-hidden z-10 rounded-t-4xl">
        <Image
          src="/unnamed.jpg"
          alt="Hero bg Image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="w-[50%] mx-auto text-center flex flex-col items-center">
        <h2 className="text-orange-500 font-semibold mb-6 capitalize">
          Who I Am
        </h2>
        <p className="text-3xl md:text-4xl font-semibold leading-tight mb-10">
          Hey, I’m Ganesh – a creative technologist passionate about building
          immersive digital experiences. From 3D avatars to AI-driven tools, I
          love pushing boundaries where design meets code. Currently building
          tools that make a difference in people’s lives using cutting-edge web
          and AI tech.
        </p>
        <Button className="rounded-full hover-cursor">Read More</Button>
      </div>
    </section>
  );
}

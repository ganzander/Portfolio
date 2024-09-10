"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import SOCIAL_MEDIA_LINKS from "@/data/social_media_links";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Navbar from "./Navbar";
import words from "@/data/words";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen h-screen w-full flex flex-col items-center"
      id="#"
    >
      <Navbar />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-white flex items-center pt-24 justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h3 className="text-xl md:text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hi! I am
          </h3>
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Ganesh Mangla.
          </h1>
          <TypewriterEffectSmooth words={words} />
          <p className="mt-4 w-full font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            I am a skilled full-stack developer with expertise in MERN stack,
            Node.js & MySQL. I build scalable APIs, integrate third-party
            services & explore AI/ML projects. Currently pursuing a B.Tech in
            Computer Engineering, I am passionate about development &
            technologies.
          </p>
          <div className="flex w-full justify-evenly items-center pt-11">
            {SOCIAL_MEDIA_LINKS.map((link, ind) => (
              <div className="has-tooltip" key={ind}>
                <span className="tooltip rounded-lg -translate-x-[25%] -translate-y-[25%] shadow-lg p-1 bg-gray-600 text-white -mt-8">
                  {link.name}
                </span>
                <a
                  href={link.href}
                  className="mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

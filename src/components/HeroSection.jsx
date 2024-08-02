import React, { Profiler } from "react";
const PROFILE = {
  name: "Ganesh Kumar Mangla",
  info: "Full-stack developer with a flair for graphic design.",
};

export default function HeroSection() {
  return (
    <>
      <div
        id="hero"
        className="relative flex min-h-screen items-end justify-center"
      >
        <img
          src="/HeroSection.jpg"
          className="absolute inset-0 z-10 h-full w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"></div>
        <div className="z-20 mx-4 max-w-3xl pb-20">
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            {PROFILE.name}
          </h1>
          <p className="pt-2 font-semibold">{PROFILE.info}</p>
        </div>
      </div>
    </>
  );
}

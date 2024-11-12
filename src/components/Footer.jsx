"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/ganesh-mangla-958a392a8/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/ganzander",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/Ganesh_Mangla/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/ganesh_mangla/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
];

export default function Footer() {
  return (
    <div className="py-16 bg-black dark:bg-slate-900">
      <p className="text-center text-sm tracking-wide text-white font-semibold">
        ©Ganesh Mangla. All rights reserved.
      </p>
    </div>
  );
}

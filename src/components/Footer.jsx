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
    <div className="mb-8 mt-20">
      <div className="flex justify-center items-center">
        <figure>
          {/* <img src="" alt="logo" /> */}
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </figure>
      </div>
      <div className="flex justify-center items-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, ind) => (
          <a
            href={link.href}
            className="mb-2"
            key={ind}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        ©Ganesh Mangla. All rights reserved.
      </p>
    </div>
  );
}

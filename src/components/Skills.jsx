"use client";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiRedux,
  SiRazorpay,
  SiTwilio,
} from "react-icons/si";
import {
  FaAws,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaCss3,
  FaCcStripe,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";

const SKILLS = [
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
  },
  {
    icon: <SiExpress className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Express.js",
  },
  {
    icon: <FaAws className="text-4xl lg:text-6xl text-red-600" />,
    name: "AWS",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "MySQL",
  },
  {
    icon: <SiRedux className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Redux",
  },
  {
    icon: <FaCcStripe className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Stripe",
  },
  {
    icon: <SiRazorpay className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Razorpay",
  },
  {
    icon: <SiTwilio className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Twilio",
  },
  {
    icon: <CgCPlusPlus className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "C++",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Python",
  },
  {
    icon: <IoLogoVercel className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Vercel",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-sky-700" />,
    name: "GitHub",
  },
  {
    icon: <FaDatabase className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Database",
  },
  {
    icon: <IoLogoJavascript className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Javascript",
  },
  {
    icon: <FaBootstrap className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Bootstrap",
  },
  {
    icon: <FaCss3 className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "CSS",
  },
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-green-600" />,
    name: "HTML",
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto pt-5" id="skills">
      <h2 className="mb-12 text-center text-4xl font-semibold">Skills</h2>
      <div className="mx-2 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center bg-gradient-to-b px-4 py-10 lg:px-20 from-zinc-900 to-zinc-950">
        {SKILLS.map((skill, index) => (
          <div className="flex flex-col items-center mb-2" key={index}>
            <div className="flex items-center justify-center mb-2">
              {skill.icon}
            </div>
            <h3 className="text-xl lg:text-3xl">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

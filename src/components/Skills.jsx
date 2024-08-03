import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandOauth } from "react-icons/tb";
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
} from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript, IoLogoVercel, TbApi } from "react-icons/io5";

const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
  },
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
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-green-600" />,
    name: "HTML",
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
    icon: <FaGithub className="text-4xl lg:text-6xl text-sky-700" />,
    name: "GitHub",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "MySQL",
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <div className="mx-2 mb-8 flex justify-around items-center rounded-xl bg-gradient-to-b px-4 py-10 lg:px-20 from-zinc-900 to-zinc-950">
        {SKILLS.map((skill, index) => (
          <div className="flex flex-col items-center" key={index}>
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

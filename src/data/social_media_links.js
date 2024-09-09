import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoDocument } from "react-icons/io5";
const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/ganesh-mangla-958a392a8/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/ganzander",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    name: "GitHub",
  },
  {
    href: "https://leetcode.com/u/Ganesh_Mangla/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
    name: "LeetCode",
  },
  {
    href: "https://www.instagram.com/ganesh_mangla/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    name: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ganesh-mangla-958a392a8/",
    icon: <IoDocument fontSize={25} className="hover:opacity-80" />,
    name: "Resume",
  },
];
export default SOCIAL_MEDIA_LINKS;

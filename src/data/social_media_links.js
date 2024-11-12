import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoDocument } from "react-icons/io5";
const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/ganesh-mangla-958a392a8/",
    icon: (
      <FaLinkedin
        fontSize={25}
        className="text-black dark:text-white hover:opacity-80"
      />
    ),
    name: "LinkedIn",
  },
  {
    href: "https://github.com/ganzander",
    icon: (
      <FaGithub
        fontSize={25}
        className="text-black dark:text-white hover:opacity-80"
      />
    ),
    name: "GitHub",
  },
  {
    href: "https://www.instagram.com/ganesh_mangla/",
    icon: (
      <FaInstagram
        fontSize={25}
        className="text-black dark:text-white hover:opacity-80"
      />
    ),
    name: "Instagram",
  },
  {
    href: "https://drive.google.com/file/d/1U0bVjiva4fPbT8B-4XuypPyajftQblKQ/view?usp=drive_link",
    icon: (
      <IoDocument
        fontSize={25}
        className="text-black dark:text-white hover:opacity-80"
      />
    ),
    name: "Resume",
  },
];
export default SOCIAL_MEDIA_LINKS;

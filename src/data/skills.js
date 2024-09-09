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

export default SKILLS;

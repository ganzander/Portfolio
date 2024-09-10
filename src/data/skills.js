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

export const SKILLS1 = [
  {
    quote: <TbBrandNextjs className="text-4xl lg:text-6xl" color="black" />,
    name: "Next.js",
  },
  {
    quote: <SiMongodb className="text-4xl lg:text-6xl" color="#47A248" />, // MongoDB Green
    name: "MongoDB",
  },
  {
    quote: <FaNodeJs className="text-4xl lg:text-6xl" color="#339933" />, // Node.js Green
    name: "Node.js",
  },
  {
    quote: <RiReactjsLine className="text-4xl lg:text-6xl" color="#61DAFB" />, // React Blue
    name: "React.js",
  },
  {
    quote: <SiExpress className="text-4xl lg:text-6xl" color="black" />, // Express.js is commonly black
    name: "Express.js",
  },

  {
    quote: <FaAws className="text-4xl lg:text-6xl" color="#FF9900" />, // AWS Orange
    name: "AWS",
  },
  {
    quote: <SiMysql className="text-4xl lg:text-6xl" color="#00758F" />, // MySQL Blue
    name: "MySQL",
  },
];
export const SKILLS2 = [
  {
    quote: <SiRedux className="text-4xl lg:text-6xl" color="#764ABC" />, // Redux Purple
    name: "Redux",
  },
  {
    quote: <FaCcStripe className="text-4xl lg:text-6xl" color="#635BFF" />, // Stripe Purple
    name: "Stripe",
  },
  {
    quote: <SiRazorpay className="text-4xl lg:text-6xl" color="#02042B" />, // Razorpay Blue
    name: "Razorpay",
  },
  {
    quote: <SiTwilio className="text-4xl lg:text-6xl" color="#F22F46" />, // Twilio Red
    name: "Twilio",
  },
  {
    quote: <CgCPlusPlus className="text-4xl lg:text-6xl" color="#00599C" />, // C++ Blue
    name: "C++",
  },
  {
    quote: <FaPython className="text-4xl lg:text-6xl" color="#3776AB" />, // Python Blue
    name: "Python",
  },
];
export const SKILLS3 = [
  {
    quote: <IoLogoVercel className="text-4xl lg:text-6xl" color="black" />, // Vercel is commonly black
    name: "Vercel",
  },
  {
    quote: <FaGithub className="text-4xl lg:text-6xl" color="black" />, // GitHub is commonly black
    name: "GitHub",
  },

  {
    quote: <FaDatabase className="text-4xl lg:text-6xl" color="#003B57" />, // Generic Database (dark blue)
    name: "Database",
  },
  {
    quote: (
      <IoLogoJavascript className="text-4xl lg:text-6xl" color="#F7DF1E" />
    ), // JavaScript Yellow
    name: "Javascript",
  },
  {
    quote: <FaBootstrap className="text-4xl lg:text-6xl" color="#7952B3" />, // Bootstrap Purple
    name: "Bootstrap",
  },
  {
    quote: <FaCss3 className="text-4xl lg:text-6xl" color="#1572B6" />, // CSS Blue
    name: "CSS",
  },
  {
    quote: <FaHtml5 className="text-4xl lg:text-6xl" color="#E34F26" />, // HTML Orange
    name: "HTML",
  },
];

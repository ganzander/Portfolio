import {
  IconUser,
  IconPhone,
  IconBrain,
  IconWorldCog,
  IconPasswordUser,
} from "@tabler/icons-react";
const links = [
  {
    title: "About",
    icon: (
      <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Skills",
    icon: (
      <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Experience",
    icon: (
      <IconPasswordUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "Projects",
    icon: (
      <IconWorldCog className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Contact",
    icon: (
      <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];
export default links;

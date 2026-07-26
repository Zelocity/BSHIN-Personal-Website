import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  external: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Zelocity",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brandon-shin-z/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: HiDocumentText,
    external: true,
  },
];

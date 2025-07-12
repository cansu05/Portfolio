import { nanoid } from "nanoid";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import rickAndMorty from "./assets/rickAndMorty.png";
import scandleted from "./assets/scandleted.png";
import taskManagement from "./assets/taskManagement.jpeg";
export const links = [
  {
    id: nanoid(),
    href: "/",
    text: "Home",
    icon: <FaHome className="h-5 w-5 text-gray-700  active:text-gray-950 " />,
  },
  {
    id: nanoid(),
    href: "about",
    text: "About",
    icon: <FaUser className="h-5 w-5  text-gray-700" />,
  },

  {
    id: nanoid(),
    href: "projects",
    text: "Projects",
    icon: <FaBriefcase className="h-5 w-5 text-gray-700" />,
  },
];

export const educationData = [
  {
    year: "2017 - 2022",
    degree: "Bachelor Degree",
    institution: "Ege University",
  },
  {
    year: "2013 - 2017",
    degree: "Associate Degree",
    institution: "Hasan Colak Anatolian High School ",
  },
];

export const experienceData = [
  {
    year: "11.23 - 01.25",
    position: "Frontend Developer",
    company: "Veriland Consulting Ltd.",
  },
  {
    year: "09.23 - 10.23",
    position: "Volunteer Frontend Developer",
    company: "Fogo Team",
  },
  {
    year: "05.23 - 10.23",
    position: "Frontend Developer",
    company: "Altinci Kat",
  },
  {
    year: "09.22 - 11.21",
    position: "Intern R&D Engineer",
    company: "Mechanica",
  },
];

export const aboutData = {
  birthday: "05.05.1999",
  age: 26,
  address: "Izmir",
  email: "cansuugurr0@gmail.com",
  phone: "+90 531 509 93 80",
  freelance: "Available",
  Locations: "Open to work in Ankara & Izmir",
};

export const socials = [
  {
    id: nanoid(),
    href: "https://github.com/cansu05",
    icon: <FaGithub className="h-6 w-6 text-gray-700 hover:text-gray-950" />,
  },
  {
    id: nanoid(),
    href: "https://www.linkedin.com/in/cansuugur/",
    icon: <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-gray-950" />,
  },
  {
    id: nanoid(),
    href: "https://drive.google.com/file/d/1SZ6nz8tqjBfAw9SsWlBsrJ-xyxEufGwS/view?usp=sharing",
    icon: <FaFileAlt className="h-6 w-6 text-gray-700 hover:text-gray-950" />,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Sass",
  "Material UI",
  "Bootstrap",
  "Git & GitHub",
];

export const projects = [
  {
    id: nanoid(),
    img: scandleted,
    url: "https://scandleted-five.vercel.app/",
    github: "https://github.com/cansu05/Scandleted",
    title: "Scandleted – E-commerce Application",
    text: "Developed a mobile-responsive e-commerce app to showcase and sell candle products. Built with Next.js 15, TypeScript, and Prisma. Integrated Supabase as the backend, implemented user authentication with Clerk, and styled the UI with Tailwind CSS and shadcn/ui. Deployed on Vercel for high-performance hosting and scalability.",
  },
  {
    id: nanoid(),
    img: rickAndMorty,
    url: "https://ricky-and-morty-omega-seven.vercel.app/character",
    github: "https://github.com/cansu05/RickyAndMorty",
    title: "Rick and Morty Character Catalog",
    text: "A character catalog application built with Next.js 15 and TypeScript, consuming the public Rick and Morty API. Implemented global state management with Redux Toolkit, dynamic filtering, pagination, and a responsive UI. Deployed on Vercel for performance and scalability.",
  },
  {
    id: nanoid(),
    img: taskManagement,
    url: "",
    github: "https://github.com/cansu05/Task-Flow",
    title: "TaskFlow – Task Management App",
    text: "Built a modern task management application with drag-and-drop functionality using Next.js, Zustand, TypeScript, and Material-UI. Designed for task tracking and team collaboration with responsive UI. Focused on lightweight state management and SEO-friendly performance.",
  },
];

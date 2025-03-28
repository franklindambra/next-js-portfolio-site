import React from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaBuilding,
  FaRegPaperPlane,
} from "react-icons/fa";
import corpcommentImg from "@/public/htx-shows.png";
import rmtdevImg from "@/public/deepwave-live.png";
import wordanalyticsImg from "@/public/Screenshot 2024-10-26 at 6.15.57 PM.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Front-End Developer",
    location: "",
    description:
      "Developed custom websites for creative agencies and clients using HTML, CSS, JavaScript, Bootstrap, and WordPress. Collaborated with graphic designers to convert static mockups into interactive web pages and created custom CSS animations. Implemented site-map solutions and utilized Adobe Suite (Photoshop, Illustrator, Premiere) for graphic elements. Managed email campaigns using Send Grid.",
    icon: React.createElement(FaLaptopCode), // Changed to a coding-related icon
    date: "2010-2019",
  },
  {
    title: "Completed Full Stack Certification",
    location: "",
    description:
      "Gained expertise in modern frameworks like React and Node.js, built dynamic web applications, and learned RESTful API design. Developed skills in database management with MongoDB and Express.js, focusing on responsive design and user experience.",
    icon: React.createElement(FaGraduationCap), // Icon for education/completion
    date: "2020",
  },
  {
    title: "Senior Developer at Good Agency",
    location: "",
    description:
      "Developed dynamic CRUD applications with React, Next.js, Node.js, and SQL, and built full-scope websites using HTML, CSS, JavaScript, and PHP. Created backend systems for automation and managed WordPress site development and maintenance. Developed responsive eCommerce sites with custom query systems, engaged in iOS app and SQL database maintenance, and handled DNS management for 60+ websites. Integrated conversion tracking with Google Analytics and coordinated a large-scale website migration to a new server.",
    icon: React.createElement(FaBuilding), // Changed to an office/building icon to represent a company
    date: "2021 - 2024",
  },
  {
    title: "Full Stack Developer at La Praim",
    location: "",
    description:
      "Reviewed and optimized existing PHP systems and templates to improve simplicity and scalability by refactoring and debugging legacy code. Developed dynamic, data-driven user interfaces in PHP to replace static, hard-coded components, enhancing flexibility and maintainability. Managed custom PHP templates and logic for seamless integration with WordPress custom post types and their associated data models. Additionally, monitored server health and implemented backend solutions to ensure system stability and performance.",
    icon: React.createElement(FaBuilding), // Changed to an office/building icon to represent a company
    date: "2024",
  },
  {
    title: "Founder and Lead Developer at Dambra Web Design",
    location: "",
    description:
      "As the founder and lead developer at Dambra Web Design, I specialize in Next.js and WordPress development, creating high-performance, scalable web applications. I oversee project development from inception to deployment, managing client intake, technical strategy, and execution. My work involves optimizing WordPress and Next.js integrations, developing custom solutions, and ensuring seamless user experiences through efficient frontend and backend development. Additionally, I lead project management efforts, coordinating timelines, resources, and development workflows to deliver tailored digital solutions that meet client needs.",
    icon: React.createElement(FaBuilding), // Changed to an office/building icon to represent a company
    date: "2025",
  },
  {
    title: "Software Engineer at Peak Values Consulting",
    location: "",
    description:
      "At Peak Values Consulting, I specialize in Next.js development, integrating GROQ for querying Sanity data and managing CI/CD deployments to Vercel. My work involves building and optimizing scalable web applications, streamlining data fetching strategies, and ensuring seamless frontend and backend interactions. I also collaborate on enhancing system performance, maintaining code quality, and implementing best practices for modern web development.",
    icon: React.createElement(FaBuilding), // Changed to an office/building icon to represent a company
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "HTXshows",
    description:
      "HTXshows is an events listing application for Houston which utilizes NextJS, PostgreSQL, NexAuth and Stripe Webhooks.",
    tags: [
      "Next.js",
      "Typescript",
      "NextAuth",
      "PostgreSQL",
      "Prisma",
      "Stripe SDK & Webhooks",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Deepwave.Live",
    description:
      "Audio file management software that utilizes React, SQL,and AWS S3 for file storage.",
    tags: ["React", "AWS", "SQL", "JWT Auth"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Next Js Blog",
    description:
      "A blog with Kinde authentication and server actions built using the NextJS framework.",
    tags: ["Next.js", "Prisma", "SQL", "Tailwind", "Kinde Auth"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Shopify",
  "ORM",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Wordpress",
  "PHP",
] as const;

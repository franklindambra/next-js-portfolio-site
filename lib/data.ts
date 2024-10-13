import React from "react";
import { FaLaptopCode, FaGraduationCap, FaBuilding, FaRegPaperPlane } from 'react-icons/fa'; 
import corpcommentImg from "@/public/htx-shows.png";
import rmtdevImg from "@/public/deepwave-live.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HTXshows",
    description:
      "HTXshows is a web app that lets users list shows in a PostgreSQL database with JavaScript filtering and sorting, while scraping venue listings.",
    tags: ["React", "Next.js", "PostgreSQL", "Stripe API"],
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
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
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
  "PHP"
] as const;
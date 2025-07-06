import React from "react";
import { FaLaptopCode, FaGraduationCap, FaBuilding } from "react-icons/fa";

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
    title: "Software Engineer at Peak Values Consulting",
    location: "",
    description:
      "At Peak Values Consulting, I specialize in developing modern web applications with Next.js, delivering scalable, high-performance solutions tailored to client needs—including for the oil and gas industry. My work spans full-stack development, API integration, and CI/CD deployment to Vercel. I focus on building fast, responsive user interfaces, optimizing data-fetching strategies, and ensuring seamless communication between frontend and backend systems. I also contribute to system performance tuning, code quality, and applying best practices in modern web development.",
    icon: React.createElement(FaBuilding), // Changed to an office/building icon to represent a company
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "HTX Shows",
    description:
      "HTXshows is a freemium full-stack content platform events listings in Houston. NextAuth is integrated for user accounts binded to event listing data. Conditional checkout for featured listings is handled via the Stripe SDK and a webhook endpoint built into the Next API layer to handle to data conditions.",
    tags: [
      "Next.js",
      "Node.js",
      "Typescript",
      "NextAuth",
      "PostgreSQL",
      "Prisma",
      "Stripe SDK & Webhooks",
      "Cheerio",
      "Web Scrapers",
      "SEO",
      "SSR",
    ],
    imageUrl: "/htx-shows.png",
  },
  {
    title: "Peak Values Consulting",
    description:
      "Full stack marketing site built with NextJS, Tailwind and Sanity CMS with full SEO exports. My main focus here was a clean and consistent component architecture and proper demarcation of SSR and useClient boundaries. I worked with Peak Values to prescribe the exact data shapes required for actively managed content in the blog, services, team and industries silos. I also implemeted SSG and caching strategies for edge compatibility without sacrificing the loading & display of new data brought in from the Sanity CMS.",
    tags: [
      "NextJS",
      "Vercel",
      "Sanity",
      "Groq",
      "SEO",
      "SSR",
      "SSG",
      "Framer Motion",
    ],
    imageUrl: "/pv.png",
  },
  {
    title: "Deepwave.Live",
    description:
      "This was an experiment in creating a stateful audio file player/management application that permitted file upload and CRUD operations on meta pertaining to the audio. I utilized a PostgreSQL database, and AWS S3 for file storage. I also created a custom authentication system to protect the front end via JWT method without the use of any auth package. ",
    tags: ["React", "AWS", "SQL", "JWT Auth"],
    imageUrl: "/deepwave-live.png",
  },
  {
    title: "Next Js Blog",
    description:
      "A classic blog with Kinde authentication and server actions built using the NextJS framework.",
    tags: ["Next.js", "Prisma", "SQL", "Tailwind", "Kinde Auth"],
    imageUrl: "/blog.png",
  },
] as const;

export const skillsData = [
  "CSS",
  "Express",
  "Framer Motion",
  "Git",
  "Go",
  "HTML",
  "JavaScript",
  "MongoDB",
  "Next.js",
  "Node.js",
  "ORM",
  "PHP",
  "PostgreSQL",
  "Python",
  "React",
  "Shopify",
  "Tailwind",
  "TypeScript",
  "Wordpress",
] as const;

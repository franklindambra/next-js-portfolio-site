"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I began programming in 2010, crafting fully custom websites using core
        web technologies (HTML/CSS/JS). After transitioning to full-time
        development in 2020, I expanded on this foundation by completing an
        intensive full-stack developer bootcamp, honing my expertise in modern
        frameworks and technologies. I enjoy crafting elegant solutions that
        leverage structured data, driven by a passion for systems thinking and
        tailoring approaches to address unique business challenges. <br></br>
        <br></br>
        My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I'm always eager to explore new technologies and stay at the forefront
        of the ever-evolving software landscape.
      </p>

      <p>
        When I'm not programming I also enjoy performing as a Jazz pianist and
        creating original musical compositions.
      </p>
    </motion.section>
  );
}

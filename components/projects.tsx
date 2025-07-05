"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Some Projects</SectionHeading>
      <div className="mb-10 max-w-[45rem]">
        <p>
          I’ve worked across a wide range of codebases over the years. Below is
          a small selection of projects I have permission to share. Some are
          legacy portfolio pieces that reflect earlier stages of my growth,
          while others are actively maintained, fully deployed software
          products.
        </p>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

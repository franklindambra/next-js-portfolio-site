"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg relative  hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-column sm:flex-row p-5">
        <div className="sm:max-w-[50%] flex flex-col h-full  sm:group-even:order-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-5 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="hidden  w-[50%] sm:block rounded-lg bg-cover sm:group-even:order-1 bg-center-right h-[300px] p-5 group-odd:ml-5 group-even:mr-5"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </section>
    </motion.div>
  );
}

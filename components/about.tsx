"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
 
    const { ref } = useSectionInView("About");
    return (
        <motion.section 
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">

                I began programming in 2010 creating fully custom websites with core web languages (HTML/CSS/JS).
                After deciding to embrace development as my full time career in 2020, I was able to build on this solid foundation and complete a full-stack developer bootcamp which sharpened my knowledge of modern frameworks and technologies.{" "}<span className="italic">My favorite part of programming</span> is creating elegant solutions leveraging structured data. I <span className="underline">love</span>{" "}systems thinking and finding the best solutions to suit unique business logic. <br></br><br></br>

                My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and PostgreSQL
                </span>
                .I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I also enjoy{" "}
                <span className="font-medium">performing as a Jazz pianist and creating original musical compositions.</span>

            </p>
        </motion.section>
    )
}

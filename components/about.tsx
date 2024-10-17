"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My tech journey began in middle school with Visual Basic, sparking my
        passion for programming. Later, I earned a bachelor’s degree in Computer
        Science from Mansoura University, providing a solid foundation for my
        career. Over the years, I’ve grown into a full-stack JavaScript and
        TypeScript developer, specializing in Next.js, the MERN stack, and Expo.
        Along the way, I earned certifications from FreeCodeCamp, Udemy, and
        Udacity, as well as an Atlassian Project Management certificate. I
        approach every challenge with a systematic mindset and value honesty
        above all. Looking ahead, I aim to establish my own tech company and
        contribute to industry innovation, embracing the motto: "Anything is
        better than nothing."
      </p>
    </motion.section>
  );
}

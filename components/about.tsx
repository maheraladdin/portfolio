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
        From my early passion for programming with Visual Basic in middle
        school, I've grown into a full-stack JavaScript and TypeScript developer
        with expertise in Next.js, the MERN stack, and Expo. Along the way, I’ve
        earned certifications from FreeCodeCamp, Udemy, and Udacity, as well as
        an Atlassian Project Management certificate. My portfolio includes
        notable projects like Taskify, a project management tool, and Suoq.net,
        an Arabic online classifieds platform. I approach every challenge with a
        systematic mindset and value honesty above all. Looking ahead, I aim to
        establish my own tech company and contribute to industry innovation,
        embracing the motto "anything is better than nothing."
      </p>
    </motion.section>
  );
}

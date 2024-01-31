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
        I'm a dedicated senior computer science student at Mansoura University
        in Egypt. From my early days exploring Visual Basic in middle school,
        I've nurtured a passion for programming that has evolved into a
        full-stack JavaScript development journey. Armed with certifications in
        Full-Stack Development and Web Development from institutions like
        FreeCodeCamp, Udemy ,and Udacity, I've crafted an impressive portfolio.
        Notable projects include a full-stack Discord Clone, Trello Clone,
        YouTube Clone, Netflix Clone, and collaborative ventures like CD2js and
        ARFurniture. Proficient in a diverse tech stack spanning React, Next.js,
        Node.js, Express.js, MongoDB, and more, I approach challenges with a
        systematic mindset. My core values include unwavering honesty, and I
        firmly believe that "anything is better than nothing." Looking ahead, my
        goals include continuous skill development, establishing my tech
        company, and contributing to the industry's innovation. I'm excited
        about the future and always ready for new challenges.
      </p>
    </motion.section>
  );
}

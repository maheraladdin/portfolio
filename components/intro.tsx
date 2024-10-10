"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {
  FaGithubSquare,
  FaCodepen,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { profiles } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/my-image.webp"
              alt="Maher Aladdin portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl select-none"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: [0, 10, -10, 10, -10, 0] }}
            whileHover={{
              rotate: [0, 10, -10, 10, -10, 0],
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Maher.</span> Software Engineer
        with over <strong>4 years</strong> in the industry. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">MERN</span>,{" "}
        <span className="underline">Next.js</span>, and{" "}
        <span className="underline">Expo</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 pt-8 pb-4 sm:pt-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={"#contact"}
            className="group bg-neutral-800 sm:bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:animate-bounce" />
          </a>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {profiles.map((profile) => (
            <a
              key={profile}
              className="bg-white p-4 group text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href={profile}
              target="_blank"
            >
              {(() => {
                if (profile.includes("linkedin")) {
                  return <BsLinkedin className={"w-[24px] h-[24px]"} />;
                } else if (profile.includes("github")) {
                  return <FaGithubSquare className={"w-[24px] h-[24px]"} />;
                } else if (profile.includes("twitter")) {
                  return <BsTwitter className={"w-[24px] h-[24px]"} />;
                } else if (profile.includes("codepen")) {
                  return <FaCodepen className={"w-[24px] h-[24px]"} />;
                } else if (profile.includes("mostaql")) {
                  return (
                    <div className="w-[24px] h-[24px] border-4 border-gray-700 group-hover:border-gray-950 dark:border-white/60 dark:group-hover:border-white/60 rounded-full"></div>
                  );
                } else if (profile.includes("wa.me")) {
                  return <FaWhatsapp className={"w-[24px] h-[24px]"} />;
                } else if (profile.includes("t.me")) {
                  return <FaTelegram className={"w-[24px] h-[24px]"} />;
                } else {
                  return <span className={"w-[24px] h-[24px]"}>🌐</span>;
                }
              })()}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

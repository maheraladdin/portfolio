"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare, FaLink, FaYoutube, FaStar, FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import clsx from "clsx";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  links,
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
      className="group mb-3 sm:mb-8 last:mb-0 h-full"
    >
      <section
        className={clsx(
          "bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-full hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20",
          imageUrl ? "sm:group-even:pl-8" : "",
        )}
      >
        <div
          className={clsx(
            `pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full`,
            imageUrl
              ? "sm:max-w-[50%] sm:group-even:ml-[18rem]"
              : "sm:max-w-[100%]",
          )}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70">
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
          <section className={"flex gap-4 mt-4"}>
            {links
              ? links.map((link, index) => (
                  <a
                    key={index}
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href={link}
                    target="_blank"
                  >
                    {(() => {
                      if (link.includes("youtu")) {
                        return <FaYoutube />;
                      } else if (link.includes("github")) {
                        return <FaGithubSquare />;
                      } else if (link.includes("mostaql")) {
                        return <FaStar />;
                      } else if(link.includes("play.google")) {
                        return <FaGooglePlay />
                      } else if (link.includes("apps.apple")) {
                        return <FaAppStoreIos />
                      } else {
                        return <FaLink />;
                      }
                    })()}
                  </a>
                ))
              : null}
          </section>
        </div>

        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="hidden sm:block absolute bottom-0 -right-[50%] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial]  group-even:-left-[52%]"
            sizes={"(max-width: 640px) 0, (min-width: 640px) 100%"}
          />
        ) : null}
      </section>
    </motion.div>
  );
}

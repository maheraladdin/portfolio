import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import discordClonePortrait from "@/public/discord-clone.webp";
import trelloClonePortrait from "@/public/trello-clone.webp";
import youtubeClonePortrait from "@/public/youtube-clone.webp";
import netflixClonePortrait from "@/public/netflix-clone.webp";
import eCommerceClonePortrait from "@/public/e-commerce-web-site.webp";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    description:
      "This is an awesome full-stack Discord clone. It has features like authentication, channels, Real-time messaging, and more.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (app router)",
      "server actions",
      "Vercel Postgres",
      "Tailwindcss",
      "Shadcn-ui",
      "Prisma",
      "socket.io",
      "clerk",
      "LiveKit",
      "zustand",
      "uploadthing",
      "react-query",
      "zod",
    ],
    imageUrl: discordClonePortrait,
    githubUrl: "https://github.com/maheraladdin/discord-clone",
    demoUrl: "https://discord-clone-production-635e.up.railway.app/",
    githubFrontEndUrl: "",
    githubBackEndUrl: "",
    youtubeUrl: "",
  },
  {
    title: "Trello Clone",
    description:
      "This is an awesome full-stack Trello clone. It has features like authentication, boards, lists, cards, and more.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (app router)",
      "server actions",
      "Planetscale",
      "Tailwindcss",
      "Shadcn-ui",
      "Prisma",
      "@hello-pangea/dnd",
      "clerk",
      "zustand",
      "react-query",
      "zod",
    ],
    imageUrl: trelloClonePortrait,
    githubUrl: "https://github.com/maheraladdin/trello-clone",
    demoUrl: "https://trello-clone-maheraladdin.vercel.app/",
    githubFrontEndUrl: "",
    githubBackEndUrl: "",
    youtubeUrl: "",
  },
  {
    title: "Youtube Clone",
    description:
      "this an awesome full-stack Youtube clone. It has features like authentication, channels, videos, comments, and more.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (pages router)",
      "trpc",
      "prisma",
      "Planetscale",
      "Tailwindcss",
      "headless-ui",
      "next-auth",
      "react-query",
      "cloudinary",
      "zod",
    ],
    imageUrl: youtubeClonePortrait,
    githubUrl: "https://github.com/maheraladdin/video-chill",
    demoUrl: "https://video-chill.vercel.app/",
    githubFrontEndUrl: "",
    githubBackEndUrl: "",
    youtubeUrl: "",
  },
  {
    title: "Netflix Clone",
    description:
      "this an awesome full-stack Netflix clone. It has features like authentication, watching movies, adding movies to your list, and more.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (pages router)",
      "next-connect",
      "prisma",
      "mongodb atlas",
      "Tailwindcss",
      "next-auth",
      "swr",
      "yup",
    ],
    imageUrl: netflixClonePortrait,
    githubUrl: "https://github.com/maheraladdin/netflix-clone",
    demoUrl: "https://netflix-clone-delta-roan.vercel.app",
    githubFrontEndUrl: "",
    githubBackEndUrl: "",
    youtubeUrl: "",
  },
  {
    title: "E-Commerce website",
    description:
      "this an awesome Mern stack E-Commerce website. It has features like authentication, shopping cart, checkout, and more.",
    tags: [
      "react",
      "react router dom",
      "bootstrap",
      "react-bootstrap",
      "redux",
      "express.js",
      "mongodb atlas",
      "mongoose",
      "express-validator",
      "bcrypt",
      "jsonwebtoken",
      "multer",
      "nodemailer",
      "sharp.js",
      "stripe.js",
    ],
    imageUrl: eCommerceClonePortrait,
    githubUrl: "",
    githubFrontEndUrl:
      "https://github.com/maheraladdin/reactjs-ecommerce-web-app",
    githubBackEndUrl: "https://github.com/maheraladdin/nodejs-ecommerce-api-v1",
    demoUrl: "https://reactjs-ecommerce-web-app.vercel.app/",
    youtubeUrl: "",
  },
  {
    title: `CD2js`,
    description:
      "this is a co-work project with my colleague ,it's an expo mobile & web app to generate javascript code from class diagram",
    tags: [
      "react",
      "react native",
      "react-native-async-storage",
      "expo",
      "expo-camera",
      "expo-clipboard",
      "expo-file-system",
      "expo-image-manipulator",
      "expo-image-picker",
      "expo-network",
      "expo-linking",
      "expo-router",
      "expo-sharing",
      "react-native-svg",
      "react-native-web",
    ],
    imageUrl: null,
    githubUrl: "https://github.com/maheraladdin/CD2jsApp.git",
    githubFrontEndUrl: "",
    githubBackEndUrl: "",
    demoUrl: "",
    youtubeUrl: "",
  },
  {
    title: `ARFurniture`,
    description:
      "this is a co-work project with my colleague ,it's an expo mobile app to sell furniture",
    tags: [
      "react",
      "react native",
      "react-native-async-storage",
      "expo",
      "expo-image-picker",
      "expo-network",
      "expo-linking",
      "expo-router",
      "expo-sharing",
      "react-native-svg",
      "react-native-dialog",
      "react-native-pager-view",
      "express",
      "mongoose",
      "bcrypt",
      "jsonwebtoken",
      "firebase",
    ],
    imageUrl: null,
    githubUrl: "",
    githubFrontEndUrl: "https://github.com/maheraladdin/ARFurniture_firebase",
    githubBackEndUrl: "https://github.com/maheraladdin/ARFurniture-MERN",
    demoUrl: "",
    youtubeUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwindcss",
  "Javascript",
  "Typescript",
  "Node.js",
  "Express.js",
  "Mongoose",
  "Prisma ORM",
  "Zod",
  "axios",
  "React",
  "React native",
  "Expo",
  "Redux",
  "Zustand",
  "React form hook",
  "Next auth",
  "Clerk",
  "Planetscale",
  "Mongodb atlas",
  "Vercel",
  "Next.js",
  "React router dom",
  "React",
  "bootstrap",
  "Shadcn ui",
  "React query",
  "Swr",
] as const;

export const subjectTemplate = "Job Offer - Software Engineer";

export const messageTemplate = `Dear Maher Aladdin,

I am pleased to offer you the position of Software Engineer at Google AI. We were very impressed with your qualifications and experience, and we believe that you would be a valuable asset to our team.

This is a full-time position located in our Mountain View, CA office. You will be responsible for developing and maintaining software for our large language models, such as Bard. We offer a competitive salary and benefits package, including health insurance, paid time off, and a 401(k) plan.

To accept this offer, please reply to this email and let me know that you are interested. I will then send you a formal offer letter with more details.

We look forward to hearing from you soon!

Sincerely,
[Hiring Manager Name]

Google AI

Mountain View, CA`;

export const githubUrl = "https://github.com/maheraladdin";

export const linkedinUrl =
  "https://www.linkedin.com/in/maher-mansour-726a35200";

export const twitterUrl = "https://twitter.com/maheralaa2222";

export const codepenUrl = "https://codepen.io/maheraladdin";

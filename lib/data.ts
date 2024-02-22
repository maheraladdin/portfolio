import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import discordClonePortrait from "@/public/discord-clone.webp";
import trelloClonePortrait from "@/public/trello-clone.webp";
import youtubeClonePortrait from "@/public/youtube-clone.webp";
import netflixClonePortrait from "@/public/netflix-clone.webp";
import eCommerceClonePortrait from "@/public/e-commerce-web-site.webp";
import MiroClonePortrait from "@/public/miro-clone.webp";

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
    title: "Full-Stack Development Track",
    location: "Udacity",
    description:
      "I took a full-stack development track on Udacity. I learned about the front-end, and python",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2020",
    url: "https://graduation.udacity.com/confirm/JAAEPAPH",
  },
  {
    title: "Web Development Challenger",
    location: "Udacity",
    description:
      "I took a web development challenger track on Udacity. I learned about the front-end, wordpress",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2020",
    url: "https://graduation.udacity.com/confirm/GK3DK7AD",
  },
  {
    title: "Project Management",
    location: "Coursera",
    description:
      "I took a project management course on Coursera. I learned about the basics of project management.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2021",
    url: "http://coursera.org/verify/F4GQ872SFQ3Z",
  },
  {
    title: "Web Development Professional nano-degree",
    location: "Udacity",
    description:
      "I took a web development professional nano-degree on Udacity. I learned about the front-end, back-end",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2021",
    url: "https://confirm.udacity.com/JQ3YCSGJ",
  },
  {
    title: "Responsive Web Design",
    location: "FreeCodeCamp",
    description:
      "I took a web development professional nano-degree on Udacity. I learned about the front-end, back-end",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2022",
    url: "https://freecodecamp.org/certification/maher-aladdin-mansour/responsive-web-design",
  },
  {
    title: "Learn HTML & CSS",
    location: "MaharaTech - ITIMooca",
    description:
      "I took a Learn HTML & CSS course on MaharaTech - ITIMooca. I advanced my knowledge about HTML & CSS.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2022",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=35649&code=pN4vkKrmN2&qrcode=1",
  },
  {
    title: "Javascript",
    location: "MaharaTech - ITIMooca",
    description:
      "I took a Javascript course on MaharaTech - ITIMooca. I advanced my knowledge about Javascript.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2022",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=162768&code=EhHHZoMzDM&qrcode=1",
  },
  {
    title: "Modern JavaScript: ES6 and beyond",
    location: "MaharaTech - ITIMooca",
    description:
      "I took a Modern JavaScript: ES6 and beyond course on MaharaTech - ITIMooca. I advanced my knowledge about JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=206156&code=9u35JVF98r&qrcode=1",
  },
  {
    title: "JavaScript Developer",
    location: "MaharaTech - ITIMooca",
    description:
      "this is a certificate for finishing Javascript Developer track on MaharaTech - ITIMooca.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259530&code=xaJyK8s2FN&qrcode=1",
  },
  {
    title: "Introduction to mongoDB",
    location: "MaharaTech - ITIMooca",
    description:
      "I took an Introduction to mongoDB course on MaharaTech - ITIMooca. I learned about mongoDB basics.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=253409&code=80AN3cruuk&qrcode=1",
  },
  {
    title: "Database Fundamentals",
    location: "MaharaTech - ITIMooca",
    description:
      "I took a Database Fundamentals course on MaharaTech - ITIMooca. I learned about ERD diagrams ,and sql.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=162686&code=rxgBlAlVgg&qrcode=1",
  },
  {
    title: "The Complete Node.js Course",
    location: "MaharaTech - ITIMooca",
    description:
      "I took a The Complete Node.js Course (RESTful Web Services with Node.js, Express, and MongoDB) course on MaharaTech - ITIMooca. I learned about Node.js, Express, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2023",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=410164&code=JE7mLreVur&qrcode=1",
  },
  {
    title: "NodeJS - Build a Full E- Commerce RESTful APIs 2023",
    location: "Udemy",
    description:
      "I took a NodeJS - Build a Full E- Commerce RESTful APIs 2023 course on Udemy. I learned about Node.js, Express, and MongoDB ,and I build a full E-Commerce RESTful APIs.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2023",
    url: "https://www.udemy.com/certificate/UC-3b7e9d91-ac00-4fba-9813-ec44996ad6dd/",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    location: "FreeCodeCamp",
    description:
      "I took a JavaScript Algorithms and Data Structures course on FreeCodeCamp. I learned about JavaScript Algorithms and Data Structures.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2023",
    url: "https://freecodecamp.org/certification/maher-aladdin-mansour/javascript-algorithms- and-data-structures",
  },
  {
    title: "ReactJs-Build Full E- Commerce-Scratch Redux",
    location: "Udemy",
    description:
      "I took a ReactJs-Build Full E- Commerce-Scratch Redux course on Udemy. I learned about React, Redux ,and I build a full E-Commerce.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023",
    url: "https://www.udemy.com/certificate/UC-1f3b413e-207c-4a69-b515-c1118c40c3ed/",
  },
] as const;

export const projectsData = [
  {
    title: "Miro Clone",
    description:
      "This is an awesome full-stack Miro clone. It has features like authentication, boards, drawing, and more.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (app router)",
      "convex",
      "Tailwindcss",
      "Shadcn-ui",
      "clerk",
      "LiveBlocks",
      "zustand",
    ],
    imageUrl: MiroClonePortrait,
    githubUrl: "https://github.com/maheraladdin/miro-clone",
    demoUrl: "https://miro-clone-eight.vercel.app/",
    githubFrontEndUrl: "",
    githubBackEndUrl: "",
    youtubeUrl: "",
  },
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

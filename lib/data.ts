import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import discordClonePortrait from "@/public/discord-clone.webp";
import trelloClonePortrait from "@/public/trello-clone.webp";
import netflixClonePortrait from "@/public/netflix-clone.webp";
import eCommerceClonePortrait from "@/public/e-commerce-web-site.webp";
import MiroClonePortrait from "@/public/miro-clone.webp";
import SuoqPortrait from "@/public/suoq.webp";
import HelpThemToReachPortrait from "@/public/help-them-to-reach.webp";
import { FaBriefcase } from "react-icons/fa";

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
    title: "Web Developer Trainee",
    location: "Udacity",
    description:
      "During my Udacity Full-Stack training, I enhanced my skills in HTML, CSS, JavaScript, Node.js, and Express.js. I also acquired valuable freelance skills, including client communication, project management, and time management. As part of the program, I successfully built two projects: a weather application and a landing page.",
    icon: React.createElement(FaBriefcase),
    date: "Aug 2020",
    url: null,
  },
  {
    title: "Full-Stack Development Track",
    location: "Udacity",
    description:
      "I took a full-stack development track on Udacity. I learned about the front-end, and python",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2020",
    url: "https://www.udacity.com/certificate/e/ddd3829e-cbe3-11ea-8992-c768c95f0385",
  },
  {
    title: "Web Development Challenger",
    location: "Udacity",
    description:
      "I took a web development challenger track on Udacity. I learned about the front-end, wordpress",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2020",
    url: "https://www.udacity.com/certificate/e/9accde1c-0821-11eb-9215-2b28c6143fe8",
  },
  {
    title: "Project Management",
    location: "Coursera",
    description:
      "I took a project management course on Coursera. I learned about the basics of project management.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2021",
    url: "https://coursera.org/share/267ad167919e526bf0684a1f30331d5a",
  },
  {
    title: "Web Development Professional nano-degree",
    location: "Udacity",
    description:
      "I took a web development professional nano-degree on Udacity. I learned about the front-end, back-end",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2021",
    url: "https://www.udacity.com/certificate/e/1823d426-6572-11eb-9b1d-fb3773c799f2",
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
  {
    title: "Freelance Software Engineer",
    location: "Mostaql.com ",
    description:
      "I have experience developing and maintaining scalable web applications using Next.js, the MERN stack, DigitalOcean, and Vercel, while analyzing client requirements to build tailored software solutions. I work within 2-week sprints, adhering to Agile methodologies to ensure efficient project delivery. My commitment to quality and client satisfaction has earned me a 100% success rate and five-star ratings, along with a 50% rehiring score and an average response time of just 36 minutes.",
    icon: React.createElement(FaBriefcase),
    date: "Apr 2024",
    url: "https://mostaql.com/u/maheraladdin",
  },
  {
    title: "Graduated from Faculty of Computer Science",
    location: "Mansoura University",
    description:
      "During my studies at the Faculty of Computer Science, Mansoura University, I achieved an Excellent grade while actively participating in various competitions and projects. I secured 1st place in an educational game development competition using Unity in 2022, and 4th place in a 3D design competition using Blender the same year. In 2023, I earned 3rd place in a mobile application development competition, showcasing my growing skills in mobile technologies. Additionally, I placed 5th in the Arabization competition in 2024, highlighting my diverse capabilities and commitment to continuous learning and innovation.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2024",
    url: null,
  },
  {
    title: "Atlassian Agile Project Management Professional Certificate",
    location: "Atlassian",
    description:
      "I have gained comprehensive expertise in Agile methodologies, including Scrum, Kanban, and Lean practices. This certification has strengthened my ability to effectively manage projects using Atlassian tools like Jira, enabling me to handle sprint planning, task management, and project tracking with precision. It has also enhanced my leadership skills, allowing me to drive collaboration and iterative development in fast-paced, dynamic environments, ensuring the timely delivery of high-quality software products.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2024",
    url: "https://www.linkedin.com/learning/certificates/179cf9655117335c8f9d6ad043772b06be9b98b2aa45db89b3faf406a9db0c64",
  },
] as const;

export const projectsData = [
  {
    title: "Suoq.net",
    description:
      "an online Arabic marketplace for buying and selling goods, properties, jobs, and services, offering advanced search and real-time messaging features.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (app router)",
      "Tailwindcss",
      "Shadcn-ui",
      "Prisma",
      "socket.io",
      "react-query",
      "zod",
      "zustand",
      "nginx",
      "digitalocean",
      "pm2",
      "namecheap",
      "vercel",
    ],
    imageUrl: SuoqPortrait,
    links: [
      "https://youtu.be/m61xxoYPWhc",
      "https://mostaql.com/u/maheraladdin/reviews/7620749",
      "https://apps.apple.com/us/app/%D8%B3%D9%88%D9%82-%D9%86%D8%AA-%D8%A8%D9%8A%D8%B9-%D8%A7%D8%B4%D8%AA%D8%B1-%D9%88%D9%81%D8%B1/id6689517823",
      "https://suoq.net",
    ],
  },
  {
    title: "help them to reach",
    description:
      "An interactive website for student competitions, designed to engage primary school students through educational challenges and activities.",
    tags: [
      "TypeScript",
      "React",
      "Next.js (app router)",
      "Mongodb",
      "mongodb atlas",
      "zod",
      "prisma",
      "zustand",
      "react-query",
      "tailwindcss",
      "shadcn-ui",
      "vercel",
    ],
    imageUrl: HelpThemToReachPortrait,
    links: [
      "https://mostaql.com/u/maheraladdin/reviews/7564778",
      "https://qa-game-beige.vercel.app/",
    ],
  },
  {
    title: "Arees",
    description:
      "A mobile application built with Expo SDK 50 that allows users to explore, book, and manage travel programs from various agencies, featuring user authentication, favorites, and Stripe payment integration.",
    tags: [
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Mongodb",
      "mongodb atlas",
      "zod",
      "stripe",
      "prisma",
      "zustand",
    ],
    imageUrl: null,
    links: [
      "https://youtube.com/shorts/Whq_BA4fFzU?feature=share",
      "https://youtube.com/shorts/bT-iy5exIFE?feature=share",
      "https://github.com/maheraladdin/arees",
    ],
  },
  {
    title: "Miro Clone",
    description:
      "A collaborative whiteboard platform enabling teams to brainstorm, plan, and work together in real-time with visual tools like sticky notes, diagrams, and mind maps.",
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
    links: [
      "https://youtu.be/pqspmTIezus",
      "https://github.com/maheraladdin/miro-clone",
      "https://miro-clone-eight.vercel.app/",
    ],
  },
  {
    title: "Discord Clone",
    description:
      "A real-time communication platform inspired by Discord, offering voice, video, and text channels for seamless group collaboration and community interaction.",
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
    links: [
      "https://youtu.be/s1Xq5yGxYvE",
      "https://github.com/maheraladdin/discord-clone",
    ],
  },
  {
    title: "Taskify",
    description:
      "A project management tool like Trello that allows users to create and organize tasks through boards, lists, and cards with real-time collaboration features.",
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
    links: [
      "https://youtu.be/a_0Pp7d5nhk",
      "https://github.com/maheraladdin/trello-clone",
      "https://trello-clone-maheraladdin.vercel.app/",
    ],
  },
  {
    title: "Netflix Clone",
    description:
      "A streaming platform inspired by Netflix, allowing users to browse, stream, and manage a personalized library of movies and TV shows.",
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
    links: [
      "https://github.com/maheraladdin/netflix-clone",
      "https://netflix-clone-delta-roan.vercel.app",
    ],
  },
  {
    title: "E-Commerce website",
    description:
      "A single-vendor e-commerce web application offering seamless product browsing, secure checkout, and easy order management without inventory management features.",
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
    links: [
      "https://github.com/maheraladdin/reactjs-ecommerce-web-app",
      "https://github.com/maheraladdin/nodejs-ecommerce-api-v1",
      // "https://reactjs-ecommerce-web-app.vercel.app/",
    ],
  },
  {
    title: `CD2js`,
    description:
      "A mobile application that converts class diagrams into JavaScript code, automating the process of translating visual designs into functional code.",
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
    links: ["https://github.com/maheraladdin/CD2jsApp.git"],
  },
  {
    title: `ARFurniture`,
    description:
      "A mobile application for browsing and purchasing furniture, offering a seamless shopping experience with detailed product listings, secure payments, and delivery options.",
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
    links: [
      "https://github.com/maheraladdin/ARFurniture_firebase",
      "https://github.com/maheraladdin/ARFurniture-MERN",
    ],
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
  "digitalocean",
  "PM2",
  "namecheap",
  "nginx",
  "Next.js",
  "React router dom",
  "React",
  "bootstrap",
  "Shadcn ui",
  "React query",
  "Swr",
  "Agile",
  "Scrum",
  "Jira",
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

export const profiles = [
  "https://github.com/maheraladdin",
  "https://www.linkedin.com/in/maher-aladdin-mansour",
  "https://twitter.com/maheralaa2222",
  "https://codepen.io/maheraladdin",
  "https://mostaql.com/u/maheraladdin",
  "https://wa.me/+2001116491564",
  "https://t.me/maheraladdin",
];

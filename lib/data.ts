import React from "react";
import corpcommentImg from "@/public/boids.png";
import webappImg from "@/public/webapp.png";
import wordanalyticsImg from "@/public/business.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const; // this is for the specifics like home and about and not just ANY string
 
//experiences once i have it 

export const projectsData = [
  {
    title: "Imitating Birds",
    description:
      "Ever wondered how birds fly in flocks without hitting each other? theres a pattern to everything in this world.",
    tags: ["Java", "Java GUI"],
    imageUrl: corpcommentImg,
    link:'https://github.com/vishsec/imitatingBirds'
  },
  {
    title: "portfolio-webapp",
    description:
      "A portfolio web application which says a lot about me and my works.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","vercel", "Framer"],
    imageUrl: webappImg,
    link:'https://github.com/vishsec/portfolio-web-app'

  },
  {
    title: "real-estate webapp",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Express", "MongoDB", "Tailwind","Node"],
    imageUrl: wordanalyticsImg,
    link:'https://github.com/vishsec/business-app'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "MongoDB",
  "Redux",
  "postman",
  "php",
  "Express",
  "Spring",
  "Jframes",
  "sql",
  "Framer Motion",
] as const;
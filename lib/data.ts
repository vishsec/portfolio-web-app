import React from "react";
import GOImg from "@/public/gol.png";
import webappImg from "@/public/port.png";
import wordanalyticsImg from "@/public/bus.png";

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
    title: "real-estate webapp",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Express", "MongoDB", "Tailwind","Node"],
    imageUrl: wordanalyticsImg,
    link:'https://github.com/vishsec/business-app'
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
    title: "GO HTTP server",
    description:
      "My first GO project to understand implementation and working of GOlang",
    tags: ["GO", "Insomnia", "APIs"],
    imageUrl: GOImg,
    link:'https://github.com/vishsec/HTTP-server-'
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
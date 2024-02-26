import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import feedio from "@/public/feedio.png";
import bankAI from "@/public/bankAI.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "London, United Kingdom",
    description:
      "During this time I graduated from Le Wagon in London, which after I continued to learn and improve core skills",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Intern Frontend developer @ EnergyHUB UK",
    location: "Remote, United Kingdom",
    description: `
   • Used Git and Gitlab to manage code and collaborate with other team members 
   • Supported quality assurance by implementing unit and integration tests using Jest and React Testing Library
   • Assisted in the development and maintenance of responsive web pages, using React, with Bootstrap and HTML5
   • Implemented responsive design principles to ensure compatibility across various devices and browsers
 `,
    icon: React.createElement(CgWorkAlt),
    date: "08.2020 - 02.2021",
  },
  {
    title: "Full-Stack Developer @ Spark Networks",
    location: "Berlin, Germany",
    description: `
    • Worked with frontend frameworks and libraries like React.js and Next.js
    • Followed atomic design principles
    • Identified and resolved client bugs using Sentry, improving overall application stability
    • Maintained projects with technologies like Svelte, PHP, and WordPress
    • Developed responsive email templates for marketing using Liquid and Braze, streamlining development time by 8%
    • Developed a custom solution for migration of the employee database by 20% with the MERN stack and Docker
`,
    icon: React.createElement(CgWorkAlt),
    date: "02.2022 - 02.2023",
  },
  {
    title: "Junior Backend Software developer @ Rafiki",
    location: "Remote, Tanzania",
    description: `
    • Assisted in the development and maintenance of server-side logic, ensuring performance and scalability in Node/Express servers
    • Contributed in database management and schema design, using MySQL and Sequelize to ensure efficient data storage and retrieval
    • Actively participated in the integration of RESTful APIs within an MVSC architecture
    • Engaged in continuous learning and application of best practices in code quality, security measures, and software design patterns, under the guidance of senior developers
    • Supported team efforts in troubleshooting and debugging backend issues
`,
    icon: React.createElement(CgWorkAlt),
    date: "05.2023 - 10.2023",
  },
] as const;

export const projectsData = [
  {
    title: "feedio.app",
    description:
      "Feedio is a SaaS solution allowing users to seamlessly collect and display testimonials without the need for extensive web development or hosting and offering analytics tools",
    tags: ["React", "MUI", "MongoDB", "Node", "Express"],
    imageUrl: feedio,
  },
  {
    title: "AI Custom Knowledge Chat Bot",
    description: `
    A white label solution for businesses that leverages AI to provide instant, accurate responses to customer inquiries
  `,
    tags: ["React", "LangChain", "Supabase", "openAI"],
    imageUrl: bankAI,
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
  "Express",
  "Python",
  "SQL",
  "noSQL",
  "Git",
  "Apollo",
  "Docker",
] as const;

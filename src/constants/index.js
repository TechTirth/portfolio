import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I am a dedicated and versatile full stack developer 
with a passion for creating efficient and user-friendly 
web applications. With 2 years of professional experience, 
I have worked with a variety of technologies, including React, 
Next.js, Node.js, MySQL and MongoDB. My journey in web development 
began with a deep curiosity for how things work, and it has evolved 
into a career where I continuously strive to learn and 
adapt to new challenges. I thrive in collaborative 
environments and enjoy solving complex problems to 
deliver high-quality solutions. Outside of coding, I 
enjoy staying active, exploring new technologies, and 
contributing to open-source projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Feb 2024",
    role: "Frontend Developer",
    company: "Valsco Technology",
    description: `Worked in startup pre-incubated under VIT-TBI.
    Built Homepage and Notification Panel for a School’s Alumni Website using React.js and Typescript.
    Integrated API services to fetch and display dynamic data, enhancing the website’s functionality.`,
    technologies: ["Javascript", "React.js", "TypeScript"],
  },
  {
    year: "Oct 2023 - Dec 2024",
    role: "Backend Intern",
    company: "Jio Platforms Limited",
    description: `Gained knowledge about IT processes and Networking.
    Worked with REST APIs to retrieve and display data from databases.
    Developed a backend project on Jio Face App using Nodejs, Express and gained valuable experience in applying
    software development principles in an industry setting.`,
    technologies: ["Javascript", "Node.js", "Express", "Postman"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  email: "t1eerth.v@gmail.com",
};
